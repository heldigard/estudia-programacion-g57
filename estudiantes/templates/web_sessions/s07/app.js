/*
  =====================================================
  S07: Listas y Bucles - JAVASCRIPT
  =====================================================

  PYTHON LISTAS ↔ JAVASCRIPT ARRAYS
  ----------------------------------
  En JavaScript, las "listas" se llaman "arrays". Son muy
  similares a las listas de Python, pero con diferencias clave.

  CREACIÓN DE ARRAYS:
  ------------------
  // Sintaxis idéntica a Python
  const frutas = ["manzana", "banana", "naranja"];

  // Arrays pueden contener diferentes tipos
  const mixto = ["texto", 42, true, null];

  LONGITUD Y ACCESO:
  ------------------
  Python: len(lista)          → JS: array.length
  Python: lista[0]            → JS: array[0]
  Python: lista[-1]           → JS: array[array.length - 1]
                                (¡JavaScript NO tiene índices negativos!)

  MÉTODOS PARA AGREGAR/ELIMINAR:
  -----------------------------
  Python                          JavaScript
  ------                          -----------
  lista.append(x)                 array.push(x)         // Agrega al final
  lista.pop()                     array.pop()           // Quita del final
  lista.insert(0, x)              array.unshift(x)      // Inserta al inicio
  del lista[0]                    array.shift()         // Quita del inicio
  lista.remove(x)                 array.splice(indice, 1)  // Eliminar por índice

  FILTRADO Y TRANSFORMACIÓN:
  -------------------------
  Python: [x for x in lista if x > 5]   (list comprehension)
  JS: lista.filter(x => x > 5)          (array method)

  Python: [x * 2 for x in lista]
  JS: lista.map(x => x * 2)

  ITERACIÓN:
  ---------
  Python: for item in lista:
  JS: for (const item of array) { ... }
  JS: array.forEach(item => { ... })

  ESTADÍSTICAS:
  ------------
  Python: len(lista), min(lista), max(lista), sum(lista)
  JS: array.length, Math.min(...array), Math.max(...array), array.reduce((a,b)=>a+b,0)

  NOTA IMPORTANTE: El operador ... (spread) expande el array
  Math.min(...arr) es como Math.min(arr[0], arr[1], arr[2], ...)
*/

// S07: Listas y Bucles
// Equivalente JavaScript de las prácticas de Python

// ============================================
// ESTADO GLOBAL - Datos de ejemplo
// ============================================
let frutas = ["🍎 manzana", "🍌 banana", "🍊 naranja"];
let tareas = [];
const numerosEstadistica = [45, 12, 89, 34, 67, 23, 56, 78, 90, 11];
const numerosFiltrado = [23, 67, 45, 89, 12, 56, 78, 34, 90, 11];
let numerosOrdenar = [5, 2, 8, 1, 9, 3, 7, 4, 6];
const listaIndice = ["🍕 Pizza", "🍔 Hamburguesa", "🌭 Hot Dog", "🍟 Papas", "🌮 Taco"];

// ============================================
// UTILIDADES - Funciones de ayuda reutilizables
// ============================================

/**
 * mostrarResultado - Muestra un resultado en pantalla
 * Equivalente Python: print(resultado), pero en interfaz gráfica
 */
function mostrarResultado(elementId, contenido) {
  const elemento = document.getElementById(elementId);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
  elemento.classList.add("visible");
}

/**
 * obtenerNumero - Obtiene un valor numérico de un input
 * Equivalente Python: int(input(...)) con validación
 */
function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  const numero = Number(valor);
  return Number.isNaN(numero) ? null : numero;
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Explorador de Índices
 * Python: lista[0], lista[-1]
 * JS: lista[0], lista[lista.length - 1]
 *
 * IMPORTANTE: JavaScript NO soporta índices negativos directamente.
 * Para simular lista[-1], usamos lista[lista.length - 1]
 */
