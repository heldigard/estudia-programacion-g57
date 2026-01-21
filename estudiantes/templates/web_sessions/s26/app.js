// S26: Gestor de Tareas - CRUD completo
// Python: listas de diccionarios, funciones CRUD → JS: arrays de objetos, métodos CRUD

// ============================================
   ESTADO GLOBAL
   ============================================

// Python: tareas = [{"texto": "...", "completada": False}, ...]
// JS: Array de objetos con estructura similar
let tareas = [
  { id: 1, texto: "Aprender Python", completada: true, prioridad: "alta" },
  { id: 2, texto: "Practicar JavaScript", completada: false, prioridad: "media" },
  { id: 3, texto: "Construir un proyecto", completada: false, prioridad: "baja" }
];

let proximoId = 4;
let editandoId = null;
let filtroActual = "todos";

// ============================================
   CRUD - CREATE
   // Python: def agregar_tarea(texto): tareas.append({...})
   // JS: function agregarTarea(texto) { tareas.push({...}); }
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

  // Python: tareas.append({"texto": texto, "completada": False})
  const nuevaTarea = {
    id: proximoId++,
    texto: texto,
    completada: false,
    prioridad: prioridad,
    fecha: new Date().toISOString()
  };

  tareas.push(nuevaTarea);

  // Limpiar input
  input.value = "";
  input.focus();

  render();
}

// ============================================
   CRUD - READ
   // Python: def obtener_tareas(): return tareas
   // JS: function obtenerTareas() { return tareas; }
   ============================================

function obtenerTareas() {
  return tareas;
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
   CRUD - UPDATE
   // Python: def actualizar_tarea(id, **kwargs): ...
   // JS: function actualizarTarea(id, datos) { ... }
   ============================================

function toggleCompletada(id) {
  // Python: for t in tareas: if t["id"] == id: t["completada"] = not t["completada"]
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
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

  // Python: for t in tareas: if t["id"] == id: t["texto"] = nuevo_texto
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.texto = nuevoTexto;
    tarea.prioridad = nuevaPrioridad;
  }

  editandoId = null;
  render();
}

function cancelarEdicion() {
  editandoId = null;
  render();
}

// ============================================
   CRUD - DELETE
   // Python: def eliminar_tarea(id): tareas[:] = [t for t in tareas if t["id"] != id]
   // JS: function eliminarTarea(id) { tareas = tareas.filter(t => t.id !== id); }
   ============================================

function eliminarTarea(id) {
  if (!confirm("¿Estás seguro de eliminar esta tarea?")) {
    return;
  }

  // Python: tareas = [t for t in tareas if t["id"] != id]
  tareas = tareas.filter(t => t.id !== id);
  render();
}

// ============================================
   FILTRADO
   ============================================

function setFiltro(filtro) {
  filtroActual = filtro;

  // Actualizar botones de filtro
  document.querySelectorAll(".filtro-chip").forEach(chip => {
    chip.classList.remove("active");
    if (chip.getAttribute("data-filtro") === filtro) {
      chip.classList.add("active");
    }
  });

  render();
}

// ============================================
   RENDERIZADO
   // Python: print(tareas) o mostrar en consola
   // JS: Manipular DOM para mostrar tareas en HTML
   ============================================

function render() {
  const lista = document.getElementById("tareaLista");
  const tareasFiltradas = obtenerTareasFiltradas();

  // Actualizar estadísticas
  actualizarStats();

  // Mostrar lista vacía si no hay tareas
  if (tareasFiltradas.length === 0) {
    lista.innerHTML = `
      <li class="empty-state">
        No hay tareas para mostrar
      </li>
    `;
    return;
  }

  // Python: print(f"{t['texto']} - {'✓' if t['completada'] else '○'}")
  lista.innerHTML = tareasFiltradas.map(tarea => {
    if (editandoId === tarea.id) {
      // Formulario de edición
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

    // Vista normal
    return `
      <li class="task-item ${tarea.completada ? "completed" : ""}" data-id="${tarea.id}">
        <input type="checkbox" class="task-checkbox" ${tarea.completada ? "checked" : ""}
          onchange="toggleCompletada(${tarea.id})" />
        <div class="task-content">
          <div class="task-text">
            <span class="task-priority ${tarea.prioridad}">${tarea.prioridad.toUpperCase()}</span>
            ${tarea.texto}
          </div>
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

// ============================================
   INICIALIZACIÓN
   ============================================

console.log("%cS26: Gestor de Tareas - CRUD completo", "color: #06b6d4; font-size: 20px; font-weight: bold;");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("tareas.append({...}) → tareas.push({...})");
console.log("tareas.filter(condicion) → tareas.filter(t => condicion)");
console.log("tareas.find(condicion) → tareas.find(t => condicion)");
console.log("for t in tareas: if t['id'] == id: → tareas.find(t => t.id === id)");

document.addEventListener("DOMContentLoaded", () => {
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
