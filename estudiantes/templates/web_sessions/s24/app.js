// S24: Clínica de Bugs - Práctica de Debugging
// Python: Depuración con print, pdb, logging → JS: console.log, debugger, DevTools

// ============================================
   PROGRESO
   ============================================

let bugsResueltos = 0;
const totalBugs = 5;

function actualizarProgreso() {
  const progreso = (bugsResueltos / totalBugs) * 100;
  const progresoFill = document.getElementById("progresoFill");
  const progresoLabel = document.getElementById("progresoLabel");

  if (progresoFill && progresoLabel) {
    progresoFill.style.width = `${progreso}%`;
    progresoFill.textContent = `${bugsResueltos}/${totalBugs}`;
    progresoLabel.textContent = `${progreso.toFixed(0)}% completado`;
  }
}

// ============================================
   BUG 1: Concatenación vs Suma
   // Python: tipado dinámico, pero el operador + tiene reglas claras
   // JS: + concatena strings, convierte a número cuando es posible
   ============================================

function probarBug1() {
  // Python: input() siempre retorna string, necesita int()
  // JS: input.value siempre es string, necesita Number() o parseInt()
  const n = document.getElementById("bug1Numero").value;

  // BUG: n + n concatena strings en lugar de sumar números
  // Si n = "5", entonces n + n = "55" (concatenación)
  // Python: "5" + "5" = "55" (misma lógica)
  // Solución: Number(n) + Number(n) o n * 1 + n * 1

  const buggyResult = n + n;
  const fixedResult = Number(n) + Number(n);

  const resultado = document.getElementById("bug1Resultado");

  resultado.innerHTML = `
    <div class="bug-description">
      <h4>🐛 BUG IDENTIFICADO</h4>
      <p><strong>Entrada:</strong> "${n}" (tipo: ${typeof n})</p>
      <p class="buggy-line">Resultado CON bug: "${buggyResult}" (¡concatenó strings!)</p>
      <p class="fixed-line">Resultado SIN bug: ${fixedResult} (suma correcta)</p>
      <p class="bug-hint">💡 En JavaScript, el operador + concatena strings. Usa Number() para convertir.</p>
    </div>
    <div class="comparison">
      <div class="python-code">
        <h4>Python</h4>
        <pre># BUG común
n = input()  # "5"
resultado = n + n  # "55"

# SOLUCIÓN
n = int(input())  # 5
resultado = n + n  # 10</pre>
      </div>
      <div class="js-code">
        <h4>JavaScript</h4>
        <pre>// BUG común
const n = input.value;  // "5"
const resultado = n + n;  // "55"

// SOLUCIÓN
const n = Number(input.value);  // 5
const resultado = n + n;  // 10</pre>
      </div>
    </div>
  `;

  // Marcar como resuelto
  marcarBugResuelto("bug1");
}

// ============================================
   BUG 2: Comparación == vs ===
   // Python: == compara valores (no hay ===)
   // JS: == compara con coerción, === compara estrictamente
   ============================================

function probarBug2() {
  const valor = document.getElementById("bug2Valor").value;
  const numero = 5;

  // BUG: == hace coerción de tipos, "5" == 5 es true
  // FIXED: === no hace coerción, "5" === 5 es false

  const buggyResult = valor == numero;  // true si valor = "5"
  const fixedResult = valor === numero; // false si valor = "5"

  const resultado = document.getElementById("bug2Resultado");

  resultado.innerHTML = `
    <div class="bug-description">
      <h4>🐛 BUG IDENTIFICADO</h4>
      <p><strong>Entrada:</strong> "${valor}" (tipo: ${typeof valor})</p>
      <p><strong>Comparado con:</strong> ${numero} (tipo: number)</p>
      <p class="buggy-line">== (con coerción): ${buggyResult} ${buggyResult ? "⚠️ ¡Mal!" : "✅ OK"}</p>
      <p class="fixed-line">=== (estricto): ${fixedResult} ${fixedResult ? "⚠️ ¡Mal!" : "✅ OK"}</p>
      <p class="bug-hint">💡 Si valor = "5", == devuelve true (coerción), === devuelve false (estricto)</p>
    </div>
    <div class="comparison">
      <div class="python-code">
        <h4>Python</h4>
        <pre># Python no tiene ===
# == siempre compara valores
"5" == 5  # False (sin coerción)
5 == 5    # True</pre>
      </div>
      <div class="js-code">
        <h4>JavaScript</h4>
        <pre>// == con coerción
"5" == 5   // true ⚠️
0 == ""    // true ⚠️

// === estricto (recomendado)
"5" === 5  // false ✅
0 === ""   // false ✅</pre>
      </div>
    </div>
  `;

  marcarBugResuelto("bug2");
}

