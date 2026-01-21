/*
  =====================================================
  S02: Variables y Tipos - JAVASCRIPT
  =====================================================

  ¿QUÉ ES JAVASCRIPT?
  -------------------
  JavaScript es el lenguaje de programación de la web.
  Hace las páginas INTERACTIVAS: responde a clicks, calcula,
  muestra mensajes, modifica el contenido dinámicamente.

  CONEXIÓN PYTHON ↔ JAVASCRIPT:
  -----------------------------
  Python                          JavaScript
  ------                          -----------
  x = 5                            let x = 5;
  print(x)                         console.log(x);
  f"Hola {x}"                      `Hola ${x}`
  type(x)                          typeof x
  isinstance(x, int)               typeof x === "number"
  int(texto)                       Number(texto) o parseInt(texto)
  str(numero)                      String(numero)

  VARIABLES EN JAVASCRIPT:
  ------------------------
  let x = 5;      - Variable que puede cambiar (como var normal en Python)
  const x = 5;     - Variable constante (no puede reasignarse)
  var x = 5;       - Forma antigua (NO usar, usa let/const)

  FUNCIONES EN JAVASCRIPT:
  -----------------------
  function miFuncion() {
    // código aquí
  }

  const miFuncion = () => {
    // Arrow function (forma moderna)
  }

  MANIPULACIÓN DEL DOM:
  ---------------------
  El DOM (Document Object Model) es cómo JavaScript representa
  la página HTML. Podemos acceder y modificar elementos:

  document.getElementById("id")       - Encuentra elemento por id
  element.value                       - Valor de un input
  element.innerHTML                   - Contenido HTML de un elemento
  element.classList.add("clase")      - Agregar clase CSS
  element.classList.remove("clase")   - Quitar clase CSS
*/

// S02: Variables y Tipos de Datos
// Equivalente JavaScript de las prácticas de Python

// ============================================
// UTILIDADES - Funciones de ayuda reutilizables
// ============================================

/**
 * mostrarResultado - Muestra un resultado en pantalla
 * 
 * Equivalente Python: print(resultado), pero en una interfaz gráfica
 * 
 * @param {string} elementId - El ID del elemento HTML donde mostrar el resultado
 * @param {string} contenido - El contenido HTML a mostrar
 * @param {boolean} esTicket - Si es true, no muestra en consola (opcional)
 * 
 * Conceptos clave:
 * - document.getElementById() encuentra un elemento por su id
 * - .innerHTML modifica el contenido HTML de un elemento
 * - .classList.add/remove agrega/quita clases CSS
 * - Las clases CSS controlan si el elemento se ve o no
 */
function mostrarResultado(elementId, contenido, esTicket = false) {
  const elemento = document.getElementById(elementId);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
  elemento.classList.add("visible");

  if (!esTicket) {
    console.log("--- Resultado ---");
    console.log(contenido);
  }
}

function limpiarResultado(elementId) {
  const elemento = document.getElementById(elementId);
  elemento.classList.add("hidden");
  elemento.classList.remove("visible");
}

/**
 * obtenerNumero - Obtiene un valor numérico de un input
 * 
 * Equivalente Python: int(input(...)) pero con validación
 * 
 * Conceptos clave:
 * - Number() convierte texto a número
 * - Number.isNaN() verifica si NO es un número válido
 * - ?? es el "nullish coalescing operator" (retorna valor si es null/undefined)
 * 
 * @param {string} id - El ID del input HTML
 * @returns {number|null} - El número o null si es inválido
 */
function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  const numero = Number(valor);
  return Number.isNaN(numero) ? null : numero;
}

/**
 * obtenerTexto - Obtiene texto de un input
 * 
 * Equivalente Python: input(...).strip() o "(vacio)" si está vacío
 * 
 * Conceptos clave:
 * - .trim() elimina espacios al inicio y final
 * - || es el operador OR (retorna el primer valor verdadero)
 * 
 * @param {string} id - El ID del input HTML
 * @returns {string} - El texto del input
 */
