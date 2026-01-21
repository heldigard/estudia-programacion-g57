/*
  =====================================================
  S12: Módulos y Reuso - UTILS.JS
  =====================================================

  Este archivo (utils.js) es un MÓDULO PERSONALIZADO.
  Demuestra cómo crear y exportar funciones reutilizables en JavaScript.

  PYTHON MÓDULOS ↔ JAVASCRIPT ES6 MODULES
  -----------------------------------------

  IMPORTAR TODO EL MÓDULO:
  ------------------------
  Python:
    from utils import *

  JavaScript:
    import * as utils from "./utils.js"

  IMPORTAR FUNCIONES ESPECÍFICAS:
  ----------------------------------
  Python:
    from math import sqrt, pi
    from calculos import sumar

  JavaScript:
    import { sqrt, pi } from "./utils.js"
    import { sumar } from "./calculos.js"

  CREAR UN MÓDULO:
  -----------------
  Python - Archivo: utils.py
    def saludar(nombre):
        return f"Hola, {nombre}"

  JavaScript - Archivo: utils.js
    export function saludar(nombre) {
      return `Hola, ${nombre}`;
    }

  IMPORTANTE: En JavaScript, solo puedes usar export/import
  en archivos JS cuando el script tiene type="module".

  MATH - MÓDULOS INTEGRADOS:
  ------------------------------
  Python requiere importar:
    import math
    print(math.pi)

  JavaScript tiene Math como objeto global:
    console.log(Math.PI);  // No requiere import!

  RANDOM:
  --------
  Python:
    import random
    random.randint(1, 10)

  JavaScript:
    // No requiere import, usa Math.random()
    Math.floor(Math.random() * 10) + 1

  DATETIME:
   ---------
  Python:
    from datetime import datetime
    ahora = datetime.now()

  JavaScript:
    // No requiere import, usa Date
    const ahora = new Date();
*/

// S12: Módulos y Reuso - utils.js
// Archivo de utilidades exportables (como en Python)

// ============================================
// MÓDULO MATEMÁTICO (math)
// Python: import math
// JS: Los objetos Math están disponibles globalmente
// ============================================

/**
 * Constantes Matemáticas
 * Python: math.pi, math.e
 * JS: Math.PI, Math.E
 *
 * NOTA: En JavaScript, Math es un objeto global que siempre está disponible.
 * No necesitas importarlo como en Python.
 */
export const CONSTANTES = {
  PI: Math.PI,      // 3.141592653589793
  E: Math.E,        // 2.718281828459045
  SQRT2: Math.SQRT2, // 1.4142135623730951
  LN2: Math.LN2     // 0.6931471805599453
};

/**
 * Raíz cuadrada
 * Python: math.sqrt(x)
 * JS: Math.sqrt(x)
 *
 * IMPORTANTE: Math siempre está disponible en JavaScript,
 * no necesitas importarlo como en Python.
 */
export function raizCuadrada(x) {
  if (x < 0) {
    return { error: true, mensaje: "Error: No existe raíz de negativo" };
  }
  return { error: false, resultado: Math.sqrt(x) };
}

/**
 * Potencia
 * Python: math.pow(base, exp)
 * JS: Math.pow(base, exp)
 */
export function potencia(base, exp) {
  return Math.pow(base, exp);
}

/**
 * Redondeo
 * Python: round(x), math.ceil(x), math.floor(x)
 * JS: Math.round(x), Math.ceil(x), Math.floor(x)
 */
export function redondear(valor, metodo = "round") {
  switch (metodo) {
    case "ceil": return Math.ceil(valor);   // Siempre hacia arriba
    case "floor": return Math.floor(valor);  // Siempre hacia abajo
    default: return Math.round(valor);    // Al más cercano
  }
}

/**
 * Valor absoluto
 * Python: abs(x)
 * JS: Math.abs(x)
 */
export function valorAbsoluto(x) {
  return Math.abs(x);
}

/**
 * Máximo y mínimo con spread operator
 * Python: max(lista), min(lista)
 * JS: Math.max(...lista), Math.min(...lista)
 *
 * El operador ... (spread) expande el array en elementos individuales.
 * Math.max(...arr) es como Math.max(arr[0], arr[1], arr[2], ...)
 */
