/*
  =====================================================
  S12: Módulos y Reuso - APP.JS
  =====================================================

  Este archivo (app.js) DEMUESTRA cómo IMPORTAR funciones
  desde un módulo personalizado (utils.js).

  PYTHON MÓDULOS ↔ JAVASCRIPT ES6 MODULES
  -----------------------------------------

  IMPORTAR MÓDULO:
  -----------------
  Python:
    import math
    from utils import saludar
    from utils import *

  JavaScript:
    import * as math from "./math.js"
    import { saludar } from "./utils.js"
    import * as utils from "./utils.js"

  DIFERENCIAS CLAVE:
  ------------------
  1. En Python, "import math" busca en librerías instaladas
     En JavaScript, "./utils.js" busca un ARCHIVO en el mismo directorio

  2. Python tiene math, random, datetime como módulos separados
     JavaScript tiene Math (global), Date (global), Math.random()

  3. En Python: from math import sqrt
     En JS: import { sqrt } from "./math.js"
     (o usa Math.sqrt() directamente - no requiere import!)

  4. IMPORTANTE: Para usar import/export en JavaScript, el script
     en HTML debe tener type="module":
     <script type="module" src="app.js"></script>

  MÓDULOS INTEGRADOS DE JS:
  --------------------------
  Math - NO requiere import (es global):
    Math.PI, Math.sqrt(), Math.random(), Math.floor()

  Date - NO requiere import (es un constructor):
    new Date(), fecha.toISOString()

  NO EXISTE módulo "random" en JavaScript:
    Usa Math.random() en su lugar
*/

// ============================================
// IMPORTAR DESDE UTILS.JS
// Python: from utils import sqrt, potencia, redondear
// JS: import { sqrt, potencia, redondear } from "./utils.js"
// ============================================

/*
  EXPLICACIÓN DE import { ... } from "...":
  ------------------------------------------

  La llave { } indica "import nombrado" - importamos funciones ESPECÍFICAS
  que fueron exportadas con "export" en utils.js:

  En utils.js:
    export function raizCuadrada(x) { ... }

  En app.js:
    import { raizCuadrada } from "./utils.js"

  El "./utils.js" significa:
    ./ = "en el mismo directorio"
    utils.js = "nombre del archivo"
    ¡Es OBLIGATORIO incluir la extensión .js!

  COMPARACIÓN CON PYTHON:
  -----------------------
  Python: from utils import raiz_cuadrada
  JS: import { raizCuadrada } from "./utils.js"

  Diferencias:
  - Python usa guiones bajos (raiz_cuadrada), JS usa camelCase (raizCuadrada)
  - JS requiere "./" antes del nombre del archivo
  - JS requiere la extensión .js
  - En JS usamos llaves { } para importar específicos
*/
import {
  // Math - Funciones matemáticas (Python: import math)
  CONSTANTES,           // math.pi, math.e, etc.
  raizCuadrada,         // math.sqrt()
  potencia,            // math.pow()
  redondear,           // round(), math.ceil(), math.floor()
  valorAbsoluto,       // abs()
  maximo,              // max()
  minimo,              // min()

  // Random - Generación de números aleatorios (Python: import random)
  enteroAleatorio,     // random.randint()
  decimalAleatorio,    // random.uniform()
  elegir,              // random.choice()
  lanzarDado,          // random.randint(1, 6)
  lanzarMoneda,        // random.choice(["cara", "sello"])
  generarListaAleatoria, // [random.randint() for _ in range(n)]

  // DateTime - Manejo de fechas (Python: from datetime import datetime)
  fechaHoraActual,     // datetime.now()
  formatearFecha,      // fecha.strftime()
  diferenciaFechas,    // (fecha2 - fecha1).days
  crearFecha,          // datetime(año, mes, dia)
  sumarDias,           // fecha + timedelta(days=dias)

  // String - Manipulación de texto
  capitalizar,         // str.capitalize()
  esPalindromo,        // texto == texto[::-1]
  contarPalabras,      // len(texto.split())
  contarVocales,       // Contar vocales en texto

  // Validación - Validaciones de datos
  validarEmail,        // Validar formato de email
  esPositivo,          // x > 0
  enRango,             // min <= x <= max

  // Negocio - Cálculos de factura
  calcularTotalFactura, // Calcular subtotal, IVA, total
  formatearMoneda,     // Formatear como moneda ($1.000,00)

  // Array - Operaciones de lista (Python: list operations)
  sumarLista,          // sum(lista)
  promedioLista,       // sum(lista) / len(lista)
  filtrarPares,        // [x for x in lista if x % 2 == 0]
  mapearCuadrado,      // [x ** 2 for x in lista]
  ordenarNumeros       // sorted(lista)
} from "./utils.js";

