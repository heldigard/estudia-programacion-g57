// S18: Tablas y Filtrado
// Python: pandas, listas de diccionarios → JS: arrays de objetos, HTML tables

// ============================================
   DATOS DE EJEMPLO
   ============================================

// Datos locales (similar a lista de diccionarios en Python)
const estudiantes = [
  { id: 1, nombre: "Ana García", email: "ana.garcia@email.com", edad: 20, curso: "Python", nota: 95 },
  { id: 2, nombre: "Benito Martínez", email: "benito.m@email.com", edad: 22, curso: "JavaScript", nota: 87 },
  { id: 3, nombre: "Carolina López", email: "carolina.lopez@email.com", edad: 19, curso: "Python", nota: 92 },
  { id: 4, nombre: "Daniel Ruiz", email: "daniel.ruiz@email.com", edad: 21, curso: "Python", nota: 78 },
  { id: 5, nombre: "Elena Castro", email: "elena.castro@email.com", edad: 23, curso: "JavaScript", nota: 88 },
  { id: 6, nombre: "Felipe Torres", email: "felipe.torres@email.com", edad: 20, curso: "Python", nota: 85 },
  { id: 7, nombre: "Gina Morales", email: "gina.morales@email.com", edad: 22, curso: "JavaScript", nota: 91 },
  { id: 8, nombre: "Héctor Vargas", email: "hector.vargas@email.com", edad: 19, curso: "Python", nota: 79 },
  { id: 9, nombre: "Isabel Navarro", email: "isabel.navarro@email.com", edad: 21, curso: "JavaScript", nota: 94 },
  { id: 10, nombre: "Jorge Ríos", email: "jorge.rios@email.com", edad: 20, curso: "Python", nota: 82 },
];

// ============================================
   ESTADO GLOBAL
   ============================================
let datosFiltrados = [...estudiantes];
let paginaActual = 1;
const elementosPorPagina = 5;
let columnaOrden = null;
let ordenDireccion = 'asc';

// ============================================
   FUNCIONES DE RENDERIZADO
   ============================================

function renderTabla(datos = datosFiltrados) {
  const tbody = document.getElementById("tablaBody");
  const start = (paginaActual - 1) * elementosPorPagina;
  const end = start + elementosPorPagina;
  const paginados = datos.slice(start, end);

  if (paginados.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="no-results">
          No se encontraron resultados
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = paginados.map(est => `
    <tr class="fade-in">
      <td>
        <div class="avatar">
          <div class="avatar-circle">${est.nombre.charAt(0)}</div>
          <span>${est.nombre}</span>
        </div>
      </td>
      <td>${est.email}</td>
      <td>${est.edad}</td>
      <td>${est.curso}</td>
      <td><strong>${est.nota}</strong></td>
    </tr>
  `).join("");

  renderInfo(datos.length, paginados.length);
  renderPaginacion(datos.length);
}

function renderInfo(total, mostrados) {
  const info = document.getElementById("resultsInfo");
  info.innerHTML = `
    <span>Mostrando ${mostrados} de ${total} registros</span>
    <span>Página ${paginaActual}</span>
  `;
}

function renderPaginacion(total) {
  const totalPages = Math.ceil(total / elementosPorPagina);
  const pagination = document.getElementById("pagination");

  let html = `
    <button ${paginaActual === 1 ? 'disabled' : ''} onclick="cambiarPagina(${paginaActual - 1})">← Anterior</button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="${i === paginaActual ? 'current-page' : ''}" onclick="cambiarPagina(${i})">${i}</button>`;
  }

  html += `
    <button ${paginaActual === totalPages ? 'disabled' : ''} onclick="cambiarPagina(${paginaActual + 1})">Siguiente →</button>
  `;

  pagination.innerHTML = html;
}

function renderStats(datos) {
  const promedio = datos.reduce((sum, est) => sum + est.nota, 0) / datos.length;
  const maxNota = Math.max(...datos.map(est => est.nota));
  const minNota = Math.min(...datos.map(est => est.nota));

  document.getElementById("statTotal").textContent = datos.length;
  document.getElementById("statPromedio").textContent = promedio.toFixed(1);
  document.getElementById("statMax").textContent = maxNota;
  document.getElementById("statMin").textContent = minNota;
}

// ============================================
   FILTRADO
   // Python: [x for x in lista if condicion]
   // JS: lista.filter(x => condicion)
   ============================================

function filtrarDatos() {
  const busqueda = document.getElementById("busquedaInput")?.value?.toLowerCase() || "";
  const filtroCurso = document.getElementById("filtroCurso")?.value || "todos";

  // Python: [e for e in estudiantes if busqueda in e.nombre.lower()]
  datosFiltrados = estudiantes.filter(est => {
    const coincideNombre = est.nombre.toLowerCase().includes(busqueda) ||
                           est.email.toLowerCase().includes(busqueda);
    const coincideCurso = filtroCurso === "todos" || est.curso === filtroCurso;
    return coincideNombre && coincideCurso;
  });

  paginaActual = 1;
  renderTabla();
  renderStats(datosFiltrados);
}