export function maximo(...numeros) {
  return Math.max(...numeros);
}

export function minimo(...numeros) {
  return Math.min(...numeros);
}

// ============================================
// MÓDULO RANDOM
// Python: import random
// JS: Math.random()
//
// NOTA: JavaScript no tiene un módulo "random" como Python.
// En su lugar, usa el objeto Math para aleatorios.
// ============================================

/**
 * Entero aleatorio entre min y max (inclusive)
 * Python: random.randint(min, max)
 * JS: Math.floor(Math.random() * (max - min + 1)) + min
 *
 * EXPLICACIÓN:
 * 1. Math.random() genera un decimal entre 0 y 1
 * 2. Multiplicamos por (max - min + 1) para obtener el rango
 * 3. Math.floor() nos da el entero más cercano
 * 4. Sumamos min para empezar en el valor correcto
 */
export function enteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Decimal aleatorio entre min y max
 * Python: random.uniform(min, max)
 */
export function decimalAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Elegir elemento aleatorio de una lista
 * Python: random.choice(lista)
 * JS: lista[Math.floor(Math.random() * lista.length)]
 *
 * EXPLICACIÓN:
 * 1. Math.random() * lista.length → decimal entre 0 y length-1
 * 2. Math.floor() → convierte a entero (0, 1, 2, ...)
 * 3. lista[indice] → accede al elemento
 */
