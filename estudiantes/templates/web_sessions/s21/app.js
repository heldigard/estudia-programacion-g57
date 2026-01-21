// S21: Debugging - Herramientas de depuración
// Python: print() → JS: console.log()

// ============================================
   CONSOLA PERSONALIZADA
   ============================================

const consola = document.getElementById("consola");

function agregarLineaConsola(tipo, mensaje) {
  const timestamp = new Date().toLocaleTimeString();
  const linea = document.createElement("div");
  linea.className = `console-line ${tipo}`;
  linea.innerHTML = `
    <span class="timestamp">[${timestamp}]</span>
    <span class="${tipo}">${mensaje}</span>
  `;
  consola.appendChild(linea);
  consola.scrollTop = consola.scrollHeight;
}

// Python: print("Mensaje")
function demoLog() {
  const mensaje = document.getElementById("logMensaje").value || "Hola desde JavaScript";
  agregarLineaConsola("log", `LOG: ${mensaje}`);
  console.log(mensaje);
}

// Python: print("Advertencia", file=sys.stderr)
function demoWarn() {
  agregarLineaConsola("warn", `WARN: Advertencia - revisa tu código`);
  console.warn("Advertencia - revisa tu código");
}

// Python: print("Error", file=sys.stderr)
function demoError() {
  agregarLineaConsola("error", `ERROR: Esto es un error de ejemplo`);
  console.error("Esto es un error de ejemplo");
}

// Python: print("Info")
function demoInfo() {
  agregarLineaConsola("info", `INFO: Información adicional`);
  console.info("Información adicional");
}

// ============================================
   TABLE Y GROUP
   ============================================

function demoTable() {
  const datos = [
    { nombre: "Ana", edad: 20, curso: "Python" },
    { nombre: "Benito", edad: 22, curso: "JS" },
    { nombre: "Carolina", edad: 19, curso: "Python" }
  ];

  agregarLineaConsola("info", "📊 Tabla de estudiantes:");
  console.table(datos);

  // Mostrar en consola
  const html = `
    <p class="info-box">
      <strong>Tabla mostrada en consola (F12)</strong>
    </p>
  `;
  mostrarResultado("resultadoConsola", html);
}

function demoGroup() {
  agregarLineaConsola("log", "📦 Grupo: Usuarios");
  console.group("👥 Usuarios");

  const usuarios = [
    { nombre: "Ana", rol: "admin" },
    { nombre: "Benito", rol: "usuario" }
  ];

  usuarios.forEach(u => {
    agregarLineaConsola("log", `  - ${u.nombre}: ${u.rol}`);
    console.log(`- ${u.nombre}:`, u.rol);
  });

  agregarLineaConsola("log", "📦 Fin del grupo");
  console.groupEnd();

  const html = `
    <p class="info-box">
      <strong>Grupo mostrado en consola (F12)</strong>
    </p>
  `;
  mostrarResultado("resultadoConsola", html);
}

function demoGroupCollapsed() {
  agregarLineaConsola("log", "📦 Grupo colapsado:");
  console.groupCollapsed("📁 Archivos (colapsado)");

  agregarLineaConsola("log", "  - index.html");
  agregarLineaConsola("log", "  - app.js");
  agregarLineaConsola("log", "  - styles.css");

  console.log("index.html");
  console.log("app.js");
  console.log("styles.css");

  console.groupEnd();

  const html = `
    <p class="info-box">
      <strong>Grupo colapsado en consola (F12)</strong>
    </p>
  `;
  mostrarResultado("resultadoConsola", html);
}

// ============================================
   TRY/CATCH - Manejo de errores
// Python: try: except Exception as e:
// JS: try { } catch (e) { }
// ============================================