// ============================================
   BUG 3: undefined vs null
   // Python: None → JS: null o undefined
   ============================================

function probarBug3() {
  const checkbox = document.getElementById("bug3Check");
  const valor = checkbox.checked ? "valor activo" : undefined;

  // BUG: undefined y null son diferentes, pero == los considera iguales
  // undefined es "no existe", null es "existe pero está vacío"

  const esUndefined = valor === undefined;
  const esNull = valor === null;
  const esFalsy = !valor;  // undefined es falsy

  const resultado = document.getElementById("bug3Resultado");

  resultado.innerHTML = `
    <div class="bug-description">
      <h4>🐛 BUG IDENTIFICADO</h4>
      <p><strong>Checkbox marcado:</strong> ${checkbox.checked}</p>
      <p><strong>Valor:</strong> ${valor}</p>
      <p><strong>Es undefined:</strong> ${esUndefined}</p>
      <p><strong>Es null:</strong> ${esNull}</p>
      <p><strong>Es falsy:</strong> ${esFalsy}</p>
      <p class="bug-hint">💡 undefined = "no tiene valor", null = "valor intencionalmente vacío"</p>
    </div>
    <div class="comparison">
      <div class="python-code">
        <h4>Python</h4>
        <pre># None indica ausencia de valor
valor = None
if valor is None:
    print("No hay valor")

# No existe undefined
# Solo None</pre>
      </div>
      <div class="js-code">
        <h4>JavaScript</h4>
        <pre>// undefined = no definido
let x;
console.log(x); // undefined

// null = vacío intencional
let y = null;
console.log(y); // null

// Ambos son falsy
if (!x) console.log("x es falsy");
if (!y) console.log("y es falsy");</pre>
      </div>
    </div>
  `;

  marcarBugResuelto("bug3");
}

// ============================================
   BUG 4: Scope de variables (var vs let/const)
   // Python: scope por función (no existe block scope)
   // JS: var es function scope, let/const son block scope
   ============================================

function probarBug4() {
  // BUG: var tiene scope de función, no de bloque
  // FIXED: let/const tienen scope de bloque

  const resultado = document.getElementById("bug4Resultado");
  let codigoBuggy = "";
  let codigoFixed = "";

  // Simular el comportamiento
  {
    var x = 10;  // BUG: x escapa del bloque
    let y = 20;  // FIXED: y no escapa del bloque
  }

  codigoBuggy = `var x fuera del bloque: ${x} (¡accesible!)`;
  codigoFixed = `let y fuera del bloque: Error (no accesible, correcto)`;

  resultado.innerHTML = `
    <div class="bug-description">
      <h4>🐛 BUG IDENTIFICADO</h4>
      <p class="buggy-line">${codigoBuggy}</p>
      <p class="fixed-line">${codigoFixed}</p>
      <p class="bug-hint">💡 var tiene function scope, let/const tienen block scope</p>
    </div>
    <div class="comparison">
      <div class="python-code">
        <h4>Python</h4>
        <pre># Python no tiene block scope
# Solo function scope

def mi_funcion():
    if True:
        x = 10
    # x sigue accesible aquí
    print(x)  # 10

# NO existe var/let/const</pre>
      </div>
      <div class="js-code">
        <h4>JavaScript</h4>
        <pre>// var: function scope (old way)
{
  var x = 10;
}
console.log(x); // 10 ⚠️

// let/const: block scope (new way)
{
  let y = 20;
}
console.log(y); // ReferenceError ✅</pre>
      </div>
    </div>
  `;

  marcarBugResuelto("bug4");
}