// ============================================
// UTILIDADES DE UI - Funciones de ayuda
// ============================================

/**
 * mostrarResultado - Muestra contenido en pantalla
 * Equivalente Python: print(resultado), pero en interfaz gráfica
 *
 * getElementById: Busca un elemento HTML por su atributo id
 * innerHTML: Establece el contenido HTML del elemento
 * classList.remove/add: Agrega/quita clases CSS
 */
function mostrarResultado(elementId, contenido) {
  const elemento = document.getElementById(elementId);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
  elemento.classList.add("visible");
}

/**
 * obtenerNumero - Convierte input a número
 * Equivalente Python: int(input(...)) con validación
 *
 * Number() convierte string a número
 * Number.isNaN() verifica si NO es un número válido
 */
function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  const numero = Number(valor);
  return Number.isNaN(numero) ? null : numero;
}

/**
 * obtenerTexto - Obtiene texto de input
 * Equivalente Python: input(...).strip()
 *
 * trim() elimina espacios al inicio y final
 * || null devuelve null si el string está vacío
 */
function obtenerTexto(id) {
  const valor = document.getElementById(id).value;
  return valor.trim() || null;
}

// ============================================
// MÓDULO MATH - DEMOSTRACIONES
// Python: import math
// JS: Math es un objeto global (no requiere import)
// ============================================

/**
 * Demo: Constantes Matemáticas
 * Python: import math; math.pi, math.e
 * JS: Math.PI, Math.E (disponibles globalmente)
 *
 * IMPORTANTE: En JavaScript NO necesitas importar Math.
 * Es un objeto integrado que siempre está disponible.
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
 * Python: import math; math.sqrt(16)
 * JS: Math.sqrt(16) (no requiere import)
 */