export function elegir(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

/**
 * Dado - simular lanzamiento
 * Python: random.randint(1, 6)
 * JS: enteroAleatorio(1, 6)
 */
export function lanzarDado(caras = 6) {
  return enteroAleatorio(1, caras);
}

/**
 * Moneda - simular lanzamiento
 * Python: "cara" if random.random() > 0.5 else "sello"
 * JS: Math.random() > 0.5 ? "cara" : "sello"
 */
export function lanzarMoneda() {
  return Math.random() > 0.5 ? "cara" : "sello";
}

/**
 * Generar lista aleatoria
 * Python: [random.randint(min, max) for _ in range(cantidad)]
 * JS: Array.from({length: cantidad}, () => enteroAleatorio(min, max))
 *
 * EXPLICACIÓN:
 * Array.from() crea un array de longitud específica.
 * El segundo parámetro es una función que se ejecuta para cada elemento.
 */
export function generarListaAleatoria(cantidad, min, max) {
  return Array.from({ length: cantidad }, () => enteroAleatorio(min, max));
}

// ============================================
// MÓDULO DATETIME
// Python: from datetime import datetime, date, time
// JS: new Date()
//
// NOTA: En JavaScript, Date es un constructor, no una clase.
// Se usa con "new": new Date()
// ============================================

/**
 * Obtener fecha y hora actual
 * Python: datetime.now()
 * JS: new Date()
 *
 * IMPORTANTE: Date devuelve un OBJETO con múltiples propiedades.
 * Puedes acceder a año, mes, día, hora, minuto, segundo por separado.
 */
export function fechaHoraActual() {
  const ahora = new Date();
  return {
    fecha: ahora.toLocaleDateString("es-CO"),      // "15/01/2026"
    hora: ahora.toLocaleTimeString("es-CO"),       // "3:45 PM"
    fechaHora: ahora.toLocaleString("es-CO"),     // "15/01/2026, 3:45:32 PM"
    timestamp: Date.now()                        // Milisegundos desde 1970
  };
}

/**
 * Formatear fecha personalizada
 * Python: datetime.strftime("%Y-%m-%d")
 * JS: fecha.toLocaleDateString()
 *
 *toLocaleDateString() permite diferentes formatos según la región ("es-CO").
 * Puedes especificar opciones para personalizar el formato.
 */
export function formatearFecha(fecha = new Date(), formato = "corta") {
  if (formato === "corta") {
    return fecha.toLocaleDateString("es-CO");
  } else if (formato === "larga") {
    return fecha.toLocaleDateString("es-CO", {
      weekday: "long",    // "lunes"
      year: "numeric",   // "2026"
      month: "long",     // "enero"
      day: "numeric"     // "15"
    });
  } else if (formato === "iso") {
    return fecha.toISOString();  // "2026-01-15T15:45:32.000Z"
  }
  return fecha.toString();
}

/**
 * Calcular diferencia entre fechas
 * Python: (fecha2 - fecha1).days
 * JS: (fecha2 - fecha1) / (1000 * 60 * 60 * 24)
 *
 * EXPLICACIÓN:
 * - Las fechas en JavaScript se restan como milisegundos
 * - Para días: dividir por (1000 * 60 * 60 * 24)
 * - Para horas: dividir por (1000 * 60 * 60)
 * - Para minutos: dividir por (1000 * 60)
 */
export function diferenciaFechas(fecha1, fecha2) {
  const diffMs = fecha2 - fecha1;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHoras = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutos = Math.floor(diffMs / (1000 * 60));
  return { dias: diffDias, horas: diffHoras, minutos: diffMinutos, milisegundos: diffMs };
}

/**
 * Crear fecha desde componentes
 * Python: datetime(ano, mes, dia)
 * JS: new Date(ano, mes - 1, dia)
 *
 * IMPORTANTE: En JavaScript, los meses van de 0 a 11 (enero es 0).
 * Por eso restamos 1 al mes de Python.
 */
export function crearFecha(ano, mes, dia) {
  return new Date(ano, mes - 1, dia);
}

/**
 * Sumar días a una fecha
 * Python: fecha + datetime.timedelta(days=dias)
 * JS: fecha.setDate(fecha.getDate() + dias)
 *
 * IMPORTANTE: setDate() modifica la fecha original y la devuelve.
 * Es un método "mutator" - modifica el objeto.
 */
export function sumarDias(fecha, dias) {
  const nueva = new Date(fecha);
  nueva.setDate(nueva.getDate() + dias);
  return nueva;
}

// ============================================
// MÓDULO STRING (utilidades de texto)
// Python: string module, str methods
// ============================================

/**
 * Capitalizar primera letra
 * Python: str.capitalize()
 * JS: texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
 *
 * EXPLICACIÓN:
 * - charAt(0) obtiene el primer carácter
 * - toUpperCase() convierte a mayúscula
 * - slice(1) obtiene todo desde el segundo carácter
 * - toLowerCase() convierte el resto a minúsculas
 */
export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

/**
 * Palíndromo - verificar si es palíndromo
 * Python: texto == texto[::-1]
 * JS: texto.toLowerCase() === texto.toLowerCase().split("").reverse().join("")
 *
 * EXPLICACIÓN:
 * - toLowerCase() - convertimos a minúsculas para comparación insensible
 * - replace() - eliminamos caracteres no alfanuméricos
 * - split("") - convertimos string en array de caracteres
 * - reverse() - invierte el orden del array
 * - join("") - volvemos a unir el array invertido
 */
export function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpio === limpio.split("").reverse().join("");
}

/**
 * Contar palabras
 * Python: len(texto.split())
 * JS: texto.trim().split(/\s+/).filter(p => p.length > 0).length
 *
 * EXPLICACIÓN:
 * - trim() - elimina espacios al inicio y final
 * - split(/\s+/) - divide por uno o más espacios (regex)
 * - filter(p => p.length > 0) - elimina strings vacíos
 * - length - cuenta los elementos restantes
 */
export function contarPalabras(texto) {
  return texto.trim().split(/\s+/).filter(p => p.length > 0).length;
}

/**
 * Contar vocales
 */
export function contarVocales(texto) {
  const vocales = texto.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
  return vocales ? vocales.length : 0;
}

// ============================================
// MÓDULO VALIDACIÓN
// ============================================

/**
 * Validar email (básico)
 * Python: re.match(r"[^@]+@[^@]+\\.[^@]+", email)
 * JS: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
 *
 * EXPLICACIÓN:
 * - ^ - inicio del string
 * - [^\s@]+ - uno o más caracteres que NO son espacios
 * - @ - el símbolo @ obligatorio
 * - \.[^\s@]+ - punto seguido de uno o más caracteres que NO son espacios
 * - $ - final del string
 */
export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validar que sea número positivo
 */
export function esPositivo(numero) {
  return typeof numero === "number" && numero > 0;
}