// ============================================
   BUG 5: Asincronía - Falta await
   // Python: asyncio, sync/await similar
   // JS: async/await para manejar promesas
   ============================================

function probarBug5() {
  const resultado = document.getElementById("bug5Resultado");

  // Simular una operación asíncrona
  const promesa = new Promise(resolve => {
    setTimeout(() => resolve("Datos cargados"), 1000);
  });

  resultado.innerHTML = `
    <div class="info-box">
      <h4>⏳ Cargando...</h4>
      <p>Esperando 1 segundo...</p>
    </div>
  `;

  // BUG: Sin await, la promesa no se resuelve
  // FIXED: Con await, esperamos el resultado

  setTimeout(async () => {
    const resultadoSinAwait = promesa; // [object Promise]
    const resultadoConAwait = await promesa; // "Datos cargados"

    resultado.innerHTML = `
      <div class="bug-description">
        <h4>🐛 BUG IDENTIFICADO</h4>
        <p class="buggy-line">Sin await: ${resultadoSinAwait} (¡Es una Promise!)</p>
        <p class="fixed-line">Con await: ${resultadoConAwait} (Resultado correcto)</p>
        <p class="bug-hint">💡 Siempre usa await cuando llamas a funciones async</p>
      </div>
      <div class="comparison">
        <div class="python-code">
          <h4>Python</h4>
          <pre>import asyncio

async def obtener_datos():
    await asyncio.sleep(1)
    return "Datos cargados"

# BUG: olvidar await
resultado = obtener_datos()
# <coroutine object>

# FIXED: usar await
resultado = await obtener_datos()
# "Datos cargados"</pre>
        </div>
        <div class="js-code">
          <h4>JavaScript</h4>
          <pre>async function obtenerDatos() {
  await new Promise(r =>
    setTimeout(r, 1000)
  );
  return "Datos cargados";
}

// BUG: olvidar await
const resultado = obtenerDatos();
// [object Promise]

// FIXED: usar await
const resultado = await obtenerDatos();
// "Datos cargados"</pre>
        </div>
      </div>
    `;

    marcarBugResuelto("bug5");
  }, 1000);
}

// ============================================
   HELPER FUNCTIONS
   ============================================

function marcarBugResuelto(bugId) {
  // Actualizar contador
  if (!window.bugsResueltosSet) {
    window.bugsResueltosSet = new Set();
  }

  if (!window.bugsResueltosSet.has(bugId)) {
    window.bugsResueltosSet.add(bugId);
    bugsResueltos++;
    actualizarProgreso();

    // Cambiar estilo del card
    const card = document.getElementById(bugId).closest(".card");
    card.classList.remove("bug-card");
    card.classList.add("fixed-card");

    const badge = card.querySelector(".bug-badge");
    if (badge) {
      badge.textContent = "✅ RESUELTO";
      badge.classList.remove("bug-badge");
      badge.classList.add("fixed-badge");
    }
  }
}

function reiniciarProgreso() {
  window.bugsResueltosSet = new Set();
  bugsResueltos = 0;
  actualizarProgreso();

  // Resetear todos los cards
  document.querySelectorAll(".fixed-card").forEach(card => {
    card.classList.remove("fixed-card");
    card.classList.add("bug-card");

    const badge = card.querySelector(".fixed-badge");
    if (badge) {
      badge.textContent = "🐛 BUG";
      badge.classList.remove("fixed-badge");
      badge.classList.add("bug-badge");
    }
  });

  // Limpiar resultados
  document.querySelectorAll(".result").forEach(r => {
    r.innerHTML = "";
    r.classList.add("hidden");
  });
}

// ============================================
   INICIALIZACIÓN
   ============================================

console.log("%cS24: Clínica de Bugs - Práctica de Debugging", "color: #f97316; font-size: 20px; font-weight: bold;");
console.log("\n--- Bugs comunes en JavaScript ---");
console.log("1. String + String = Concatenación (no suma)");
console.log("2. == vs === (coerción vs estricto)");
console.log("3. undefined vs null");
console.log("4. var vs let/const (scope)");
console.log("5. Falta await en async functions");

document.addEventListener("DOMContentLoaded", () => {
  actualizarProgreso();

  // Enter key support
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