function explorarIndice() {
  const pos = obtenerNumero("indicePositivo");
  const neg = obtenerNumero("indiceNegativo");

  if (pos === null || neg === null) {
    mostrarResultado("resultadoIndice", "<p class='error'>Ingresa índices válidos.</p>");
    return;
  }

  let resultado = "";
  let error = "";

  // Índice positivo - igual que Python
  if (pos >= 0 && pos < listaIndice.length) {
    resultado += `<p><strong>Índice ${pos}:</strong> ${listaIndice[pos]}</p>`;
  } else {
    error += `Índice ${pos} fuera de rango. `;
  }

  // Índice negativo - JavaScript necesita conversión
  // Python: lista[-1]  →  JS: lista[lista.length - 1]
  // Python: lista[-2]  →  JS: lista[lista.length - 2]
  const negIndex = listaIndice.length + neg;
  if (neg >= -listaIndice.length && neg < 0) {
    resultado += `<p><strong>Índice ${neg}:</strong> ${listaIndice[negIndex]}</p>`;
  } else {
    error += `Índice ${neg} fuera de rango.`;
  }

  const html = `
    <div class="success-box">
      <h3>🔍 Acceso por Índice</h3>
      ${resultado || `<p class='error'>${error}</p>`}
      <p class="formula">
        Python: <code>lista[${pos}]</code> o <code>lista[${neg}]</code><br>
        JS: <code>lista[${pos}]</code> o <code>lista[${listaIndice.length}${neg}]</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoIndice", html);
}

/**
 * Métodos de Lista
 * Python: append(), pop(), remove(), insert()
 * JS: push(), pop(), shift(), splice()
 *
 * Diferencias clave:
 * - append() → push() (agregar al final)
 * - pop() funciona igual en ambos
 * - del lista[0] → shift() (eliminar primero)
 * - remove(valor) → splice(indice, 1) (eliminar por posición)
 * - insert(pos, valor) → splice(pos, 0, valor)
 */
function renderizarListaMetodos() {
  // map() transforma cada elemento en HTML
  const display = document.getElementById("listaMetodos");
  display.innerHTML = frutas.map(f => `<span class="lista-item">${f}</span>`).join("");
}

function agregarElemento() {
  const nuevo = document.getElementById("nuevoElemento").value.trim();

  if (!nuevo) {
    mostrarResultado("resultadoMetodos", "<p class='error'>Ingresa un elemento.</p>");
    return;
  }

  // Python: lista.append(nuevo)
  // JS: lista.push(nuevo)
  frutas.push(nuevo);
  document.getElementById("nuevoElemento").value = "";

  renderizarListaMetodos();
  mostrarResultado("resultadoMetodos", `
    <div class="success-box">
      <h3>✅ Elemento agregado</h3>
      <p>Python: <code>lista.append("${nuevo}")</code></p>
      <p>JS: <code>lista.push("${nuevo}")</code></p>
    </div>
  `);
}

function eliminarUltimo() {
  if (frutas.length === 0) {
    mostrarResultado("resultadoMetodos", "<p class='error'>La lista está vacía.</p>");
    return;
  }

  // Python: eliminado = lista.pop()
  // JS: const eliminado = lista.pop()
  const eliminado = frutas.pop();

  renderizarListaMetodos();
  mostrarResultado("resultadoMetodos", `
    <div class="info-box">
      <h3>🗑️ Último eliminado</h3>
      <p>Elemento eliminado: <strong>${eliminado}</strong></p>
      <p>Python: <code>lista.pop()</code></p>
      <p>JS: <code>lista.pop()</code></p>
    </div>
  `);
}

function eliminarPrimero() {
  if (frutas.length === 0) {
    mostrarResultado("resultadoMetodos", "<p class='error'>La lista está vacía.</p>");
    return;
  }

  // Python: del lista[0] o lista.pop(0)
  // JS: lista.shift()
  const eliminado = frutas.shift();

  renderizarListaMetodos();
  mostrarResultado("resultadoMetodos", `
    <div class="info-box">
      <h3>🗑️ Primero eliminado</h3>
      <p>Elemento eliminado: <strong>${eliminado}</strong></p>
      <p>Python: <code>del lista[0]</code></p>
      <p>JS: <code>lista.shift()</code></p>
    </div>
  `);
}

function insertarElemento() {
  const pos = obtenerNumero("indiceInsert");
  const elem = document.getElementById("elementoInsert").value.trim();

  if (pos === null || pos < 0 || pos > frutas.length) {
    mostrarResultado("resultadoMetodos", "<p class='error'>Posición inválida.</p>");
    return;
  }

  if (!elem) {
    mostrarResultado("resultadoMetodos", "<p class='error'>Ingresa un elemento.</p>");
    return;
  }

  // Python: lista.insert(pos, elem)
  // JS: lista.splice(pos, 0, elem)
  // splice significa: en posición 'pos', elimina 0 elementos, inserta 'elem'
  frutas.splice(pos, 0, elem);
  document.getElementById("elementoInsert").value = "";

  renderizarListaMetodos();
  mostrarResultado("resultadoMetodos", `
    <div class="success-box">
      <h3>✅ Elemento insertado</h3>
      <p>Insertado en posición ${pos}: <strong>${elem}</strong></p>
      <p>Python: <code>lista.insert(${pos}, "${elem}")</code></p>
      <p>JS: <code>lista.splice(${pos}, 0, "${elem}")</code></p>
    </div>
  `);
}

/**
 * Estadísticas de Lista
 * Python: len(), min(), max(), sum()
 * JS: .length, Math.min(), Math.max(), reduce()
 *
 * NOTA: Math.min() y Math.max() en JavaScript requieren el
 * operador spread (...) para expandir el array:
 * Math.min(...arr) es como Math.min(arr[0], arr[1], arr[2], ...)
 */
function renderizarListaEstadisticas() {
  const display = document.getElementById("listaEstadisticas");
  display.innerHTML = numerosEstadistica.map(n => `<span class="numero-chip">${n}</span>`).join(" ");
}

function calcularEstadisticas() {
  const lista = numerosEstadistica;

  // Python: len(lista), min(lista), max(lista), sum(lista)
  // JS: lista.length, Math.min(...lista), Math.max(...lista), lista.reduce((a,b)=>a+b, 0)
  const cantidad = lista.length;
  const minimo = Math.min(...lista);
  const maximo = Math.max(...lista);
  const suma = lista.reduce((acc, val) => acc + val, 0);
  const promedio = suma / cantidad;

  const html = `
    <div class="success-box">
      <h3>📊 Estadísticas</h3>
      <p><strong>Cantidad:</strong> ${cantidad}</p>
      <p><strong>Mínimo:</strong> ${minimo}</p>
      <p><strong>Máximo:</strong> ${maximo}</p>
      <p><strong>Suma:</strong> ${suma}</p>
      <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
      <p class="formula">
        Python: <code>len(), min(), max(), sum()</code><br>
        JS: <code>.length, Math.min(...), Math.max(...), reduce()</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoEstadisticas", html);
}

