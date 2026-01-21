// S03: Operadores y Expresiones
// Equivalente JavaScript de las prácticas de Python

// ============================================
// UTILIDADES
// ============================================

function mostrarResultado(elementId, contenido) {
  const elemento = document.getElementById(elementId);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
  elemento.classList.add("visible");
}

function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  const numero = Number(valor);
  return Number.isNaN(numero) ? null : numero;
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Calculadora Básica
 * Python: Todos los operadores aritméticos
 * JS: ¡Son IGUALES! +, -, *, /, %, **
 */
function calcularOperaciones() {
  const num1 = obtenerNumero("num1");
  const num2 = obtenerNumero("num2");

  if (num1 === null || num2 === null) {
    mostrarResultado("resultadoCalc", "<p class='error'>Por favor, ingresa ambos números.</p>");
    return;
  }

  const suma = num1 + num2;
  const resta = num1 - num2;
  const multi = num1 * num2;
  const div = num2 !== 0 ? num1 / num2 : "∞ (división por cero)";
  const modulo = num1 % num2;
  const potencia = num1 ** num2;

  const resultado = `
    <div class="success-box">
      <h3>Resultados para ${num1} y ${num2}:</h3>
      <div class="operadores-grid">
        <p><strong>Suma (+):</strong> ${suma}</p>
        <p><strong>Resta (-):</strong> ${resta}</p>
        <p><strong>Multiplicación (*):</strong> ${multi}</p>
        <p><strong>División (/):</strong> ${div}</p>
        <p><strong>Módulo (%):</strong> ${modulo}</p>
        <p><strong>Potencia (**):</strong> ${potencia}</p>
      </div>
    </div>
  `;

  mostrarResultado("resultadoCalc", resultado);

  console.log("Python equivalente:");
  console.log(`print(f"{num1} + {num2} = {${num1 + num2}}")`);
}

/**
 * Verificar Par o Impar
 * Python: numero % 2 == 0
 * JS: numero % 2 === 0 (¡Usa ===!)
 */
function verificarParImpar() {
  const numero = obtenerNumero("numeroParImpar");

  if (numero === null) {
    mostrarResultado("resultadoParImpar", "<p class='error'>Por favor, ingresa un número.</p>");
    return;
  }

  const residuo = numero % 2;
  const esPar = residuo === 0;

  const resultado = `
    <div class="info-box">
      <h3>Análisis del número ${numero}:</h3>
      <p><strong>Residuo de dividir entre 2:</strong> ${residuo}</p>
      <p><strong>Resultado:</strong> El número es <strong>${esPar ? "PAR" : "IMPAR"}</strong></p>
      <p class="formula">
        Python: <code>${numero} % 2 == ${residuo}</code><br>
        JavaScript: <code>${numero} % 2 === ${residuo}</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoParImpar", resultado);
}

/**
 * Comparador de Números
 * Python: >, <, >=, <=, ==, !=
 * JS: >, <, >=, <=, ===, !== (¡Usa === y !==!)
 */
function compararNumeros() {
  const a = obtenerNumero("compA");
  const b = obtenerNumero("compB");

  if (a === null || b === null) {
    mostrarResultado("resultadoComp", "<p class='error'>Por favor, ingresa ambos valores.</p>");
    return;
  }

  const resultado = `
    <div class="info-box">
      <h3>Comparando ${a} y ${b}:</h3>
      <div class="comparaciones-grid">
        <p>${a} > ${b}: <strong>${a > b}</strong></p>
        <p>${a} < ${b}: <strong>${a < b}</strong></p>
        <p>${a} >= ${b}: <strong>${a >= b}</strong></p>
        <p>${a} <= ${b}: <strong>${a <= b}</strong></p>
        <p>${a} === ${b}: <strong>${a === b}</strong></p>
        <p>${a} !== ${b}: <strong>${a !== b}</strong></p>
      </div>
    </div>
  `;

  mostrarResultado("resultadoComp", resultado);

  console.log("Comparación de igualdad:");
  console.log(`Python: ${a} == ${b} → ${a == b}`);
  console.log(`JS (laxo): ${a} == ${b} → ${a == b}`);
  console.log(`JS (estricto): ${a} === ${b} → ${a === b}`);
}

/**
 * Evaluador de Condiciones
 * Python: and, or, not
 * JS: &&, ||, !
 */
function evaluarCondiciones() {
  const edad = obtenerNumero("edad") ?? 0;
  const tieneLicencia = document.getElementById("tieneLicencia").checked;
  const esFinDeSemana = document.getElementById("esFinDeSemana").checked;

  // Python: edad >= 18 and tiene_licencia
  // JS: edad >= 18 && tieneLicencia
  const puedeConducir = edad >= 18 && tieneLicencia;

  // Python: es_fin_de_semana or (not edad >= 18 and edad >= 15)
  // JS: esFinDeSemana || (!(edad >= 18) && edad >= 15)
  const puedeSalir = esFinDeSemana || edad >= 18;

  const resultado = `
    <div class="success-box">
      <h3>Evaluación de Condiciones:</h3>
      <p><strong>Edad:</strong> ${edad} años</p>
      <p><strong>Tiene licencia:</strong> ${tieneLicencia ? "Sí" : "No"}</p>
      <p><strong>Es fin de semana:</strong> ${esFinDeSemana ? "Sí" : "No"}</p>
      <hr>
      <p><strong>¿Puede conducir?</strong> ${puedeConducir ? "✅ Sí" : "❌ No"}</p>
      <p><strong>¿Puede salir?</strong> ${puedeSalir ? "✅ Sí" : "❌ No"}</p>
      <p class="formula">
        Python: <code>edad >= 18 and tiene_licencia</code><br>
        JavaScript: <code>edad >= 18 && tieneLicencia</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoLogicos", resultado);
}

