// S12: Módulos y Reuso
// Demostración de import/export en JavaScript (ES6 modules)
// Equivalente a: from utils import *, from math import *, etc.

// ============================================
// IMPORTAR DESDE UTILS.JS
// Python: from utils import *
// JS: import { ... } from "./utils.js"
// ============================================

import {
  // Math
  CONSTANTES,
  raizCuadrada,
  potencia,
  redondear,
  valorAbsoluto,
  maximo,
  minimo,
  // Random
  enteroAleatorio,
  decimalAleatorio,
  elegir,
  lanzarDado,
  lanzarMoneda,
  generarListaAleatoria,
  // DateTime
  fechaHoraActual,
  formatearFecha,
  diferenciaFechas,
  crearFecha,
  sumarDias,
  // String
  capitalizar,
  esPalindromo,
  contarPalabras,
  contarVocales,
  // Validación
  validarEmail,
  esPositivo,
  enRango,
  // Negocio
  calcularTotalFactura,
  formatearMoneda,
  // Array
  sumarLista,
  promedioLista,
  filtrarPares,
  mapearCuadrado,
  ordenarNumeros
} from "./utils.js";

// ============================================
// UTILIDADES DE UI
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
// MÓDULO MATH - DEMOS
// ============================================

/**
 * Demo: Constantes Matemáticas
 * Python: import math; math.pi, math.e
 */
function demoConstantes() {
  const html = `
    <div class="success-box">
      <h3>📐 Constantes Matemáticas</h3>
      <p><strong>π (PI):</strong> ${CONSTANTES.PI}</p>
      <p><strong>e (Euler):</strong> ${CONSTANTES.E}</p>
      <p><strong>√2:</strong> ${CONSTANTES.SQRT2}</p>
      <p><strong>ln(2):</strong> ${CONSTANTES.LN2}</p>
      <p class="formula">
        Python: <code>import math; math.pi, math.e</code><br>
        JS: <code>Math.PI, Math.E</code> (disponibles globalmente)
      </p>
    </div>
  `;
  mostrarResultado("resultadoMath", html);
}

/**
 * Raíz Cuadrada
 * Python: math.sqrt(16)
 */