function demoTryCatch() {
  const resultado = document.getElementById("tryResultado");

  try {
    const numero = obtenerNumero();

    if (numero === null) {
      throw new Error("No ingresaste un número válido");
    }

    const cuadrado = numero ** 2;

    resultado.innerHTML = `
      <div class="success-box">
        <h3>✅ Éxito</h3>
        <p class="numero-grande">${cuadrado}</p>
        <p>El cuadrado de ${numero} es ${cuadrado}</p>
        <p class="formula">
          Python: <code>try: resultado = n ** 2; except Exception as e: print(e)</code><br>
          JS: <code>try { const r = n ** 2; } catch(e) { console.error(e); }</code>
        </p>
      </div>
    `;
    agregarLineaConsola("log", `✅ Éxito: ${cuadrado}`);
  } catch (error) {
    resultado.innerHTML = `
      <div class="error-box">
        <h3>❌ Error Capturado</h3>
        <p>${error.message}</p>
        <p class="formula">
          Python: <code>except ValueError as e: print(e)</code><br>
          JS: <code>catch (error) { mostrarError(error.message); }</code>
        </p>
      </div>
    `;
    agregarLineaConsola("error", `❌ Error: ${error.message}`);
  }
}

function obtenerNumero() {
  const input = document.getElementById("tryNumero");
  if (!input || !input.value) return null;

  const numero = Number(input.value);
  return Number.isNaN(numero) ? null : numero;
}

function demoErrorDeTipo() {
  const resultado = document.getElementById("tryResultado");

  try {
    const valor = document.getElementById("tryValor").value;
    const numero = Number(valor);

    if (isNaN(numero)) {
      throw new TypeError(`"${valor}" no es un número válido`);
    }

    if (numero < 0) {
      throw new RangeError("El número debe ser positivo");
    }

    resultado.innerHTML = `
      <div class="success-box">
        <h3>✅ Valor válido</h3>
        <p class="numero-grande">${numero}</p>
      </div>
    `;
  } catch (error) {
    if (error instanceof TypeError) {
      agregarLineaConsola("error", `TypeError: ${error.message}`);
    } else if (error instanceof RangeError) {
      agregarLineaConsola("error", `RangeError: ${error.message}`);
    } else {
      agregarLineaConsola("error", `Error: ${error.message}`);
    }

    resultado.innerHTML = `
      <div class="error-box">
        <h3>❌ ${error.constructor.name}: ${error.message}</h3>
        <p class="formula">
          Python: <code>except ValueError as e | except TypeError as e</code><br>
          JS: <code>catch (e) { if (e instanceof TypeError) ... }</code>
        </p>
      </div>
    `;
  }
}

// ============================================
   ASSERT - Verificaciones
// Python: assert condition, "mensaje"
// JS: console.assert(condition, "mensaje")
// ============================================

function demoAssert() {
  const resultado = document.getElementById("assertResultado");
  const valor = document.getElementById("assertValor")?.value || 0;

  // Python: assert valor > 0, "El valor debe ser positivo"
  console.assert(valor > 0, "El valor debe ser positivo");

  if (valor > 0) {
    resultado.innerHTML = `
      <div class="success-box">
        <h3>✅ Assert Pasó</h3>
        <p>Valor ${valor} es mayor que 0</p>
        <p class="formula">
          Python: <code>assert ${valor} > 0, "Pasó"</code><br>
          JS: <code>console.assert(${valor} > 0, "Pasó")</code>
        </p>
      </div>
    `;
    agregarLineaConsola("log", `✅ Assert pasado: ${valor} > 0`);
  } else {
    resultado.innerHTML = `
      <div class="error-box">
        <h3>❌ Assert Falló</h3>
        <p>Valor ${valor} NO es mayor que 0</p>
      </div>
    `;
    agregarLineaConsola("error", `❌ Assert falló: ${valor} <= 0`);
  }
}

// ============================================
   TRACE - Seguimiento de ejecución
// ============================================

let traceCount = 0;

function demoTrace() {
  traceCount++;

  agregarLineaConsola("info", `📍 Trace #${traceCount}`);
  console.trace("Trace punto " + traceCount);

  const resultado = document.getElementById("traceResultado");

  resultado.innerHTML = `
    <div class="info-box">
      <h3>📍 Stack Trace</h3>
      <p>Abre la consola (F12) para ver el stack trace completo</p>
      <p><strong>Trace count:</strong> ${traceCount}</p>
      <p class="formula">
        JS: <code>console.trace()</code> - Muestra el stack trace de llamada<br>
        Python: <code>import traceback; traceback.print_stack()</code>
      </p>
    </div>
  `;
}