/**
 * Conversor de Minutos a Horas
 * Python: horas = minutos // 60, mins_restantes = minutos % 60
 * JS: Math.floor(minutos / 60), minutos % 60
 */
function convertirMinutos() {
  const minutos = obtenerNumero("minutos");

  if (minutos === null || minutos < 0) {
    mostrarResultado("resultadoMinutos", "<p class='error'>Por favor, ingresa minutos válidos.</p>");
    return;
  }

  // Python: minutos // 60 (división entera)
  // JS: Math.floor(minutos / 60) (no existe división entera)
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  let resultadoTexto = "";
  if (horas > 0 && minutosRestantes > 0) {
    resultadoTexto = `${horas} hora${horas > 1 ? "s" : ""} y ${minutosRestantes} minuto${minutosRestantes > 1 ? "s" : ""}`;
  } else if (horas > 0) {
    resultadoTexto = `${horas} hora${horas > 1 ? "s" : ""}`;
  } else {
    resultadoTexto = `${minutosRestantes} minuto${minutosRestantes > 1 ? "s" : ""}`;
  }

  const resultado = `
    <div class="success-box">
      <h3>Conversión:</h3>
      <p><strong>${minutos} minutos</strong> equivale a:</p>
      <p class="resultado-grande">${resultadoTexto}</p>
      <p class="formula">
        Python: <code>${horas} = ${minutos} // 60, ${minutosRestantes} = ${minutos} % 60</code><br>
        JavaScript: <code>${horas} = Math.floor(${minutos} / 60), ${minutosRestantes} = ${minutos} % 60</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoMinutos", resultado);
}

// ============================================
// INICIALIZACION
// ============================================

console.log("%cS03: Operadores y Expresiones", "color: #818cf8; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("Aritméticos: ¡IGUALES!");
console.log("  Python: 10 + 3, 10 % 3, 10 ** 2");
console.log("  JS:     10 + 3, 10 % 3, 10 ** 2");
console.log("\nComparación: ¡IGUALES! (pero usa === en JS)");
console.log("  Python: 10 == 10");
console.log("  JS:     10 === 10");
console.log("\nLógicos: Diferente");
console.log("  Python: and, or, not");
console.log("  JS:     &&, ||, !");

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
