// =====================================================
// S09: Return - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - La diferencia entre console.log y return
// - Funciones que devuelven un valor con return
// - Devolver múltiples valores (arrays)
// - Return temprano para validación
//
// Python vs JavaScript:
// Python: def cuadrado(n): return n ** 2     JS: function cuadrado(n) { return n ** 2; }
// Python: return min, max                     JS: return [min, max]
// Python: if edad < 0: return "Error"        JS: if (edad < 0) { return "Error"; }
//
// =====================================================

// -----------------------------------------------------
// RETO 1: print vs Return
// -----------------------------------------------------
//
// console.log muestra en la consola, pero NO devuelve un valor útil
// return devuelve un valor que puedes guardar y usar después
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el texto del botón a "¡Probar!"
// 2. RETO CSS: Crea .demo-resultado con borde
// 3. TODO: Completa probarDiferencia() para mostrar la diferencia
// -----------------------------------------------------

// Función sin return (solo muestra en consola)
function sumarConsole(a, b) {
  console.log(a + b);
  // Sin return → devuelve undefined
}

// Función con return (devuelve un valor)
function sumarReturn(a, b) {
  return a + b;
}

function probarDiferencia() {
  const resultadoConsole = sumarConsole(5, 3);  // undefined
  const resultadoReturn = sumarReturn(5, 3);    // 8

  // TODO: Completa el HTML para mostrar la diferencia
  // Pista: Muestra que resultadoConsole es undefined y resultadoReturn es 8
  const html = `
    <div class="demo-resultado">
      <h3>Diferencia Clave</h3>
      <p><strong>console.log devuelve:</strong> ${resultadoConsole}</p>
      <!-- TODO: Agrega aquí la línea para resultadoReturn -->
      <p>TODO: muestra resultadoReturn aquí</p>
    </div>
  `;

  mostrarResultado("resultadoPrintReturn", html);
}

// -----------------------------------------------------
// RETO 2: Devolver un Valor
// -----------------------------------------------------
//
// Las funciones pueden devolver un valor que se puede usar
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji ➗ al título h2
// 2. RETO CSS: Cambia .numero-grande a font-size: 2.5rem
// 3. TODO: Completa cuadradoFn() con el return
// -----------------------------------------------------

function calcularCuadrado() {
  const n = Number(document.getElementById("cuadradoNum").value);

  if (isNaN(n)) {
    mostrarResultado("resultadoUnico", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  const resultado = cuadradoFn(n);

  const html = `
    <div class="success-box">
      <h3>Cuadrado de ${n}</h3>
      <p class="numero-grande">${resultado}</p>
      <p class="formula">
        Python: <code>def cuadrado(n): return n ** 2</code><br>
        JS: <code>function cuadrado(n) { return n ** 2; }</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoUnico", html);
}

// Esta función debe devolver el cuadrado de n
function cuadradoFn(n) {
  // TODO: Devuelve n elevado al cuadrado
  // Pista: return n ** 2;
  return 0;  // <-- Cambia esto
}

// -----------------------------------------------------
// RETO 3: Devolver Múltiples Valores
// -----------------------------------------------------
//
// JavaScript devuelve un array cuando necesitas múltiples valores
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el placeholder a "Ej: 80,90,85"
// 2. RETO CSS: Crea .estadistica-card con borde izquierdo
// 3. TODO: Completa calcularEstadisticasFn() devolviendo [min, max, prom]
// -----------------------------------------------------

function calcularEstadisticas() {
  const input = document.getElementById("notasInput").value.trim();

  if (!input) {
    mostrarResultado("resultadoMultiple", "<p class='error'>Ingresa las notas separadas por coma.</p>");
    return;
  }

  // Convertir string a array de números
  const notas = input.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

  if (notas.length === 0) {
    mostrarResultado("resultadoMultiple", "<p class='error'>Ingresa números válidos.</p>");
    return;
  }

  const [minimo, maximo, promedio] = calcularEstadisticasFn(notas);

  const html = `
    <div class="success-box">
      <h3>📊 Estadísticas</h3>
      <div class="estadistica-card"><p><strong>Mínimo:</strong> ${minimo}</p></div>
      <div class="estadistica-card"><p><strong>Máximo:</strong> ${maximo}</p></div>
      <div class="estadistica-card"><p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p></div>
      <p class="formula">
        Python: <code>return min, max, prom</code><br>
        JS: <code>return [min, max, prom]</code> (array)
      </p>
    </div>
  `;
  mostrarResultado("resultadoMultiple", html);
}

// Esta función debe devolver [minimo, maximo, promedio]
function calcularEstadisticasFn(lista) {
  // TODO: Calcula min, max, prom y devuélvelos en un array
  // Pista:
  // const minimo = Math.min(...lista);
  // const maximo = Math.max(...lista);
  // const promedio = lista.reduce((a,b) => a+b, 0) / lista.length;
  // return [minimo, maximo, promedio];
  return [0, 0, 0];  // <-- Cambia esto
}

// -----------------------------------------------------
// RETO 4: Return Temprano
// -----------------------------------------------------
//
// Return temprano valida y sale de la función inmediatamente
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el label a "Edad a verificar:"
// 2. RETO CSS: Crea .verificacion-resultado centrado
// 3. TODO: Completa verificarEdadFn() con return temprano
// -----------------------------------------------------

function verificarEdadReturn() {
  const edad = Number(document.getElementById("edadVerificar").value);

  if (isNaN(edad)) {
    mostrarResultado("resultadoReturnEarly", "<p class='error'>Ingresa una edad.</p>");
    return;
  }

  const resultado = verificarEdadFn(edad);

  let clase = "success-box";
  if (resultado.tipo === "error") clase = "error-box";
  else if (resultado.tipo === "menor") clase = "info-box";

  const html = `
    <div class="${clase}">
      <h3 class="verificacion-resultado">${resultado.mensaje}</h3>
      <p class="formula">
        Python: <code>if edad < 0: return "Error"</code><br>
        JS: <code>if (edad < 0) { return "Error"; }</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoReturnEarly", html);
}

// Esta función debe validar con return temprano
function verificarEdadFn(edad) {
  // TODO: Si edad < 0, return {tipo: "error", mensaje: "Error: edad no puede ser negativa"}
  // TODO: Si edad < 18, return {tipo: "menor", mensaje: "Menor de edad"}
  // TODO: Si no, return {tipo: "mayor", mensaje: "Mayor de edad"}
  return {tipo: "error", mensaje: "TODO: completa la función"};  // <-- Cambia esto
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}

console.log("S09: Return - Abre la consola (F12) para ver logs");