/**
 * Filtrado de Números
 * Python: [x for x in lista if x > 50]  (list comprehension)
 * JS: lista.filter(x => x > 50)          (array method)
 *
 * filter() crea un NUEVO array con los elementos que cumplen
 * la condición (la función retorna true).
 */
function renderizarNumerosFiltrar() {
  const display = document.getElementById("numerosFiltrar");
  display.innerHTML = numerosFiltrado.map(n => `<span class="numero-chip">${n}</span>`).join(" ");
}

function filtrarNumeros() {
  const umbral = obtenerNumero("umbralFiltro");

  if (umbral === null) {
    mostrarResultado("resultadoFiltro", "<p class='error'>Ingresa un umbral válido.</p>");
    return;
  }

  // Python: [x for x in numeros if x > umbral]
  // JS: numeros.filter(x => x > umbral)
  // filter() llama a la función para cada elemento, y si retorna
  // true, el elemento se incluye en el nuevo array.
  const filtrados = numerosFiltrado.filter(n => n > umbral);
  const rechazados = numerosFiltrado.filter(n => n <= umbral);

  const html = `
    <div class="success-box">
      <h3>🔢 Números mayores a ${umbral}</h3>
      <p><strong>Filtrados (${filtrados.length}):</strong> ${filtrados.join(", ")}</p>
      <p><strong>Rechazados (${rechazados.length}):</strong> ${rechazados.join(", ")}</p>
      <p class="formula">
        Python: <code>[x for x in lista if x > ${umbral}]</code><br>
        JS: <code>lista.filter(x => x > ${umbral})</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoFiltro", html);
}

/**
 * Gestor de Tareas
 * Python: append(), remove(), len(), enumerate()
 * JS: push(), splice(), .length, forEach()
 *
 * forEach() ejecuta una función para cada elemento del array.
 * Es como "for tarea in tareas:" en Python.
 */
function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const tarea = input.value.trim();

  if (!tarea) {
    mostrarResultado("resultadoTareas", "<p class='error'>Ingresa una tarea.</p>");
    return;
  }

  // Python: tareas.append(tarea)
  // JS: tareas.push(tarea)
  tareas.push(tarea);
  input.value = "";

  mostrarResultado("resultadoTareas", `
    <div class="success-box">
      <h3>✅ Tarea agregada</h3>
      <p>"${tarea}" se ha agregado a la lista.</p>
      <p>Total de tareas: ${tareas.length}</p>
    </div>
  `);
}

function verTareas() {
  const ul = document.getElementById("ulTareas");
  const listaDiv = document.getElementById("listaTareas");

  ul.innerHTML = "";

  if (tareas.length === 0) {
    mostrarResultado("resultadoTareas", "<p class='info-box'>📭 No hay tareas pendientes.</p>");
    listaDiv.classList.add("hidden");
    return;
  }

  // Python: for i, tarea in enumerate(tareas): print(f"{i+1}. {tarea}")
  // JS: tareas.forEach((tarea, i) => { ... })
  // forEach recibe una función con (elemento, indice)
  tareas.forEach((tarea, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${tarea}`;
    ul.appendChild(li);
  });

  listaDiv.classList.remove("hidden");
  mostrarResultado("resultadoTareas", `
    <div class="info-box">
      <h3>📋 Tus tareas</h3>
      <p>Total: ${tareas.length}</p>
    </div>
  `);
}