// ============================================
   COUNT Y TIME - Medición de rendimiento
// Python: import time; time.time()
// JS: console.time() / console.timeEnd()
// ============================================

let timerStart = 0;

function demoTime() {
  timerStart = performance.now();

  const resultado = document.getElementById("timeResultado");

  // Simular operación
  setTimeout(() => {
    const timerEnd = performance.now();
    const duracion = timerEnd - timerStart;

    // Python: time.time()
    console.time("operacion");
    // ... código ...
    console.timeEnd("operacion");

    agregarLineaConsola("log", `⏱️ Operación tomó ${duracion.toFixed(2)}ms`);

    resultado.innerHTML = `
      <div class="info-box">
        <h3>⏱️ Time Measurement</h3>
        <p class="numero-grande">${duracion.toFixed(2)} ms</p>
        <p class="formula">
          Python: <code>import time; t0 = time.time(); ... ; t1 = time.time(); print(t1-t0)</code><br>
          JS: <code>const t0 = performance.now(); ... ; const t1 = performance.now(); console.log(t1-t0)</code>
        </p>
      </div>
    `;
  }, 500);
}

function demoCount() {
  const iterations = 1000;

  console.count("mi_contador");
  console.count("mi_contador");
  console.count("mi_contador");

  const resultado = document.getElementById("countResultado");

  resultado.innerHTML = `
    <div class="info-box">
      <h3>🔢 Console Count</h3>
      <p>Contador "mi_contador" llamado 3 veces</p>
      <p class="formula">
        Python: <code>contador = 0; contador += 1; print(f"Contador: {contador}")</code><br>
        JS: <code>console.count("mi_contador")</code>
      </p>
    </div>
  `;

  agregarLineaConsola("log", `🔢 Contador: mi_contador llamado 3 veces`);
}

// ============================================
   DIR - Inspección de objeto
// Python: vars(obj) → JS: console.dir(obj)
// ============================================

function demoDir() {
  const estudiante = {
    id: 1,
    nombre: "Ana García",
    curso: "Python",
    notas: [95, 87, 92],
    activo: true
  };

  agregarLineaConsola("info", "📂 Objeto estudiante:");
  console.dir(estudiante);

  const resultado = document.getElementById("dirResultado");

  const propiedades = Object.keys(estudiante).join(", ");

  resultado.innerHTML = `
    <div class="info-box">
      <h3>📂 Console.dir</h3>
      <p><strong>Propiedades:</strong> ${propiedades}</p>
      <p>Objeto mostrado en consola (F12) con estructura expandible</p>
      <p class="formula">
        Python: <code>vars(estudiante) | dir(estudiante)</code><br>
        JS: <code>console.dir(estudiante)</code>
      </p>
    </div>
  `;

  agregarLineaConsola("log", `📂 Propiedades: ${propiedades}`);
}

// ============================================
   CLEAR - Limpiar consola
// ============================================

function demoClear() {
  agregarLineaConsola("warn", "🧹 Limpiando consola en 2 segundos...");
  console.clear();

  setTimeout(() => {
    consola.innerHTML = "";
    agregarLineaConsola("log", "✅ Consola limpiada");
  }, 500);

  const resultado = document.getElementById("clearResultado");
  resultado.innerHTML = `
    <div class="info-box">
      <h3>🧹 Console Cleared</h3>
      <p>La consola se ha limpiado (y esta linea también)</p>
      <p class="formula">
        Python: No hay equivalente directo en Python<br>
        JS: <code>console.clear()</code>
      </p>
    </div>
  `;
}

// ============================================
   INICIALIZACIÓN
// ============================================

console.log("%cS21: Debugging - Herramientas de Depuración", "color: #ec4899; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("print(msg) (Python) → console.log(msg) (JS)");
console.log("print(msg, file=sys.stderr) (Python) → console.error(msg) (JS)");
console.log("logging.warning(msg) (Python) → console.warn(msg) (JS)");
console.log("try/except (Python) → try/catch (JS)");
console.log("assert condition (Python) → console.assert(condition) (JS)");

// Enter key support
document.addEventListener("DOMContentLoaded", () => {
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