/**
 * Validar rango
 * Python: valor >= minimo and valor <= maximo
 * JS: valor >= minimo && valor <= maximo
 */
export function enRango(valor, minimo, maximo) {
  return valor >= minimo && valor <= maximo;
}

// ============================================
// MÓDULO CÁLCULOS DE NEGOCIO
// ============================================

/**
 * Calcular subtotal con descuento
 */
export function calcularSubtotal(cantidad, precioUnitario) {
  return cantidad * precioUnitario;
}

/**
 * Calcular descuento
 */
export function calcularDescuento(subtotal, porcentajeDescuento) {
  return subtotal * (porcentajeDescuento / 100);
}

/**
 * Calcular IVA
 */
export function calcularIVA(base, tasa = 19) {
  return base * (tasa / 100);
}

/**
 * Calcular total de factura
 */
export function calcularTotalFactura(cantidad, precio, descuentoPct = 0, tasaIva = 19) {
  const subtotal = calcularSubtotal(cantidad, precio);
  const descuento = calcularDescuento(subtotal, descuentoPct);
  const baseGravable = subtotal - descuento;
  const iva = calcularIVA(baseGravable, tasaIva);
  return {
    subtotal,
    descuento,
    baseGravable,
    iva,
    total: baseGravable + iva
  };
}

/**
 * Conversión de moneda (formato)
 * Python: f"${valor:,.0f}"
 * JS: new Intl.NumberFormat().format(valor)
 *
 * EXPLICACIÓN:
 * Intl.NumberFormat es un objeto integrado de JavaScript
 * que formatea números según la configuración regional.
 * "es-CO" usa el formato de Colombia ($1.000,00).
 */
export function formatearMoneda(valor, moneda = "COP") {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: moneda
  }).format(valor);
}

// ============================================
// UTILIDADES DE ARRAY (lista)
// Python: list comprehensions, map, filter
// ============================================

/**
 * Suma de array
 * Python: sum(lista)
 * JS: lista.reduce((a, b) => a + b, 0)
 *
 * EXPLICACIÓN:
 * reduce() aplica una función a cada elemento,
 * acumulando el resultado. El segundo parámetro
 * (0) es el valor inicial del acumulador.
 */
export function sumarLista(lista) {
  return lista.reduce((a, b) => a + b, 0);
}

/**
 * Promedio de array
 * Python: sum(lista) / len(lista)
 */
export function promedioLista(lista) {
  if (lista.length === 0) return 0;
  return sumarLista(lista) / lista.length;
}

/**
 * Filtrar pares
 * Python: [x for x in lista if x % 2 == 0]
 */
export function filtrarPares(lista) {
  return lista.filter(x => x % 2 === 0);
}

/**
 * Mapear al cuadrado
 * Python: [x ** 2 for x in lista]
 */
export function mapearCuadrado(lista) {
  return lista.map(x => x ** 2);
}

/**
 * Ordenar numéricamente
 * Python: sorted(lista)
 */
export function ordenarNumeros(lista, ascendente = true) {
  return [...lista].sort((a, b) => ascendente ? a - b : b - a);
}

/**
 * Buscar máximo
 * Python: max(lista)
 */
export function buscarMaximo(lista) {
  return Math.max(...lista);
}

/**
 * Buscar mínimo
 * Python: min(lista)
 */
export function buscarMinimo(lista) {
  return Math.min(...lista);
}

// ============================================
// EXPORTAR TODO COMO OBJETO (default export)
// ============================================
/*
  EXPLICACIÓN DE export default:
  -------------------------
  export default permite exportar un valor por defecto
  cuando se importa este módulo.

  Sin export default:
    import { funcion1, funcion2 } from "./utils.js"

  Con export default:
    import utils from "./utils.js"
    // utils contiene TODAS las exportaciones nombradas
*/

export default {
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
  calcularSubtotal,
  calcularDescuento,
  calcularIVA,
  calcularTotalFactura,
  formatearMoneda,
  // Array
  sumarLista,
  promedioLista,
  filtrarPares,
  mapearCuadrado,
  ordenarNumeros,
  buscarMaximo,
  buscarMinimo
};