function obtenerTexto(id) {
  return document.getElementById(id).value.trim() || "(vacio)";
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Calculadora de Edad
 * Python: input() -> int() -> calculo -> print()
 * JS: input.value -> Number() -> calculo -> innerHTML
 */
function calcularEdad() {
  const anioNacimiento = obtenerNumero("anio");

  if (!anioNacimiento) {
    mostrarResultado("resultadoEdad", "<p class='error'>Por favor, ingresa un año valido.</p>");
    return;
  }

  const anioActual = new Date().getFullYear();
  const edad = anioActual - anioNacimiento;

  const resultado = `
    <div class="success-box">
      <h3>Resultado:</h3>
      <p>Si naciste en <strong>${anioNacimiento}</strong>, tienes aproximadamente <strong>${edad}</strong> anos.</p>
      <p class="formula">Formula: ${anioActual} - ${anioNacimiento} = ${edad}</p>
    </div>
  `;

  mostrarResultado("resultadoEdad", resultado);

  console.log(`Python equivalente:`);
  console.log(`anio_nacimiento = int(input("Anio: "))  # ${anioNacimiento}`);
  console.log(`edad = ${anioActual} - anio_nacimiento  # ${edad}`);
}

/**
 * Perfil Personal
 * Python: Practica con f-strings
 * JS: Template literals (comillas invertidas)
 */
function mostrarPerfil() {
  const nombre = obtenerTexto("nombre");
  const edad = obtenerNumero("edad") ?? 0;
  const ciudad = obtenerTexto("ciudad");

  const resultado = `
    <div class="success-box">
      <h3>Perfil:</h3>
      <p>Hola, <strong>${nombre}</strong>.</p>
      <p>Tienes <strong>${edad}</strong> anos y vives en <strong>${ciudad}</strong>.</p>
    </div>
  `;

  mostrarResultado("resultadoPerfil", resultado);

  console.log("Python f-string equivalente:");
  console.log(`print(f"Hola, {nombre}. Tienes {edad} anos y vives en {ciudad}")`);
}

/**
 * Verificador de Tipos
 * Python: type(), isinstance()
 * JS: typeof
 */
function verificarTipo() {
  const input = document.getElementById("valor");
  const valor = input.value;

  if (!valor.trim()) {
    mostrarResultado("resultadoTipo", "<p class='error'>Escribe algo para verificar su tipo.</p>");
    return;
  }

  let tipo;
  let tipoPython;

  // Intentamos convertir a diferentes tipos
  if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
    tipo = "boolean";
    tipoPython = "bool";
  } else if (!isNaN(valor) && valor !== "") {
    tipo = "number";
    tipoPython = "int o float (JS no distingue)";
  } else {
    tipo = "string";
    tipoPython = "str";
  }

  const resultado = `
    <div class="info-box">
      <h3>Analisis de Tipo:</h3>
      <p><strong>Valor ingresado:</strong> "${valor}"</p>
      <p><strong>Tipo en JavaScript:</strong> <code>${tipo}</code></p>
      <p><strong>Tipo equivalente en Python:</strong> <code>${tipoPython}</code></p>
      <p class="comparison-code">
        <strong>Python:</strong> <code>type("${valor}")</code><br>
        <strong>JavaScript:</strong> <code>typeof "${valor}"</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoTipo", resultado);

  console.log(`typeof "${valor}":`, tipo);
}

/**
 * Ticket de Compra
 * Python: Mini-proyecto completo
 * JS: Version web interactiva
 */
function generarTicket() {
  const producto = obtenerTexto("producto");
  const precio = obtenerNumero("precio");
  const cantidad = obtenerNumero("cantidad");
  const descuento = obtenerNumero("descuento") ?? 0;

  if (!precio || !cantidad) {
    mostrarResultado("resultadoTicket", "<p class='error'>Por favor, completa precio y cantidad.</p>");
    return;
  }

  const subtotal = precio * cantidad;
  const total = subtotal * (1 - descuento / 100);

  const ticket = `
    <div class="ticket-content">
      <div class="ticket-header">=== TICKET DE COMPRA ===</div>
      <div class="ticket-body">
        <p><span>Producto:</span> <span>${producto}</span></p>
        <p><span>Precio unitario:</span> <span>$${formatNumber(precio)}</span></p>
        <p><span>Cantidad:</span> <span>${cantidad}</span></p>
        <p class="subtotal"><span>Subtotal:</span> <span>$${formatNumber(subtotal)}</span></p>
        <p class="descuento"><span>Descuento:</span> <span>${descuento}%</span></p>
        <p class="total"><span>TOTAL:</span> <span>$${formatNumber(total)}</span></p>
      </div>
      <div class="ticket-footer">Gracias por tu compra</div>
    </div>
  `;

  mostrarResultado("resultadoTicket", ticket, true);
}

/**
 * Formatea numeros con separador de miles
 * Python: f"{numero:,}"
 * JS: numero.toLocaleString()
 */
function formatNumber(numero) {
  return numero.toLocaleString("es-CO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// ============================================
// INICIALIZACION
// ============================================

console.log("%cS02: Variables y Tipos", "color: #38bdf8; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("Python: nombre = input() -> string");
console.log("JS: const nombre = input.value -> string");
console.log("\nPython: numero = int(texto)");
console.log("JS: const numero = Number(texto) o parseInt(texto)");
console.log("\nPython: print(f'Hola {nombre}')");
console.log('JS: console.log(`Hola ${nombre}`)');

// Permitir Enter para submit en inputs
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const button = input.closest(".card").querySelector("button");
        if (button) button.click();
      }
    });
  });
});
