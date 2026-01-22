// =====================================================
// S24: Bugs Comunes - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - Identificar bugs comunes en JavaScript
// - Entender concatenación vs suma
// - Comparación == vs ===
// - undefined vs null
//
// Python vs JavaScript:
// Python: int("5") → JS: Number("5")
// Python: == (estricto) → JS: === (estricto), == (con coerción)
// Python: None → JS: null o undefined
//
// =====================================================

// -----------------------------------------------------
// RETO 1: Concatenación vs Suma
// -----------------------------------------------------
//
// El operador + concatena strings, NO suma
//
// TU MISIÓN:
// 1. Completa demostrarBug1() mostrando el bug y la solución
// Pista: Number(valor) convierte string a número
// -----------------------------------------------------

function demostrarBug1() {
  const input = document.getElementById("bug1Numero");
  const valor = input.value;  // Es un STRING, no un número

  // TODO: Demuestra el bug de concatenación
  // Pista: valor + valor concatena, Number(valor) + Number(valor) suma
  /*
  const bug = valor + valor;  // "55" (concatenación)
  const fixed = Number(valor) + Number(valor);  // 10 (suma)

  mostrarResultado("resultado1", `
    <div class="bug-demostrado">
      <h3>🐛 Bug Identificado</h3>
      <p><strong>Valor:</strong> "${valor}" (tipo: ${typeof valor})</p>
      <p class="buggy-line">❌ CON bug: ${bug} (¡concatenó!)</p>
      <p class="fixed-line">✅ SIN bug: ${fixed} (suma correcta)</p>
      <p class="formula">
        Python: <code>int("${valor}") + int("${valor}") = ${fixed}</code><br>
        JS: <code>Number("${valor}") + Number("${valor}") = ${fixed}</code>
      </p>
    </div>
  `);
  */
}

// -----------------------------------------------------
// RETO 2: Comparación == vs ===
// -----------------------------------------------------
//
// == compara con coerción (peligroso)
// === compara estrictamente (recomendado)
//
// TU MISIÓN:
// 1. Completa compararIgualdad() mostrando la diferencia
// -----------------------------------------------------

function compararIgualdad() {
  const valor = document.getElementById("bug2Valor").value;
  const numero = 5;

  // TODO: Compara == vs ===
  // Pista: valor == numero vs valor === numero
  /*
  const igualdadFloja = valor == numero;   // true si valor = "5"
  const igualdadEstricta = valor === numero; // false si valor = "5"

  mostrarResultado("resultado2", `
    <div class="comparacion-resultado">
      <h3>⚖️ Comparación == vs ===</h3>
      <p><strong>Valor:</strong> "${valor}" (${typeof valor}) vs ${numero} (${typeof numero})</p>
      <p><strong>== (floja):</strong> ${igualdadFloja} ${igualdadFloja ? "⚠️ Cuidado!" : ""}</p>
      <p><strong>=== (estricta):</strong> ${igualdadEstricta} ${!igualdadEstricta ? "✅ Correcto" : ""}</p>
      <p class="formula">
        Python: <code>"${valor}" == ${numero} es False</code><br>
        JS: <code>"${valor}" === ${numero} es ${igualdadEstricta}</code>
      </p>
    </div>
  `);
  */
}

// -----------------------------------------------------
// RETO 3: undefined vs null
// -----------------------------------------------------
//
// undefined = "no definido"
// null = "vacío intencional"
//
// TU MISIÓN:
// 1. Completa verificarValor() comprobando undefined/null
// -----------------------------------------------------

function verificarValor() {
  const checkbox = document.getElementById("checkValor");
  const valor = checkbox.checked ? "Tiene valor" : undefined;

  // TODO: Verifica si valor es undefined o null
  // Pista: valor === undefined, valor === null
  /*
  const esUndefined = valor === undefined;
  const esNull = valor === null;
  const esFalsy = !valor;  // Ambos son falsy

  mostrarResultado("resultado3", `
    <div class="valor-vacio">
      <h3>❓ undefined vs null</h3>
      <p><strong>Checkbox marcado:</strong> ${checkbox.checked}</p>
      <p><strong>Valor:</strong> ${valor === undefined ? "undefined" : valor}</p>
      <p><strong>Es undefined:</strong> ${esUndefined}</p>
      <p><strong>Es null:</strong> ${esNull}</p>
      <p><strong>Es falsy:</strong> ${esFalsy}</p>
      <p class="formula">
        Python: <code>valor = None</code><br>
        JS: <code>let x; // undefined</code>
      </p>
    </div>
  `);
  */
}

// -----------------------------------------------------
// RETO 4: Corregir el Bug
// -----------------------------------------------------
//
// Encuentra y corrige el error
//
// TU MISIÓN:
// 1. Corrige el bug en esta función
// Pista: Los inputs devuelven strings, no números
// -----------------------------------------------------

function corregirBug() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  // BUG: Esto concatena en lugar de sumar
  // const resultado = num1 + num2;  // "53" ❌

  // TODO: Corrige el bug
  // Pista: Usa Number() o parseInt() para convertir
  /*
  const resultado = Number(num1) + Number(num2);  // 8 ✅

  mostrarResultado("resultado4", `
    <div class="bug-corregido">
      <h3>✏️ Bug Corregido</h3>
      <p><strong>Número 1:</strong> "${num1}" → ${Number(num1)}</p>
      <p><strong>Número 2:</strong> "${num2}" → ${Number(num2)}</p>
      <p class="numero-grande">${resultado}</p>
      <p class="formula">
        Antes: <code>"${num1}" + "${num2}" = "${num1 + num2}"</code> ❌<br>
        Después: <code>Number("${num1}") + Number("${num2}") = ${resultado}</code> ✅
      </p>
    </div>
  `);
  */
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}

console.log("S24: Bugs Comunes - Abre la consola (F12) para ver logs");
console.log("Tip: Usa Number() para convertir strings a números");
console.log("Tip: Usa === en lugar de == para comparación estricta");
