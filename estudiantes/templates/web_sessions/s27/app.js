// S27: Persistencia con localStorage
// Python: archivos JSON, pickle, sqlite → JS: localStorage, sessionStorage, IndexedDB

// ============================================
   CONFIGURACIÓN Y CLAVE DE ALMACENAMIENTO
   ============================================

const STORAGE_KEY = "tareas-estudia-s27";

// Python: ARCHIVO = "tareas.json"
// JS: const STORAGE_KEY = "tareas-estudia-s27"

// ============================================
   ESTADO GLOBAL
   ============================================

let tareas = [];
let proximoId = 1;
let editandoId = null;
let filtroActual = "todos";

// ============================================
   LOCALSTORAGE - SAVE
   // Python: json.dump(tareas, open("tareas.json", "w"))
   // JS: localStorage.setItem(key, JSON.stringify(data))
   ============================================

function guardarTareas() {
  try {
    // Python: json.dump(tareas, open("tareas.json", "w"))
    // JS: localStorage.setItem(key, JSON.stringify(tareas))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));

    // Actualizar indicador de almacenamiento
    actualizarStorageIndicator(true);

    console.log("✅ Tareas guardadas en localStorage");
  } catch (error) {
    console.error("❌ Error guardando tareas:", error);
    actualizarStorageIndicator(false);
    alert("Error al guardar tareas. El almacenamiento podría estar lleno.");
  }
}

// ============================================
   LOCALSTORAGE - LOAD
   // Python: tareas = json.load(open("tareas.json", "r"))
   // JS: tareas = JSON.parse(localStorage.getItem(key)) || []
   ============================================

function cargarTareas() {
  try {
    // Python: with open("tareas.json", "r") as f: tareas = json.load(f)
    // JS: const data = localStorage.getItem(key); tareas = data ? JSON.parse(data) : []
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
      tareas = JSON.parse(data);
    } else {
      tareas = [];
    }

    // Calcular próximo ID
    if (tareas.length > 0) {
      const maxId = Math.max(...tareas.map(t => t.id || 0));
      proximoId = maxId + 1;
    }

    actualizarStorageIndicator(true);
    console.log("✅ Tareas cargadas desde localStorage:", tareas.length);
  } catch (error) {
    console.error("❌ Error cargando tareas:", error);
    tareas = [];
    actualizarStorageIndicator(false);
  }
}

// ============================================
   LOCALSTORAGE - DELETE
   // Python: os.remove("tareas.json")
   // JS: localStorage.removeItem(key)
   ============================================

function limpiarStorage() {
  if (!confirm("¿Estás seguro de eliminar todas las tareas y limpiar el almacenamiento?")) {
    return;
  }

  // Python: os.remove("tareas.json")
  // JS: localStorage.removeItem(key)
  localStorage.removeItem(STORAGE_KEY);

  tareas = [];
  proximoId = 1;
  render();

  console.log("🗑️ Almacenamiento limpiado");
}

// ============================================
   CRUD CON PERSISTENCIA
   ============================================

function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const prioridadSelect = document.getElementById("prioridadSelect");
  const texto = input.value.trim();
  const prioridad = prioridadSelect.value;

  if (!texto) {
    alert("Por favor, escribe una tarea");
    return;
  }

  const nuevaTarea = {
    id: proximoId++,
    texto: texto,
    completada: false,
    prioridad: prioridad,
    fecha: new Date().toISOString()
  };

  tareas.push(nuevaTarea);

  // Guardar en localStorage después de cada cambio
  guardarTareas();

  input.value = "";
  input.focus();

  render();
}

function toggleCompletada(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    guardarTareas();
    render();
  }
}

function mostrarEditar(id) {
  editandoId = id;
  render();
}

function guardarEdicion(id) {
  const input = document.getElementById(`edit-${id}`);
  const prioridadSelect = document.getElementById(`edit-prioridad-${id}`);
  const nuevoTexto = input.value.trim();
  const nuevaPrioridad = prioridadSelect.value;

  if (!nuevoTexto) {
    alert("La tarea no puede estar vacía");
    return;
  }

  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.texto = nuevoTexto;
    tarea.prioridad = nuevaPrioridad;
    guardarTareas();
  }

  editandoId = null;
  render();
}

function cancelarEdicion() {
  editandoId = null;
  render();
}

function eliminarTarea(id) {
  if (!confirm("¿Estás seguro de eliminar esta tarea?")) {
    return;
  }

  tareas = tareas.filter(t => t.id !== id);
  guardarTareas();
  render();
}

// ============================================
   FILTRADO
   ============================================

function setFiltro(filtro) {
  filtroActual = filtro;

  document.querySelectorAll(".filtro-chip").forEach(chip => {
    chip.classList.remove("active");
    if (chip.getAttribute("data-filtro") === filtro) {
      chip.classList.add("active");
    }
  });

  render();
}

