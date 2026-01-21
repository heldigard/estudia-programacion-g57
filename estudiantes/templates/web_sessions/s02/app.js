// S02: Variables y Tipos de Datos
// Equivalente JavaScript de las prácticas de Python

// ============================================
// UTILIDADES
// ============================================

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

function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  const numero = Number(valor);
  return Number.isNaN(numero) ? null : numero;
}

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
