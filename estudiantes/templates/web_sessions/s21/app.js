// =====================================================
// S21: Debugging - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - console.log() para mostrar mensajes
// - try/catch para manejar errores
// - console.assert() para verificar condiciones
// - console.time() para medir tiempo
//
// Python vs JavaScript:
// Python: print("mensaje")      JS: console.log("mensaje")
// Python: try/except            JS: try/catch
// Python: assert condition      JS: console.assert(condition)
// Python: time.time()           JS: console.time()/console.timeEnd()
//
// NOTA: Abre la consola del navegador (F12) para ver los logs.
//
// =====================================================

// -----------------------------------------------------
// RETO 1: Console Log
// -----------------------------------------------------
//
// console.log() imprime mensajes en la consola del navegador
//
// TU MISIÓN:
// 1. Completa mostrarEnConsola() con console.log()
// Pista: console.log(mensaje);
// -----------------------------------------------------

function mostrarEnConsola() {
  const mensaje = document.getElementById("mensajeLog").value;

  // TODO: Muestra el mensaje en la consola del navegador
  // Pista: console.log(mensaje);
  // console.log(mensaje);

  // También mostrar en la "consola" de la página
  const consola = document.getElementById("consola1");
  consola.textContent = `> ${mensaje}`;

  mostrarResultado("resultado1", `
    <div class="success-box">
      <h3>📋 Mensaje enviado a consola</h3>
      <p><strong>Mensaje:</strong> "${mensaje}"</p>
      <p>Abre F12 para verlo en la consola real del navegador.</p>
      <p class="formula">
        Python: <code>print("${mensaje}")</code><br>
        JS: <code>console.log("${mensaje}")</code>
      </p>
    </div>
  `);
}

// -----------------------------------------------------
// RETO 2: Try/Catch
// -----------------------------------------------------
//
// try/catch captura errores y evita que el programa se detenga
//
// TU MISIÓN:
// 1. Completa dividirNumero() con try/catch
// -----------------------------------------------------

function dividirNumero() {
  const input = document.getElementById("numeroDividir");
  const numero = Number(input.value);

  // TODO: Completa el try/catch
  // Pista: try { const resultado = 100 / numero; } catch (error) { ... }
  /*
  try {
    if (numero === 0) {
      throw new Error("No se puede dividir por 0");
    }
    const resultado = 100 / numero;
    mostrarResultado("resultado2", `
      <div class="success-box">
        <h3>✅ División Exitosa</h3>
        <p class="numero-grande">${resultado}</p>
        <p>100 ÷ ${numero} = ${resultado}</p>
      </div>
    `);
  } catch (error) {
    mostrarResultado("resultado2", `
      <div class="error-capturado">
        <h3>❌ Error Capturado</h3>
        <p>${error.message}</p>
      </div>
    `);
  }
  */

  mostrarResultado("resultado2", `
    <div class="error-box">
      <h3>🔧 Completa la función</h3>
      <p>Descomenta el código en app.js</p>
    </div>
  `);
}

// -----------------------------------------------------
// RETO 3: Assert
// -----------------------------------------------------
//
// console.assert() verifica que una condición sea verdadera
// Si es falsa, muestra un error en la consola
//
// TU MISIÓN:
// 1. Completa verificarEdad() con console.assert()
// -----------------------------------------------------

function verificarEdad() {
  const edad = parseInt(document.getElementById("edadAssert").value) || 0;

  // TODO: Usa console.assert para verificar edad >= 18
  // Pista: console.assert(edad >= 18, "Debes ser mayor de edad");
  // console.assert(edad >= 18, "Debes ser mayor de edad");

  const esMayor = edad >= 18;

  if (esMayor) {
    mostrarResultado("resultado3", `
      <div class="assert-paso">
        <h3>✅ Assert Pasó</h3>
        <p>Edad ${edad} >= 18 ✅</p>
        <p class="formula">
          Python: <code>assert ${edad} >= 18, "Menor de edad"</code><br>
          JS: <code>console.assert(${edad} >= 18, "Menor de edad")</code>
        </p>
      </div>
    `);
  } else {
    mostrarResultado("resultado3", `
      <div class="error-box">
        <h3>❌ Assert Falló</h3>
        <p>Edad ${edad} < 18 ❌</p>
        <p>Debes ser mayor de edad (18+)</p>
      </div>
    `);
  }
}

// -----------------------------------------------------
// RETO 4: Time
// -----------------------------------------------------
//
// console.time() y console.timeEnd() miden el tiempo de ejecución
//
// TU MISIÓN:
// 1. Completa medirTiempo() con console.time() y console.timeEnd()
// -----------------------------------------------------

function medirTiempo() {
  // TODO: Mide el tiempo de una operación
  // Pista: console.time("operacion"); ... console.timeEnd("operacion");
  /*
  console.time("bucle");

  let suma = 0;
  for (let i = 0; i < 1000000; i++) {
    suma += i;
  }

  console.timeEnd("bucle");
  */

  mostrarResultado("resultado4", `
    <div class="tiempo-resultado">
      <h3>⏱️ Tiempo Medido</h3>
      <p>Abre F12 para ver el tiempo en la consola.</p>
      <p class="formula">
        Python: <code>import time; t0 = time.time(); ... ; print(time.time() - t0)</code><br>
        JS: <code>console.time("nombre"); ... ; console.timeEnd("nombre")</code>
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

console.log("S21: Debugging - Abre la consola (F12) para ver los logs");
console.log("Tip: Usa console.log(), console.warn(), console.error() para diferentes tipos de mensajes");