function eliminarTarea() {
  const num = obtenerNumero("numeroEliminar");

  if (!num || num < 1 || num > tareas.length) {
    mostrarResultado("resultadoTareas", `<p class='error'>Número inválido. Debe ser entre 1 y ${tareas.length || 0}.</p>`);
    return;
  }

  // Python: eliminada = tareas.pop(numero - 1)
  // JS: const eliminada = tareas.splice(numero - 1, 1)[0]
  // splice retorna un array con los elementos eliminados,
  // por eso tomamos [0] para obtener el primer (y único) elemento.
  const eliminada = tareas.splice(num - 1, 1)[0];

  verTareas();
  mostrarResultado("resultadoTareas", `
    <div class="success-box">
      <h3>🗑️ Tarea eliminada</h3>
      <p>"${eliminada}" ha sido eliminada.</p>
      <p>Quedan ${tareas.length} tareas.</p>
    </div>
  `);
}

/**
 * Ordenamiento
 * Python: sorted(lista) vs lista.sort()
 * JS: [...lista].sort() vs lista.sort()
 *
 * Diferencia IMPORTANTE en JavaScript:
 * - sort() sin argumentos ordena como STRINGS (alfabéticamente)
 * - Para números, SIEMPRE usa: array.sort((a, b) => a - b)
 */
function renderizarListasOrdenamiento() {
  const original = document.getElementById("listaOriginal");
  const ordenada = document.getElementById("listaOrdenada");

  original.innerHTML = numerosOrdenar.map(n => `<span class="numero-chip">${n}</span>`).join(" ");
  ordenada.innerHTML = numerosOrdenar.map(n => `<span class="numero-chip">${n}</span>`).join(" ");
}

function demostrarOrdenamiento() {
  // Python: ordenada = sorted(numeros) - original no cambia
  // JS: const ordenada = [...numeros].sort() - crea copia y ordena
  // [...numeros] crea una copia (spread operator)
  const ordenada = [...numerosOrdenar].sort((a, b) => a - b);

  document.getElementById("listaOrdenada").innerHTML =
    ordenada.map(n => `<span class="numero-chip" style="background: var(--accent-success)">${n}</span>`).join(" ");

  const html = `
    <div class="success-box">
      <h3>✅ sorted() - Nueva lista</h3>
      <p>La <strong>lista original</strong> NO cambió.</p>
      <p>Python: <code>nueva = sorted(lista)</code></p>
      <p>JS: <code>const nueva = [...lista].sort((a,b) => a-b)</code></p>
    </div>
  `;

  mostrarResultado("resultadoOrdenamiento", html);
}

function ordenarInPlace() {
  // Python: numeros.sort() - modifica la original
  // JS: numeros.sort((a,b) => a-b) - modifica la original
  numerosOrdenar.sort((a, b) => a - b);

  renderizarListasOrdenamiento();

  const html = `
    <div class="info-box">
      <h3>🔄 .sort() - Modifica original</h3>
      <p>La <strong>lista original</strong> SÍ cambió.</p>
      <p>Python: <code>lista.sort()</code></p>
      <p>JS: <code>lista.sort((a,b) => a-b)</code></p>
    </div>
  `;

  mostrarResultado("resultadoOrdenamiento", html);
}

// ============================================
// INICIALIZACION
// ============================================

console.log("%cS07: Listas y Bucles", "color: #a855f7; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("lista.append(x) (Python) → lista.push(x) (JS)");
console.log("lista.pop() (Python) → lista.pop() (JS)");
console.log("len(lista) (Python) → lista.length (JS)");
console.log("x in lista (Python) → lista.includes(x) (JS)");
console.log("[x for x in lista if x > 5] (Python) → lista.filter(x => x > 5) (JS)");

document.addEventListener("DOMContentLoaded", () => {
  // Renderizar listas iniciales
  renderizarListaIndice();
  renderizarListaMetodos();
  renderizarListaEstadisticas();
  renderizarNumerosFiltrar();
  renderizarListasOrdenamiento();

  // Permitir Enter para submit en inputs
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const button = input.closest(".card")?.querySelector("button:not(.option)");
        if (button && button.onclick) button.click();
      }
    });
  });
});

function renderizarListaIndice() {
  const display = document.getElementById("listaVisual");
  display.innerHTML = listaIndice.map((item, i) => `
    <div class="indice-item">
      <span class="indice-pos">[${i}]</span>
      <span class="indice-neg">[${i - listaIndice.length}]</span>
      <span class="indice-valor">${item}</span>
    </div>
  `).join("");
}