function filtrarPorCurso(curso) {
  // Actualizar botones de filtro
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.remove("active");
    if (chip.getAttribute("data-curso") === curso) {
      chip.classList.add("active");
    }
  });

  // Actualizar select
  const select = document.getElementById("filtroCurso");
  if (select) {
    select.value = curso;
  }

  filtrarDatos();
}

function limpiarFiltros() {
  document.getElementById("busquedaInput").value = "";
  document.getElementById("filtroCurso").value = "todos";

  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.remove("active");
  });

  filtrarDatos();
}

// ============================================
   ORDENAMIENTO
   // Python: sorted(lista, key=lambda x: x.campo)
   // JS: lista.sort((a, b) => a.campo - b.campo)
   ============================================

function ordenarPor(columna) {
  // Toggle dirección si es la misma columna
  if (columnaOrden === columna) {
    ordenDireccion = ordenDireccion === 'asc' ? 'desc' : 'asc';
  } else {
    columnaOrden = columna;
    ordenDireccion = 'asc';
  }

  // Python: sorted(datos, key=lambda x: x[columna])
  datosFiltrados.sort((a, b) => {
    let valA = a[columna];
    let valB = b[columna];

    // Para strings, usar toLowerCase para comparación
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();

    if (valA < valB) return ordenDireccion === 'asc' ? -1 : 1;
    if (valA > valB) return ordenDireccion === 'asc' ? 1 : -1;
    return 0;
  });

  // Actualizar indicadores visuales
  document.querySelectorAll("th.sortable").forEach(th => {
    th.classList.remove("sort-asc", "sort-desc");
  });
  const th = document.querySelector(`th[data-columna="${columna}"]`);
  if (th) {
    th.classList.add(ordenDireccion === 'asc' ? 'sort-asc' : 'sort-desc');
  }

  renderTabla();
}

// ============================================
   PAGINACIÓN
   // Python: datos[start:end]
   // JS: datos.slice(start, end)
   ============================================

function cambiarPagina(pagina) {
  const totalPages = Math.ceil(datosFiltrados.length / elementosPorPagina);
  if (pagina < 1 || pagina > totalPages) return;

  paginaActual = pagina;
  renderTabla();
}

// ============================================
   BÚSQUEDA EN TIEMPO REAL
   ============================================

let debounceTimeout;
function busquedaEnTiempoReal() {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(filtrarDatos, 300);
}

// ============================================
   CARGAR DATOS DESDE API
   // Python: requests.get(url).json()
   // JS: fetch(url).then(r => r.json())
   ============================================

async function cargarDatosAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const users = await response.json();

    // Transformar datos de la API a nuestro formato
    estudiantes.length = 0;
    users.forEach((user, index) => {
      estudiantes.push({
        id: user.id,
        nombre: user.name,
        email: user.email,
        edad: 20 + (index % 10),
        curso: index % 2 === 0 ? "Python" : "JavaScript",
        nota: 70 + Math.floor(Math.random() * 30)
      });
    });

    datosFiltrados = [...estudiantes];
    filtrarDatos();

    mostrarNotificacion("Datos cargados desde API exitosamente");
  } catch (error) {
    console.error("Error cargando datos:", error);
    mostrarNotificacion("Error al cargar datos: " + error.message);
  }
}

function mostrarNotificacion(mensaje) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = mensaje;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--accent-success);
    color: white;
    padding: 12px 24px;
    border-radius: var(--radius-sm);
    animation: fadeIn 0.3s;
    z-index: 1000;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// ============================================
   INICIALIZACIÓN
   ============================================

console.log("%cS18: Tablas y Filtrado", "color: #a855f7; font-size: 20px; font-weight: bold;");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("lista.sort(key=) → array.sort((a,b) => a.campo - b.campo)");
console.log("lista.filter(condicion) → array.filter(item => condicion)");
console.log("datos[start:end] → datos.slice(start, end)");
console.log("[x for x in lista if cond] → lista.filter(x => cond)");

document.addEventListener("DOMContentLoaded", () => {
  // Cargar datos iniciales
  filtrarDatos();
  renderStats(estudiantes);

  // Event listeners para búsqueda
  const busquedaInput = document.getElementById("busquedaInput");
  if (busquedaInput) {
    busquedaInput.addEventListener("input", busquedaEnTiempoReal);
  }

  const filtroCurso = document.getElementById("filtroCurso");
  if (filtroCurso) {
    filtroCurso.addEventListener("change", filtrarDatos);
  }
});
