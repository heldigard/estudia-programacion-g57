// S04: Condicionales (if/elif/else)
// Equivalente JavaScript de las prácticas de Python

// ============================================
// ESTADO GLOBAL
// ============================================
let saldo = 500000;

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

function ocultarPaneles() {
  document.querySelectorAll(".panel-operacion").forEach(p => p.classList.add("hidden"));
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Verificador de Edad
 * Python: if/else simple
 * JS: if/else (¡misma lógica!)
 */
function verificarEdad() {
  const edad = obtenerNumero("edad");

  if (edad === null) {
    mostrarResultado("resultadoEdad", "<p class='error'>Por favor, ingresa una edad válida.</p>");
    return;
  }

  let resultado, mensaje;

  // Python: if edad >= 18:
  // JS: if (edad >= 18) {
  if (edad >= 18) {
    resultado = "✅ Eres mayor de edad";
    mensaje = "Puedes votar, conducir y trabajar legalmente.";
  } else if (edad >= 13) {
    resultado = "📝 Eres adolescente";
    mensaje = "Estás en la etapa de desarrollo entre niñez y adultez.";
  } else {
    resultado = "👶 Eres un niño";
    mensaje = "Disfruta tu infancia mientras puedes.";
  }

  const html = `
    <div class="success-box">
      <h3>${resultado}</h3>
      <p>${mensaje}</p>
      <p class="formula">
        Python: <code>if edad >= 18: ... elif edad >= 13: ... else: ...</code><br>
        JS: <code>if (edad >= 18) { ... } else if (edad >= 13) { ... } else { ... }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoEdad", html);
}

/**
 * Clasificador de Notas
 * Python: if/elif/else con múltiples condiciones
 * JS: if/else if/else (¡misma estructura!)
 */
function clasificarNota() {
  const nota = obtenerNumero("nota");

  if (nota === null || nota < 0 || nota > 100) {
    mostrarResultado("resultadoNota", "<p class='error'>Por favor, ingresa una nota válida (0-100).</p>");
    return;
  }

  let letra, color, mensaje;

  // IMPORTANTE: Orden de mayor a menor (como en Python)
  if (nota >= 90) {
    letra = "A";
    color = "#22c55e"; // verde
    mensaje = "Excelente - ¡Felicidades!";
  } else if (nota >= 80) {
    letra = "B";
    color = "#818cf8"; // púrpura
    mensaje = "Muy bien - ¡Sigue así!";
  } else if (nota >= 70) {
    letra = "C";
    color = "#38bdf8"; // azul
    mensaje = "Bien - Puedes mejorar.";
  } else if (nota >= 60) {
    letra = "D";
    color = "#f59e0b"; // amarillo
    mensaje = "Suficiente - Aprobaste, pero debes esforzarte más.";
  } else {
    letra = "F";
    color = "#ef4444"; // rojo
    mensaje = "Reprobado - Necesitas estudiar más.";
  }

  const html = `
    <div class="nota-box" style="border-left: 4px solid ${color}">
      <h3 style="color: ${color}">Calificación: ${letra}</h3>
      <p class="nota-grande" style="color: ${color}">${nota}</p>
      <p>${mensaje}</p>
    </div>
  `;

  mostrarResultado("resultadoNota", html);
}

/**
 * Verificador de Fin de Semana
 * Python: dia == "sabado" or dia == "domingo"
 * JS: dia === "sabado" || dia === "domingo"
 */
function verificarFinSemana() {
  const dia = document.getElementById("dia").value;

  if (!dia) {
    mostrarResultado("resultadoFinSemana", "<p class='error'>Por favor, selecciona un día.</p>");
    return;
  }

  // Python: if dia == "sabado" or dia == "domingo":
  // JS: if (dia === "sabado" || dia === "domingo") {
  const esFinDeSemana = dia === "sabado" || dia === "domingo";
  const esInicioDeSemana = dia === "lunes";

  let resultado, emoji;
  if (esFinDeSemana) {
    resultado = "¡Es fin de semana!";
    emoji = "🎉";
  } else if (esInicioDeSemana) {
    resultado = "Es lunes... ¡ánimo!";
    emoji = "💪";
  } else {
    resultado = "Es día de semana";
    emoji = "📚";
  }

  const html = `
    <div class="${esFinDeSemana ? "success-box" : "info-box"}">
      <h3>${emoji} ${resultado}</h3>
      <p class="formula">
        Python: <code>if dia == "sabado" or dia == "domingo"</code><br>
        JS: <code>if (dia === "sabado" || dia === "domingo")</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoFinSemana", html);
}

/**
 * Cajero Automático
 * Python: Condicionales anidados
 * JS: Condicionales anidados (¡igual!)
 */
function operacionCajero(opcion) {
  ocultarPaneles();

  if (opcion === "consultar") {
    consultarSaldo();
  } else if (opcion === "retirar") {
    document.getElementById("panelRetiro").classList.remove("hidden");
    mostrarResultado("resultadoCajero", "");
  } else if (opcion === "depositar") {
    document.getElementById("panelDeposito").classList.remove("hidden");
    mostrarResultado("resultadoCajero", "");
  }
}

function consultarSaldo() {
  const html = `
    <div class="success-box">
      <h3>💰 Tu saldo</h3>
      <p class="saldo-grande">$${saldo.toLocaleString("es-CO")}</p>
    </div>
  `;
  mostrarResultado("resultadoCajero", html);
}

function ejecutarRetiro() {
  const monto = obtenerNumero("montoRetiro");

  if (!monto || monto <= 0) {
    mostrarResultado("resultadoCajero", "<p class='error'>Ingresa un monto válido.</p>");
    return;
  }

  // Condicionales anidados (igual que Python)
  if (monto > saldo) {
    mostrarResultado("resultadoCajero", `
      <div class="error-box">
        <h3>❌ Saldo insuficiente</h3>
        <p>Saldo actual: $${saldo.toLocaleString("es-CO")}</p>
        <p>Monto solicitado: $${monto.toLocaleString("es-CO")}</p>
      </div>
    `);
  } else {
    saldo -= monto;
    actualizarSaldoDisplay();
    ocultarPaneles();
    mostrarResultado("resultadoCajero", `
      <div class="success-box">
        <h3>✅ Retiro exitoso</h3>
        <p>Monto retirado: $${monto.toLocaleString("es-CO")}</p>
        <p>Nuevo saldo: $${saldo.toLocaleString("es-CO")}</p>
      </div>
    `);
  }
}

function ejecutarDeposito() {
  const monto = obtenerNumero("montoDeposito");

  if (!monto || monto <= 0) {
    mostrarResultado("resultadoCajero", "<p class='error'>Ingresa un monto válido.</p>");
    return;
  }

  saldo += monto;
  actualizarSaldoDisplay();
  ocultarPaneles();
  mostrarResultado("resultadoCajero", `
    <div class="success-box">
      <h3>✅ Depósito exitoso</h3>
      <p>Monto depositado: $${monto.toLocaleString("es-CO")}</p>
      <p>Nuevo saldo: $${saldo.toLocaleString("es-CO")}</p>
    </div>
  `);
}

function actualizarSaldoDisplay() {
  document.getElementById("saldoDisplay").textContent = `$${saldo.toLocaleString("es-CO")}`;
}

/**
 * Calculadora de Descuentos
 * Python: if/elif/else con rangos de edad
 * JS: if/else if/else (¡igual!)
 */
function calcularDescuento() {
  const precio = obtenerNumero("precio");
  const edad = obtenerNumero("edadDescuento");

  if (!precio || !edad) {
    mostrarResultado("resultadoDescuento", "<p class='error'>Por favor, completa todos los campos.</p>");
    return;
  }

  let descuento, categoria;

  // Descuentos escalonados por edad (igual que Python)
  if (edad <= 12) {
    descuento = 0.5; // 50%
    categoria = "Niño";
  } else if (edad <= 25) {
    descuento = 0.2; // 20%
    categoria = "Joven";
  } else if (edad <= 59) {
    descuento = 0; // 0%
    categoria = "Adulto";
  } else {
    descuento = 0.3; // 30%
    categoria = "Adulto Mayor";
  }

  const precioFinal = precio * (1 - descuento);
  const ahorro = precio * descuento;

  const html = `
    <div class="success-box">
      <h3>💰 Resumen de Compra</h3>
      <p><strong>Categoría:</strong> ${categoria}</p>
      <p><strong>Precio original:</strong> $${precio.toLocaleString("es-CO")}</p>
      <p><strong>Descuento:</strong> ${(descuento * 100).toFixed(0)}%</p>
      <p><strong>Ahorro:</strong> $${ahorro.toLocaleString("es-CO")}</p>
      <p class="precio-final"><strong>Precio final:</strong> $${precioFinal.toLocaleString("es-CO")}</p>
    </div>
  `;

  mostrarResultado("resultadoDescuento", html);
}

/**
 * Verificador de Contraseña
 * Python: if contrasena == "python123"
 * JS: if (contrasena === "python123")
 */
function verificarContrasena() {
  const contrasena = document.getElementById("contrasena").value;
  const contrasenaCorrecta = "python123";

  // Python: if contrasena == contrasena_correcta:
  // JS: if (contrasena === contrasenaCorrecta) {
  if (contrasena === contrasenaCorrecta) {
    mostrarResultado("resultadoContrasena", `
      <div class="success-box">
        <h3>✅ Acceso concedido</h3>
        <p>¡Bienvenido al sistema!</p>
      </div>
    `);
  } else {
    mostrarResultado("resultadoContrasena", `
      <div class="error-box">
        <h3>❌ Contraseña incorrecta</h3>
        <p>La contraseña correcta es: <code>python123</code></p>
      </div>
    `);
  }
}

// ============================================
// INICIALIZACION
// ============================================

console.log("%cS04: Condicionales (if/elif/else)", "color: #22c55e; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("if (Python) → if (JS)");
console.log("elif (Python) → else if (JS)");
console.log("else (Python) → else (JS)");
console.log("and (Python) → && (JS)");
console.log("or (Python) → || (JS)");
console.log("not (Python) → ! (JS)");

// Permitir Enter para submit en inputs
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const button = input.closest(".card, .panel-operacion")?.querySelector("button");
        if (button && button.onclick) button.click();
      }
    });
  });
});
