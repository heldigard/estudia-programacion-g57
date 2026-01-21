// S09: Funciones con Return
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

function obtenerTexto(id) {
  const valor = document.getElementById(id).value;
  return valor.trim() || null;
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Demo: print() vs return()
 * Python: print() muestra, return() devuelve
 * JS: console.log() muestra, return devuelve
 */

// Python: def sumar_print(a, b): print(a + b)
function sumarPrint(a, b) {
  console.log(a + b);
  // Sin return → devuelve undefined
}

// Python: def sumar_return(a, b): return a + b
function sumarReturn(a, b) {
  return a + b;
}

function demoPrint() {
  const resultado = sumarPrint(5, 3);
  document.getElementById("printResult").innerHTML = `
    <span style="color: var(--text-secondary)">Resultado: undefined</span>
  `;
}

function demoReturn() {
  const resultado = sumarReturn(5, 3);
  document.getElementById("returnResult").innerHTML = `
    <span style="color: var(--accent-success); font-weight: bold;">Resultado: ${resultado}</span>
  `;
}

function probarDiferencia() {
  const printResult = sumarPrint(5, 3);
  const returnResult = sumarReturn(5, 3);

  // Intentar usar los resultados
  let html = `<div class="success-box">
    <h3>📊 Diferencia Clave</h3>
    <p><strong>print() devuelve:</strong> ${printResult} (no se puede usar)</p>
    <p><strong>return() devuelve:</strong> ${returnResult} (se puede usar)</p>
  `;

  // Demostrar que podemos usar el return
  const total = returnResult + 10;
  html += `<p><strong>returnResult + 10 =</strong> ${total}</p>`;
  html += `<p class="formula">
    Python: <code>print()</code> muestra en consola<br>
    Python: <code>return</code> devuelve un valor usable
  </p></div>`;

  mostrarResultado("resultadoPrintReturn", html);
}

/**
 * Funciones que devuelven un valor
 * Python: def cuadrado(n): return n ** 2
 * JS: function cuadrado(n) { return n ** 2; }
 */

function cuadradoFn(n) {
  return n ** 2;
}

function cuboFn(n) {
  return n ** 3;
}

function calcularCuadrado() {
  const n = obtenerNumero("cuadradoNum");
  if (n === null) {
    mostrarResultado("resultadoUnico", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  const resultado = cuadradoFn(n);
  const html = `
    <div class="success-box">
      <h3>➗ Cuadrado de ${n}</h3>
      <p class="numero-grande">${resultado}</p>
      <p class="formula">
        Python: <code>def cuadrado(n): return n ** 2</code><br>
        JS: <code>function cuadrado(n) { return n ** 2; }</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoUnico", html);
}

function calcularCubo() {
  const n = obtenerNumero("cuboNum");
  if (n === null) {
    mostrarResultado("resultadoUnico", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  const resultado = cuboFn(n);
  const html = `
    <div class="success-box">
      <h3>📦 Cubo de ${n}</h3>
      <p class="numero-grande">${resultado}</p>
      <p class="formula">
        Python: <code>def cubo(n): return n ** 3</code><br>
        JS: <code>function cubo(n) { return n ** 3; }</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoUnico", html);
}

/**
 * Devolver múltiples valores
 * Python: return min, max, prom
 * JS: return [min, max, prom] (array)
 */

// Python: def calcular_estadisticas(lista): return min(lista), max(lista), sum(lista)/len(lista)
function calcularEstadisticasFn(lista) {
  const minimo = Math.min(...lista);
  const maximo = Math.max(...lista);
  const promedio = lista.reduce((a, b) => a + b, 0) / lista.length;
  return [minimo, maximo, promedio];
}

function calcularEstadisticas() {
  const input = obtenerTexto("notasInput");
  if (!input) {
    mostrarResultado("resultadoMultiple", "<p class='error'>Ingresa las notas separadas por coma.</p>");
    return;
  }

  const notas = input.split(",").map(n => parseFloat(n.trim())).filter(n => !Number.isNaN(n));

  if (notas.length === 0) {
    mostrarResultado("resultadoMultiple", "<p class='error'>Ingresa números válidos.</p>");
    return;
  }

  const [minimo, maximo, promedio] = calcularEstadisticasFn(notas);

  const html = `
    <div class="success-box">
      <h3>📊 Estadísticas</h3>
      <p><strong>Notas:</strong> ${notas.join(", ")}</p>
      <p><strong>Mínimo:</strong> ${minimo}</p>
      <p><strong>Máximo:</strong> ${maximo}</p>
      <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
      <p class="formula">
        Python: <code>return min, max, prom</code><br>
        JS: <code>return [min, max, prom]</code> (desestructurar array)
      </p>
    </div>
  `;
  mostrarResultado("resultadoMultiple", html);
}

/**
 * Return temprano (early return)
 * Python: if condicion: return valor
 * JS: if (condicion) { return valor; }
 */

// Python: def verificar_edad(edad): if edad < 0: return "Error"; ...
function verificarEdadFn(edad) {
  if (edad < 0) {
    return { tipo: "error", mensaje: "Error: edad no puede ser negativa" };
  }
  if (edad < 18) {
    return { tipo: "menor", mensaje: "Menor de edad" };
  }
  return { tipo: "mayor", mensaje: "Mayor de edad" };
}

function verificarEdadReturn() {
  const edad = obtenerNumero("edadVerificar");
  if (edad === null) {
    mostrarResultado("resultadoReturnEarly", "<p class='error'>Ingresa una edad.</p>");
    return;
  }

  const resultado = verificarEdadFn(edad);

  let clase = "success-box";
  if (resultado.tipo === "error") clase = "error-box";
  else if (resultado.tipo === "menor") clase = "info-box";

  const html = `
    <div class="${clase}">
      <h3>${resultado.tipo === "error" ? "❌" : resultado.tipo === "menor" ? "📋" : "✅"} ${resultado.mensaje}</h3>
      <p class="formula">
        Python: <code>if edad < 0: return "Error"</code><br>
        JS: <code>if (edad < 0) { return {error}; }</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoReturnEarly", html);
}

/**
 * Calculadora de Compras - Múltiples funciones que devuelven
 */

// Python: def calcular_subtotal(cantidad, precio): return cantidad * precio
function calcularSubtotal(cantidad, precio) {
  return cantidad * precio;
}

// Python: def calcular_descuento(subtotal, porcentaje): return subtotal * porcentaje / 100
function calcularDescuento(subtotal, porcentaje) {
  return subtotal * porcentaje / 100;
}

// Python: def calcular_impuesto(subtotal, tasa=19): return subtotal * tasa / 100
function calcularImpuesto(subtotal, tasa = 19) {
  return subtotal * tasa / 100;
}

// Python: def calcular_total(subtotal, descuento, impuesto): return subtotal - descuento + impuesto
function calcularTotal(subtotal, descuento, impuesto) {
  return subtotal - descuento + impuesto;
}

function generarFactura() {
  const cantidad = obtenerNumero("compraCantidad");
  const precio = obtenerNumero("compraPrecio");
  let descuentoPct = obtenerNumero("compraDescuento");

  if (!cantidad || !precio || cantidad < 1 || precio < 0) {
    mostrarResultado("resultadoCompras", "<p class='error'>Ingresa cantidad y precio válidos.</p>");
    return;
  }

  if (descuentoPct === null) descuentoPct = 0;

  // Usar todas las funciones
  const subtotal = calcularSubtotal(cantidad, precio);
  const descuento = calcularDescuento(subtotal, descuentoPct);
  const base = subtotal - descuento;
  const impuesto = calcularImpuesto(base);
  const total = calcularTotal(base, 0, impuesto);

  const html = `
    <div class="success-box">
      <h3>🛒 Factura de Compra</h3>
      <div style="font-family: monospace; font-size: 0.9rem;">
        <p>Cantidad: ${cantidad}</p>
        <p>Precio unitario: $${precio.toLocaleString("es-CO")}</p>
        <p style="border-top: 1px dashed var(--border-color); margin: 8px 0;">&nbsp;</p>
        <p>Subtotal: $${subtotal.toLocaleString("es-CO")}</p>
        ${descuento > 0 ? `<p>Descuento (${descuentoPct}%): -$${descuento.toLocaleString("es-CO")}</p>` : ""}
        <p>IVA (19%): $${impuesto.toLocaleString("es-CO")}</p>
        <p style="border-top: 1px solid var(--accent-success); margin: 8px 0;">&nbsp;</p>
        <p style="font-size: 1.1rem;"><strong>TOTAL: $${total.toLocaleString("es-CO")}</strong></p>
      </div>
      <p class="formula">
        Python: <code>def calcular_subtotal(c, p): return c * p</code><br>
        JS: <code>function calcularSubtotal(c, p) { return c * p; }</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoCompras", html);
}

/**
 * Arrow Functions (Lambda)
 * Python: lambda x: x * 2
 * JS: x => x * 2
 */

// Lambda: doble = lambda x: x * 2
const doble = x => x * 2;

// Lambda: esPar = lambda n: n % 2 == 0
const esPar = n => n % 2 === 0;

function procesarDobles() {
  const input = obtenerTexto("listaNumeros");
  if (!input) {
    mostrarResultado("resultadoArrow", "<p class='error'>Ingresa números separados por coma.</p>");
    return;
  }

  const numeros = input.split(",").map(n => parseFloat(n.trim())).filter(n => !Number.isNaN(n));

  // Python: list(map(lambda x: x * 2, numeros))
  // JS: numeros.map(x => x * 2)
  const dobles = numeros.map(doble);

  const html = `
    <div class="success-box">
      <h3>➗ Dobles (map)</h3>
      <p><strong>Original:</strong> ${numeros.join(", ")}</p>
      <p><strong>Dobles:</strong> ${dobles.join(", ")}</p>
      <p class="formula">
        Python: <code>[x * 2 for x in lista]</code><br>
        JS: <code>lista.map(x => x * 2)</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoArrow", html);
}

function procesarPares() {
  const input = obtenerTexto("listaNumeros");
  if (!input) {
    mostrarResultado("resultadoArrow", "<p class='error'>Ingresa números separados por coma.</p>");
    return;
  }

  const numeros = input.split(",").map(n => parseFloat(n.trim())).filter(n => !Number.isNaN(n));

  // Python: list(filter(lambda x: x % 2 == 0, numeros))
  // JS: numeros.filter(x => x % 2 === 0)
  const pares = numeros.filter(esPar);

  const html = `
    <div class="info-box">
      <h3>✓ Números Pares (filter)</h3>
      <p><strong>Original:</strong> ${numeros.join(", ")}</p>
      <p><strong>Pares:</strong> ${pares.join(", ")}</p>
      <p class="formula">
        Python: <code>[x for x in lista if x % 2 == 0]</code><br>
        JS: <code>lista.filter(x => x % 2 === 0)</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoArrow", html);
}

function procesarSuma() {
  const input = obtenerTexto("listaNumeros");
  if (!input) {
    mostrarResultado("resultadoArrow", "<p class='error'>Ingresa números separados por coma.</p>");
    return;
  }

  const numeros = input.split(",").map(n => parseFloat(n.trim())).filter(n => !Number.isNaN(n));

  // Python: reduce(lambda a, b: a + b, numeros)
  // JS: numeros.reduce((a, b) => a + b, 0)
  const suma = numeros.reduce((a, b) => a + b, 0);

  const html = `
    <div class="success-box">
      <h3>➕ Suma Total (reduce)</h3>
      <p><strong>Números:</strong> ${numeros.join(" + ")}</p>
      <p><strong>Suma:</strong> <span class="numero-grande">${suma}</span></p>
      <p class="formula">
        Python: <code>sum(lista)</code><br>
        JS: <code>lista.reduce((a, b) => a + b, 0)</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoArrow", html);
}

// ============================================
// INICIALIZACION
// ============================================

console.log("%cS09: Funciones con Return", "color: #f472b6; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("return valor (Python) → return valor (JS)");
console.log("return a, b (Python) → return [a, b] (JS)");
console.log("lambda x: x*2 (Python) → x => x*2 (JS)");

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