function obtenerTareasFiltradas() {
  if (filtroActual === "todos") {
    return tareas;
  } else if (filtroActual === "pendientes") {
    return tareas.filter(t => !t.completada);
  } else if (filtroActual === "completadas") {
    return tareas.filter(t => t.completada);
  }
  return tareas;
}

// ============================================
   RENDERIZADO
   ============================================

function render() {
  const lista = document.getElementById("tareaLista");
  const tareasFiltradas = obtenerTareasFiltradas();

  actualizarStats();

  if (tareasFiltradas.length === 0) {
    lista.innerHTML = `
      <li class="empty-state">
        ${tareas.length === 0 ? "No hay tareas. ¡Agrega una!" : "No hay tareas en esta vista."}
      </li>
    `;
    return;
  }

  lista.innerHTML = tareasFiltradas.map(tarea => {
    if (editandoId === tarea.id) {
      return `
        <li class="task-item" data-id="${tarea.id}">
          <input type="checkbox" class="task-checkbox" ${tarea.completada ? "checked" : ""} disabled />
          <div class="task-content" style="flex: 1">
            <input type="text" id="edit-${tarea.id}" value="${tarea.texto}"
              style="width: 100%; padding: 8px; margin: 0; border-radius: 6px; border: 1px solid var(--accent-primary); background: var(--bg-secondary); color: var(--text-primary);" />
            <div style="margin-top: 8px;">
              <select id="edit-prioridad-${tarea.id}"
                style="padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary);">
                <option value="alta" ${tarea.prioridad === "alta" ? "selected" : ""}>Alta</option>
                <option value="media" ${tarea.prioridad === "media" ? "selected" : ""}>Media</option>
                <option value="baja" ${tarea.prioridad === "baja" ? "selected" : ""}>Baja</option>
              </select>
            </div>
          </div>
          <div class="task-actions">
            <button class="btn-icon success" onclick="guardarEdicion(${tarea.id})" title="Guardar">✓</button>
            <button class="btn-icon" onclick="cancelarEdicion()" title="Cancelar">✕</button>
          </div>
        </li>
      `;
    }

    const fecha = new Date(tarea.fecha).toLocaleDateString();

    return `
      <li class="task-item ${tarea.completada ? "completed" : ""}" data-id="${tarea.id}">
        <input type="checkbox" class="task-checkbox" ${tarea.completada ? "checked" : ""}
          onchange="toggleCompletada(${tarea.id})" />
        <div class="task-content">
          <div class="task-text">
            <span class="task-priority ${tarea.prioridad}">${tarea.prioridad.toUpperCase()}</span>
            ${tarea.texto}
          </div>
          <div class="task-meta">📅 ${fecha}</div>
        </div>
        <div class="task-actions">
          <button class="btn-icon edit" onclick="mostrarEditar(${tarea.id})" title="Editar">✏️</button>
          <button class="btn-icon delete" onclick="eliminarTarea(${tarea.id})" title="Eliminar">🗑️</button>
        </div>
      </li>
    `;
  }).join("");
}

function actualizarStats() {
  const total = tareas.length;
  const completadas = tareas.filter(t => t.completada).length;
  const pendientes = total - completadas;

  document.getElementById("statTotal").textContent = total;
  document.getElementById("statPendientes").textContent = pendientes;
  document.getElementById("statCompletadas").textContent = completadas;
}

function actualizarStorageIndicator(disponible) {
  const indicator = document.getElementById("storageIndicator");
  if (indicator) {
    indicator.classList.toggle("offline", !disponible);
  }
}

// ============================================
   INICIALIZACIÓN
   ============================================

console.log("%cS27: Persistencia con localStorage", "color: #a855f7; font-size: 20px; font-weight: bold;");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("json.dump(data, file) → localStorage.setItem(key, JSON.stringify(data))");
console.log("json.load(file) → JSON.parse(localStorage.getItem(key))");
console.log("os.remove(file) → localStorage.removeItem(key)");
console.log("\n--- Storage API ---");
console.log("localStorage.setItem(key, value) - Guarda string");
console.log("localStorage.getItem(key) - Obtiene string");
console.log("localStorage.removeItem(key) - Elimina clave");
console.log("localStorage.clear() - Limpia todo");
console.log("localStorage.length - Cantidad de claves");
console.log("localStorage.key(index) - Obtiene clave por índice");

document.addEventListener("DOMContentLoaded", () => {
  // Cargar tareas desde localStorage al inicio
  cargarTareas();
  render();

  // Enter key para agregar tarea
  const input = document.getElementById("tareaInput");
  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        agregarTarea();
      }
    });
  }
});

// Detectar cambios en otras pestañas
window.addEventListener("storage", (e) => {
  if (e.key === STORAGE_KEY) {
    console.log("🔄 Cambios detectados en otra pestaña");
    cargarTareas();
    render();
  }
});