function demoRaiz() {
  const numero = obtenerNumero("raizNumero");
  if (numero === null) {
    mostrarResultado("resultadoMath", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  // Llamamos a la función importada de utils.js
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
          Python: <code>import math; math.sqrt(${numero})</code><br>
          JS: <code>Math.sqrt(${numero})</code> (global, no requiere import)
        </p>
      </div>
    `;
  }
  mostrarResultado("resultadoMath", html);
}

/**
 * Potencia
 * Python: math.pow(2, 8) o 2 ** 8
 * JS: Math.pow(2, 8) o 2 ** 8
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
 * JS: Math.round(3.7), Math.ceil(3.2), Math.floor(3.9)
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
 * JS: Math.abs(-5)
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
 * JS: Math.max(...arr), Math.min(...arr)
 *
 * El operador ... (spread) expande el array en elementos individuales
 */
function demoMaxMin() {
  const nums = [1, 5, 3, 9, 2, 7];
  // ...nums expande el array: Math.max(1, 5, 3, 9, 2, 7)
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
// MÓDULO RANDOM - DEMOSTRACIONES
// Python: import random
// JS: Math.random() (NO existe módulo "random")
// ============================================

/**
 * Lanzar Dado
 * Python: import random; random.randint(1, 6)
 * JS: enteroAleatorio(1, 6) - usa Math.random() internamente
 *
 * IMPORTANTE: JavaScript NO tiene un módulo "random" como Python.
 * Usa el objeto Math con Math.random() para generar números aleatorios.
 */
function demoDado() {
  const caras = obtenerNumero("dadoCaras") || 6;
  const resultado = lanzarDado(caras);

  const html = `
    <div class="success-box">
      <h3>🎲 Dado de ${caras} caras</h3>
      <p class="numero-grande">${resultado}</p>
      <p class="formula">
        Python: <code>import random; random.randint(1, ${caras})</code><br>
        JS: <code>Math.floor(Math.random() * ${caras}) + 1</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoRandom", html);
}

/**
 * Lanzar Moneda
 * Python: "cara" if random.random() > 0.5 else "sello"
 * JS: Math.random() > 0.5 ? "cara" : "sello"
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
 * JS: Math.floor(Math.random() * (max - min + 1)) + min
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
 * JS: Array.from({length: n}, () => enteroAleatorio(min, max))
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
 * JS: lista[Math.floor(Math.random() * lista.length)]
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
// MÓDULO DATETIME - DEMOSTRACIONES
// Python: from datetime import datetime, date, time
// JS: new Date() (constructor global)
// ============================================

/**
 * Fecha y Hora Actual
 * Python: from datetime import datetime; datetime.now()
 * JS: new Date()
 *
 * IMPORTANTE: En JavaScript, Date es un CONSTRUCTOR.
 * Siempre se usa con "new": new Date()
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
        Python: <code>from datetime import datetime; datetime.now()</code><br>
        JS: <code>new Date()</code> (constructor global)
      </p>
    </div>
  `;
  mostrarResultado("resultadoFecha", html);
}

/**
 * Formatear Fecha
 * Python: fecha.strftime("%Y-%m-%d")
 * JS: fecha.toLocaleDateString("es-CO", options)
 *
 * JavaScript usa el sistema de "locale" (configuración regional)
 * para formatear fechas según el país.
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
 * JS: Math.floor((fecha2 - fecha1) / (1000 * 60 * 60 * 24))
 *
 * En JavaScript, restar fechas devuelve MILISEGUNDOS.
 * Para obtener días, dividimos por (1000 * 60 * 60 * 24)
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
 * JS: fecha.setDate(fecha.getDate() + 7)
 *
 * IMPORTANTE: setDate() MODIFICA la fecha original.
 * Por eso creamos una copia con new Date(fecha) primero.
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
// MÓDULO STRING - DEMOSTRACIONES
// Python: str methods (texto.capitalize(), texto.lower(), etc.)
// JS: string methods (texto.charAt(), texto.toLowerCase(), etc.)
// ============================================

/**
 * Capitalizar
 * Python: texto.capitalize()
 * JS: texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
 *
 * JavaScript no tiene capitalize() directamente.
 * Construimos el resultado combinando varios métodos.
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
 * JS: texto.toLowerCase() === texto.toLowerCase().split("").reverse().join("")
 *
 * Para invertir un string en JavaScript:
 * 1. split("") - convierte a array de caracteres
 * 2. reverse() - invierte el array
 * 3. join("") - vuelve a unir el array
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
 * JS: texto.trim().split(/\s+/).filter(p => p.length > 0).length
 *
 * /\s+/ es una expresión regular (regex) que significa:
 * \s = cualquier espacio (espacio, tab, newline)
 * + = uno o más
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
// MÓDULO VALIDACIÓN - DEMOSTRACIONES
// Python: isinstance(), type(), condiciones
// JS: typeof, expresiones regulares
// ============================================

/**
 * Validar Email
 * Python: re.match(r"[^@]+@[^@]+\.[^@]+", email)
 * JS: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
 *
 * /^[^\s@]+@[^\s@]+\.[^\s@]+$/ es una expresión regular (regex):
 * ^ - inicio del string
 * [^\s@]+ - uno o más caracteres que NO son espacio ni @
 * @ - el símbolo @ obligatorio
 * \. - un punto literal
 * $ - final del string
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
 * JS: valor >= min && valor <= max
 *
 * && es el operador AND lógico en JavaScript
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
 * Python: isinstance(x, (int, float)) and x > 0
 * JS: typeof x === "number" && x > 0
 *
 * typeof devuelve el tipo de dato en JavaScript
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
        Python: <code>isinstance(x, (int, float)) and x > 0</code><br>
        JS: <code>typeof x === "number" && x > 0</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoValidacion", html);
}

// ============================================
// CÁLCULO DE FACTURA - Integración de módulos
// Python: from calculos import calcular_factura
// JS: import { calcularTotalFactura } from "./utils.js"
// ============================================

/**
 * Demo de Factura
 * Integra múltiples funciones del módulo de cálculos:
 * - calcularTotalFactura: subtotal, descuento, IVA, total
 * - formatearMoneda: formato $1.000,00
 */
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
// Python: sum(), len(), sorted(), filter(), map()
// JS: reduce(), length, sort(), filter(), map()
// ============================================

/**
 * Demo de Arrays
 * Muestra múltiples operaciones de lista:
 * - sumarLista: equivalente a sum()
 * - promedioLista: promedio de elementos
 * - filtrarPares: filter para números pares
 * - mapearCuadrado: map aplicando x**2
 * - ordenarNumeros: sorted()
 */
function demoArrays() {
  const input = obtenerTexto("arrayInput");
  if (!input) {
    mostrarResultado("resultadoArrays", "<p class='error'>Ingresa números separados por coma.</p>");
    return;
  }

  // Convertir string "1,2,3" en array [1, 2, 3]
  const lista = input.split(",")
    .map(n => parseFloat(n.trim()))
    .filter(n => !Number.isNaN(n));

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
// INICIALIZACIÓN - Código que se ejecuta al cargar
// ============================================

console.log("%cS12: Módulos y Reuso", "color: #84cc16; font-size: 20px; font-weight: bold;");
console.log("Este archivo usa ES6 Modules (import/export)");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("from utils import * (Python) → import { ... } from './utils.js' (JS)");
console.log("import math (Python) → Math object (JS, global)");
console.log("import random (Python) → Math.random() (JS)");
console.log("from datetime import datetime (Python) → new Date() (JS)");

/*
  PERMITIR ENTER PARA SUBMIT
  ---------------------------
  Cuando el usuario presiona Enter en un input,
  automáticamente hace click en el botón de la tarjeta.
*/
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