function demoRaiz() {
  const numero = obtenerNumero("raizNumero");
  if (numero === null) {
    mostrarResultado("resultadoMath", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  const resultado = raizCuadrada(numero);

  let html;
  if (resultado.error) {
    html = `<p class="error">${resultado.mensaje}</p>`;
  } else {
    html = `
      <div class="success-box">
        <h3>√ Raíz de ${numero}</h3>
        <p class="numero-grande">${resultado.resultado.toFixed(4)}</p>
        <p class="formula">
          Python: <code>math.sqrt(${numero})</code><br>
          JS: <code>Math.sqrt(${numero})</code>
        </p>
      </div>
    `;
  }
  mostrarResultado("resultadoMath", html);
}

/**
 * Potencia
 * Python: math.pow(2, 8)
 */
function demoPotencia() {
  const base = obtenerNumero("potenciaBase");
  const exp = obtenerNumero("potenciaExp");

  if (base === null || exp === null) {
    mostrarResultado("resultadoMath", "<p class='error'>Ingresa base y exponente.</p>");
    return;
  }

  const resultado = potencia(base, exp);

  const html = `
    <div class="success-box">
      <h3>^ Potencia</h3>
      <p><strong>${base}<sup>${exp}</sup></strong> = <span class="numero-grande">${resultado.toLocaleString()}</span></p>
      <p class="formula">
        Python: <code>math.pow(${base}, ${exp})</code><br>
        JS: <code>Math.pow(${base}, ${exp})</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoMath", html);
}

/**
 * Redondeo
 * Python: round(3.7), math.ceil(3.2), math.floor(3.9)
 */
function demoRedondeo() {
  const numero = obtenerNumero("redondeoNum");
  if (numero === null) {
    mostrarResultado("resultadoMath", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  const html = `
    <div class="success-box">
      <h3>📊 Redondeo de ${numero}</h3>
      <p><strong>round():</strong> ${redondear(numero, "round")} (más cercano)</p>
      <p><strong>ceil():</strong> ${redondear(numero, "ceil")} (arriba)</p>
      <p><strong>floor():</strong> ${redondear(numero, "floor")} (abajo)</p>
      <p class="formula">
        Python: <code>round(x), math.ceil(x), math.floor(x)</code><br>
        JS: <code>Math.round(x), Math.ceil(x), Math.floor(x)</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoMath", html);
}

/**
 * Valor Absoluto
 * Python: abs(-5)
 */
function demoAbsoluto() {
  const numero = obtenerNumero("absolutoNum");
  if (numero === null) {
    mostrarResultado("resultadoMath", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  const resultado = valorAbsoluto(numero);

  const html = `
    <div class="success-box">
      <h3>|x| Valor Absoluto</h3>
      <p><strong>|${numero}|</strong> = <span class="numero-grande">${resultado}</span></p>
      <p class="formula">
        Python: <code>abs(${numero})</code><br>
        JS: <code>Math.abs(${numero})</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoMath", html);
}

/**
 * Max y Min
 * Python: max(1,5,3), min(1,5,3)
 */
function demoMaxMin() {
  const nums = [1, 5, 3, 9, 2, 7];
  const max = maximo(...nums);
  const min = minimo(...nums);

  const html = `
    <div class="success-box">
      <h3>📈 Max y Min</h3>
      <p><strong>Lista:</strong> ${nums.join(", ")}</p>
      <p><strong>Máximo:</strong> <span class="numero-grande">${max}</span></p>
      <p><strong>Mínimo:</strong> <span class="numero-grande">${min}</span></p>
      <p class="formula">
        Python: <code>max(lista), min(lista)</code><br>
        JS: <code>Math.max(...lista), Math.min(...lista)</code> (spread operator)
      </p>
    </div>
  `;
  mostrarResultado("resultadoMath", html);
}

// ============================================
// MÓDULO RANDOM - DEMOS
// ============================================

/**
 * Lanzar Dado
 * Python: random.randint(1, 6)
 */
function demoDado() {
  const caras = obtenerNumero("dadoCaras") || 6;
  const resultado = lanzarDado(caras);

  const html = `
    <div class="success-box">
      <h3>🎲 Dado de ${caras} caras</h3>
      <p class="numero-grande">${resultado}</p>
      <p class="formula">
        Python: <code>random.randint(1, ${caras})</code><br>
        JS: <code>Math.floor(Math.random() * ${caras}) + 1</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoRandom", html);
}

/**
 * Lanzar Moneda
 * Python: "cara" if random.random() > 0.5 else "sello"
 */
function demoMoneda() {
  const resultado = lanzarMoneda();
  const emoji = resultado === "cara" ? "👑" : "🦅";

  const html = `
    <div class="success-box">
      <h3>${emoji} Moneda</h3>
      <p class="numero-grande">${resultado.toUpperCase()}</p>
      <p class="formula">
        Python: <code>"cara" if random.random() > 0.5 else "sello"</code><br>
        JS: <code>Math.random() > 0.5 ? "cara" : "sello"</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoRandom", html);
}

/**
 * Entero Aleatorio en Rango
 * Python: random.randint(min, max)
 */
function demoEnteroAleatorio() {
  const min = obtenerNumero("aleatorioMin");
  const max = obtenerNumero("aleatorioMax");

  if (min === null || max === null) {
    mostrarResultado("resultadoRandom", "<p class='error'>Ingresa mínimo y máximo.</p>");
    return;
  }

  const resultado = enteroAleatorio(min, max);

  const html = `
    <div class="success-box">
      <h3>🔢 Entero entre ${min} y ${max}</h3>
      <p class="numero-grande">${resultado}</p>
      <p class="formula">
        Python: <code>random.randint(${min}, ${max})</code><br>
        JS: <code>Math.floor(Math.random() * (${max} - ${min} + 1)) + ${min}</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoRandom", html);
}

/**
 * Generar Lista Aleatoria
 * Python: [random.randint(min, max) for _ in range(n)]
 */
function demoListaAleatoria() {
  const cantidad = obtenerNumero("listaCantidad") || 5;
  const min = obtenerNumero("listaMin") || 1;
  const max = obtenerNumero("listaMax") || 100;

  const lista = generarListaAleatoria(cantidad, min, max);
  const suma = sumarLista(lista);
  const promedio = promedioLista(lista);

  const html = `
    <div class="success-box">
      <h3>📋 Lista Aleatoria (${cantidad} números)</h3>
      <p><strong>Lista:</strong> ${lista.join(", ")}</p>
      <p><strong>Suma:</strong> ${suma}</p>
      <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
      <p class="formula">
        Python: <code>[random.randint(${min}, ${max}) for _ in range(${cantidad})]</code><br>
        JS: <code>Array.from({length: ${cantidad}}, () => enteroAleatorio(${min}, ${max}))</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoRandom", html);
}

/**
 * Elegir Elemento Aleatorio
 * Python: random.choice(lista)
 */
function demoChoice() {
  const frutas = ["🍎 manzana", "🍌 banana", "🍊 naranja", "🍇 uva", "🍓 fresa"];
  const elegida = elegir(frutas);

  const html = `
    <div class="success-box">
      <h3>🎰 Elección Aleatoria</h3>
      <p><strong>Opciones:</strong> ${frutas.join(", ")}</p>
      <p><strong>Elegida:</strong> <span class="numero-grande">${elegida}</span></p>
      <p class="formula">
        Python: <code>random.choice(lista)</code><br>
        JS: <code>lista[Math.floor(Math.random() * lista.length)]</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoRandom", html);
}

// ============================================
// MÓDULO DATETIME - DEMOS
// ============================================

/**
 * Fecha y Hora Actual
 * Python: datetime.now()
 */
function demoFechaAhora() {
  const ahora = fechaHoraActual();

  const html = `
    <div class="success-box">
      <h3>📅 Fecha y Hora Actual</h3>
      <p><strong>Fecha:</strong> ${ahora.fecha}</p>
      <p><strong>Hora:</strong> ${ahora.hora}</p>
      <p><strong>Completo:</strong> ${ahora.fechaHora}</p>
      <p><strong>Timestamp:</strong> ${ahora.timestamp}</p>
      <p class="formula">
        Python: <code>datetime.now()</code><br>
        JS: <code>new Date()</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoFecha", html);
}

/**
 * Formatear Fecha
 * Python: datetime.strftime("%Y-%m-%d")
 */
function demoFormatearFecha() {
  const fecha = new Date();
  const corta = formatearFecha(fecha, "corta");
  const larga = formatearFecha(fecha, "larga");
  const iso = formatearFecha(fecha, "iso");

  const html = `
    <div class="success-box">
      <h3>📆 Formatear Fecha</h3>
      <p><strong>Corta:</strong> ${corta}</p>
      <p><strong>Larga:</strong> ${larga}</p>
      <p><strong>ISO:</strong> ${iso}</p>
      <p class="formula">
        Python: <code>fecha.strftime("%d/%m/%Y")</code><br>
        JS: <code>fecha.toLocaleDateString("es-CO", {...})</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoFecha", html);
}

/**
 * Diferencia de Fechas
 * Python: (fecha2 - fecha1).days
 */
function demoDiferenciaFechas() {
  const fecha1 = new Date();
  const fecha2 = sumarDias(fecha1, 30);
  const diff = diferenciaFechas(fecha1, fecha2);

  const html = `
    <div class="success-box">
      <h3>📊 Diferencia de Fechas</h3>
      <p><strong>Fecha 1:</strong> ${formatearFecha(fecha1, "corta")}</p>
      <p><strong>Fecha 2:</strong> ${formatearFecha(fecha2, "corta")} (+30 días)</p>
      <p style="border-top: 1px solid var(--border-color); margin: 8px 0;"></p>
      <p><strong>Diferencia:</strong></p>
      <p>📅 ${diff.dias} días</p>
      <p>⏰ ${diff.horas} horas</p>
      <p>⏱️ ${diff.minutos} minutos</p>
      <p class="formula">
        Python: <code>(fecha2 - fecha1).days</code><br>
        JS: <code>Math.floor((fecha2 - fecha1) / (1000 * 60 * 60 * 24))</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoFecha", html);
}

/**
 * Sumar Días
 * Python: fecha + datetime.timedelta(days=7)
 */
function demoSumarDias() {
  const dias = obtenerNumero("sumarDias") || 7;
  const hoy = new Date();
  const futura = sumarDias(hoy, dias);

  const html = `
    <div class="success-box">
      <h3>📅 Sumar Días</h3>
      <p><strong>Hoy:</strong> ${formatearFecha(hoy, "larga")}</p>
      <p><strong>En ${dias} días:</strong> ${formatearFecha(futura, "larga")}</p>
      <p class="formula">
        Python: <code>fecha + datetime.timedelta(days=${dias})</code><br>
        JS: <code>fecha.setDate(fecha.getDate() + ${dias})</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoFecha", html);
}

// ============================================
// MÓDULO STRING - DEMOS
// ============================================

/**
 * Capitalizar
 * Python: texto.capitalize()
 */
function demoCapitalizar() {
  const texto = obtenerTexto("capitalizarInput");
  if (!texto) {
    mostrarResultado("resultadoString", "<p class='error'>Ingresa un texto.</p>");
    return;
  }

  const resultado = capitalizar(texto);

  const html = `
    <div class="success-box">
      <h3>Aa Capitalizar</h3>
      <p><strong>Original:</strong> "${texto}"</p>
      <p><strong>Capitalizada:</strong> "${resultado}"</p>
      <p class="formula">
        Python: <code>texto.capitalize()</code><br>
        JS: <code>texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoString", html);
}

/**
 * Palíndromo
 * Python: texto == texto[::-1]
 */
function demoPalindromo() {
  const texto = obtenerTexto("palindromoInput");
  if (!texto) {
    mostrarResultado("resultadoString", "<p class='error'>Ingresa un texto.</p>");
    return;
  }

  const es = esPalindromo(texto);

  const html = `
    <div class="${es ? "success-box" : "error-box"}">
      <h3>${es ? "✅" : "❌"} Palíndromo</h3>
      <p><strong>Texto:</strong> "${texto}"</p>
      <p><strong>Resultado:</strong> ${es ? "¡ES un palíndromo!" : "NO es un palíndromo"}</p>
      <p class="formula">
        Python: <code>texto.lower() == texto.lower()[::-1]</code><br>
        JS: <code>texto.toLowerCase() === texto.toLowerCase().split("").reverse().join("")</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoString", html);
}

/**
 * Contar Palabras
 * Python: len(texto.split())
 */
function demoContarPalabras() {
  const texto = obtenerTexto("palabrasInput");
  if (!texto) {
    mostrarResultado("resultadoString", "<p class='error'>Ingresa un texto.</p>");
    return;
  }

  const count = contarPalabras(texto);
  const vocales = contarVocales(texto);

  const html = `
    <div class="success-box">
      <h3>📝 Contar Palabras</h3>
      <p><strong>Texto:</strong> "${texto}"</p>
      <p><strong>Palabras:</strong> <span class="numero-grande">${count}</span></p>
      <p><strong>Vocales:</strong> ${vocales}</p>
      <p class="formula">
        Python: <code>len(texto.split())</code><br>
        JS: <code>texto.trim().split(/\\s+/).filter(p => p.length > 0).length</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoString", html);
}

// ============================================
// MÓDULO VALIDACIÓN - DEMOS
// ============================================

/**
 * Validar Email
 */
function demoValidarEmail() {
  const email = obtenerTexto("emailInput");
  if (!email) {
    mostrarResultado("resultadoValidacion", "<p class='error'>Ingresa un email.</p>");
    return;
  }

  const valido = validarEmail(email);

  const html = `
    <div class="${valido ? "success-box" : "error-box"}">
      <h3>${valido ? "✅" : "❌"} Validación Email</h3>
      <p><strong>Email:</strong> "${email}"</p>
      <p><strong>Resultado:</strong> ${valido ? "VÁLIDO" : "INVÁLIDO"}</p>
      <p class="formula">
        Python: <code>re.match(r"[^@]+@[^@]+\\.[^@]+", email)</code><br>
        JS: <code>/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoValidacion", html);
}

/**
 * Validar Rango
 * Python: valor >= min and valor <= max
 */
function demoValidarRango() {
  const valor = obtenerNumero("rangoValor");
  const min = obtenerNumero("rangoMin") || 0;
  const max = obtenerNumero("rangoMax") || 100;

  if (valor === null) {
    mostrarResultado("resultadoValidacion", "<p class='error'>Ingresa un valor.</p>");
    return;
  }

  const enR = enRango(valor, min, max);

  const html = `
    <div class="${enR ? "success-box" : "error-box"}">
      <h3>${enR ? "✅" : "❌"} Validación Rango</h3>
      <p><strong>Valor:</strong> ${valor}</p>
      <p><strong>Rango:</strong> ${min} - ${max}</p>
      <p><strong>Resultado:</strong> ${enR ? "EN RANGO" : "FUERA DE RANGO"}</p>
      <p class="formula">
        Python: <code>${min} <= ${valor} <= ${max}</code><br>
        JS: <code>${valor} >= ${min} && ${valor} <= ${max}</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoValidacion", html);
}

/**
 * Validar Positivo
 */
function demoValidarPositivo() {
  const numero = obtenerNumero("positivoNum");
  if (numero === null) {
    mostrarResultado("resultadoValidacion", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  const pos = esPositivo(numero);

  const html = `
    <div class="${pos ? "success-box" : "error-box"}">
      <h3>${pos ? "✅" : "❌"} Validación Positivo</h3>
      <p><strong>Número:</strong> ${numero}</p>
      <p><strong>Resultado:</strong> ${pos ? "ES POSITIVO" : "NO ES POSITIVO"}</p>
      <p class="formula">
        Python: <code>isinstance(x, number) and x > 0</code><br>
        JS: <code>typeof x === "number" && x > 0</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoValidacion", html);
}

// ============================================
// CÁLCULO DE FACTURA - Integración de módulos
// ============================================

function demoFactura() {
  const cantidad = obtenerNumero("facturaCantidad");
  const precio = obtenerNumero("facturaPrecio");
  const descuento = obtenerNumero("facturaDescuento") || 0;

  if (!cantidad || !precio) {
    mostrarResultado("resultadoFactura", "<p class='error'>Ingresa cantidad y precio.</p>");
    return;
  }

  // Usar función del módulo de cálculos
  const resultado = calcularTotalFactura(cantidad, precio, descuento, 19);

  const html = `
    <div class="success-box">
      <h3>🧾 Factura Generada</h3>
      <div style="font-family: monospace; font-size: 0.9rem;">
        <p>Cantidad: ${cantidad}</p>
        <p>Precio unitario: ${formatearMoneda(precio)}</p>
        <p style="border-top: 1px dashed var(--border-color); margin: 8px 0;">&nbsp;</p>
        <p>Subtotal: ${formatearMoneda(resultado.subtotal)}</p>
        ${descuento > 0 ? `<p>Descuento (${descuento}%): -${formatearMoneda(resultado.descuento)}</p>` : ""}
        <p>Base gravable: ${formatearMoneda(resultado.baseGravable)}</p>
        <p>IVA (19%): ${formatearMoneda(resultado.iva)}</p>
        <p style="border-top: 1px solid var(--accent-success); margin: 8px 0;">&nbsp;</p>
        <p style="font-size: 1.1rem;"><strong>TOTAL: ${formatearMoneda(resultado.total)}</strong></p>
      </div>
      <p class="formula">
        Python: <code>from calculos import calcular_factura</code><br>
        JS: <code>import { calcularTotalFactura } from "./utils.js"</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoFactura", html);
}

// ============================================
// ARRAY UTILS - Demo de funciones de lista
// ============================================

function demoArrays() {
  const input = obtenerTexto("arrayInput");
  if (!input) {
    mostrarResultado("resultadoArrays", "<p class='error'>Ingresa números separados por coma.</p>");
    return;
  }

  const lista = input.split(",").map(n => parseFloat(n.trim())).filter(n => !Number.isNaN(n));

  if (lista.length === 0) {
    mostrarResultado("resultadoArrays", "<p class='error'>Ingresa números válidos.</p>");
    return;
  }

  // Usar funciones del módulo
  const suma = sumarLista(lista);
  const promedio = promedioLista(lista);
  const pares = filtrarPares(lista);
  const cuadrados = mapearCuadrado(lista);
  const ordenado = ordenarNumeros(lista);
  const max = buscarMaximo(lista);
  const min = buscarMinimo(lista);

  const html = `
    <div class="success-box">
      <h3>📊 Operaciones de Array</h3>
      <p><strong>Original:</strong> ${lista.join(", ")}</p>
      <p><strong>Suma:</strong> ${suma}</p>
      <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
      <p><strong>Máximo:</strong> ${max}</p>
      <p><strong>Mínimo:</strong> ${min}</p>
      <p><strong>Pares:</strong> ${pares.join(", ")}</p>
      <p><strong>Cuadrados:</strong> ${cuadrados.join(", ")}</p>
      <p><strong>Ordenado:</strong> ${ordenado.join(", ")}</p>
      <p class="formula">
        Python: <code>sum(lista), len(lista), sorted(lista)</code><br>
        JS: <code>lista.reduce((a,b) => a+b), lista.length, [...lista].sort((a,b) => a-b)</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoArrays", html);
}

// ============================================
// INICIALIZACIÓN
// ============================================

console.log("%cS12: Módulos y Reuso", "color: #84cc16; font-size: 20px; font-weight: bold;");
console.log("Este archivo usa ES6 Modules (import/export)");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("from utils import * (Python) → import { ... } from './utils.js' (JS)");
console.log("import math (Python) → Math object (JS, global)");
console.log("import random (Python) → Math.random() (JS)");
console.log("from datetime import datetime (Python) → new Date() (JS)");

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
