// =====================================================
// S18: Tablas y Filtrado - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - Crear tablas HTML con <table>, <thead>, <tbody>
// - Llenar tablas con innerHTML
// - Filtrar datos con array.filter()
// - Contar elementos con array.length
//
// Python vs JavaScript:
// Python: len(lista)                  JS: lista.length
// Python: [x for x in lista if cond]  JS: lista.filter(x => cond)
// Python: ", ".join(lista)            JS: lista.map(x => x).join(", ")
//
// =====================================================

// Datos de ejemplo
const estudiantes = [
  { nombre: "Ana García", edad: 20, curso: "Python", nota: 95 },
  { nombre: "Benito Martínez", edad: 22, curso: "JavaScript", nota: 87 },
  { nombre: "Carolina López", edad: 19, curso: "Python", nota: 92 },
  { nombre: "Daniel Ruiz", edad: 21, curso: "Python", nota: 78 },
  { nombre: "Elena Castro", edad: 23, curso: "JavaScript", nota: 88 }
];

const productos = [
  { nombre: "Laptop", precio: 1200000, stock: 5 },
  { nombre: "Mouse", precio: 45000, stock: 20 },
  { nombre: "Teclado", precio: 120000, stock: 15 },
  { nombre: "Monitor", precio: 450000, stock: 8 }
];

// -----------------------------------------------------
// RETO 1: Llenar Tabla Básica
// -----------------------------------------------------
//
// innerHTML nos permite agregar HTML dentro de un elemento
//
// TU MISIÓN:
// 1. Completa llenarTabla1() con innerHTML
// Pista: Usa template literals ` ` para crear las filas
// -----------------------------------------------------

function llenarTabla1() {
  const tbody = document.getElementById("tablaBody1");

  // TODO: Llena la tabla con los datos de estudiantes
  // Pista: tbody.innerHTML = estudiantes.map(e => `<tr>...</tr>`).join("");
  // Pista: Usa ${e.nombre}, ${e.edad}, ${e.curso}
  /*
  tbody.innerHTML = estudiantes.map(e => `
    <tr>
      <td>${e.nombre}</td>
      <td>${e.edad}</td>
      <td>${e.curso}</td>
    </tr>
  `).join("");
  */

  mostrarResultado("resultado1", `
    <div class="success-box">
      <h3>¡Tabla Llena!</h3>
      <p>Se mostraron ${estudiantes.length} estudiantes.</p>
      <p class="formula">
        Python: <code>for e in estudiantes: print(e.nombre, e.edad)</code><br>
        JS: <code>estudiantes.map(e => \`&lt;tr&gt;...\`)</code>
      </p>
    </div>
  `);
}

// -----------------------------------------------------
// RETO 2: Mostrar Productos
// -----------------------------------------------------
//
// map() transforma cada elemento del array
// join("") une todos los strings en uno solo
//
// TU MISIÓN:
// 1. Completa llenarTabla2() con map() y join()
// -----------------------------------------------------

function llenarTabla2() {
  const tbody = document.getElementById("tablaBody2");

  // TODO: Llena la tabla con productos usando map y join
  // Pista: productos.map(p => `<tr>...</tr>`).join("")
  /*
  tbody.innerHTML = productos.map(p => `
    <tr class="fila-resaltada">
      <td>${p.nombre}</td>
      <td>$${p.precio}</td>
      <td>${p.stock}</td>
    </tr>
  `).join("");
  */

  mostrarResultado("resultado2", `
    <div class="info-box">
      <h3>📋 Productos Mostrados</h3>
      <p><strong>Total:</strong> ${productos.length} productos</p>
      <p class="formula">
        Python: <code>[p for p in productos]</code><br>
        JS: <code>productos.map(p => ...).join("")</code>
      </p>
    </div>
  `);
}

// -----------------------------------------------------
// RETO 3: Filtrar Notas
// -----------------------------------------------------
//
// filter() devuelve solo los elementos que cumplen una condición
//
// TU MISIÓN:
// 1. Completa filtrarNotas() con array.filter()
// -----------------------------------------------------

function filtrarNotas() {
  const minNota = parseInt(document.getElementById("filtroNota").value) || 0;

  // TODO: Filtra estudiantes con nota mayor a minNota
  // Pista: estudiantes.filter(e => e.nota > minNota)
  // const filtrados = estudiantes.filter(e => e.nota > minNota);
  const filtrados = estudiantes;  // <-- Cambia esto

  // Crear HTML con resultados
  let filasHtml = filtrados.map(e => `
    <tr>
      <td>${e.nombre}</td>
      <td><strong>${e.nota}</strong></td>
      <td>${e.curso}</td>
    </tr>
  `).join("");

  mostrarResultado("resultado3", `
    <div class="filtro-activo">
      <h3>🔍 Resultados del Filtro</h3>
      <p><strong>Notas > ${minNota}:</strong> ${filtrados.length} estudiantes</p>
      ${filtrados.length > 0 ? `
        <table class="tabla-borde">
          <thead>
            <tr><th>Nombre</th><th>Nota</th><th>Curso</th></tr>
          </thead>
          <tbody>${filasHtml}</tbody>
        </table>
      ` : '<p class="error">No hay estudiantes con esa nota.</p>'}
      <p class="formula">
        Python: <code>[e for e in estudiantes if e["nota"] > ${minNota}]</code><br>
        JS: <code>estudiantes.filter(e => e.nota > ${minNota})</code>
      </p>
    </div>
  `);
}

// -----------------------------------------------------
// RETO 4: Contar y Resumir
// -----------------------------------------------------
//
// length nos da la cantidad de elementos
// reduce() nos permite acumular valores (sumar)
//
// TU MISIÓN:
// 1. Calcula el promedio de notas con reduce()
// -----------------------------------------------------

function contarEstudiantes() {
  // TODO: Calcula el promedio de notas
  // Pista: reduce((sum, e) => sum + e.nota, 0) / estudiantes.length
  const promedio = 0;  // <-- Cambia esto
  const maxNota = 0;   // <-- Calcula la nota máxima
  const minNota = 100; // <-- Calcula la nota mínima

  mostrarResultado("resultado4", `
    <div class="resumen-box">
      <h3>📊 Resumen de Estudiantes</h3>
      <p><strong>Total:</strong> ${estudiantes.length} estudiantes</p>
      <p><strong>Promedio:</strong> ${promedio.toFixed(1)}</p>
      <p><strong>Nota Máxima:</strong> ${maxNota}</p>
      <p><strong>Nota Mínima:</strong> ${minNota}</p>
      <p class="formula">
        Python: <code>len(estudiantes), sum(), max(), min()</code><br>
        JS: <code>length, reduce(), Math.max(), Math.min()</code>
      </p>
    </div>
  `);
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}

console.log("S18: Tablas y Filtrado - Abre la consola (F12) para ver logs");
