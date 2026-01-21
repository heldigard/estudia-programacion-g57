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
 */
export const CONSTANTES = {
  PI: Math.PI,
  E: Math.E,
  SQRT2: Math.SQRT2,
  LN2: Math.LN2
};

/**
 * Raíz cuadrada
 * Python: math.sqrt(x)
 * JS: Math.sqrt(x)
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
    case "ceil": return Math.ceil(valor);
    case "floor": return Math.floor(valor);
    default: return Math.round(valor);
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
 * Máximo y mínimo
 * Python: max(lista), min(lista)
 * JS: Math.max(...lista), Math.min(...lista)
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
// ============================================

/**
 * Entero aleatorio entre min y max (inclusive)
 * Python: random.randint(min, max)
 * JS: Math.floor(Math.random() * (max - min + 1)) + min
 */
export function enteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Decimal aleatorio entre min y max
 * Python: random.uniform(min, max)
 * JS: Math.random() * (max - min) + min
 */
export function decimalAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Elegir elemento aleatorio de una lista
 * Python: random.choice(lista)
 * JS: lista[Math.floor(Math.random() * lista.length)]
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
 */
export function lanzarMoneda() {
  return Math.random() > 0.5 ? "cara" : "sello";
}

/**
 * Generar lista aleatoria
 * Python: [random.randint(min, max) for _ in range(cantidad)]
 */
export function generarListaAleatoria(cantidad, min, max) {
  return Array.from({ length: cantidad }, () => enteroAleatorio(min, max));
}

// ============================================
// MÓDULO DATETIME
// Python: from datetime import datetime, date, time
// JS: new Date()
// ============================================

/**
 * Obtener fecha y hora actual
 * Python: datetime.now()
 * JS: new Date()
 */
export function fechaHoraActual() {
  const ahora = new Date();
  return {
    fecha: ahora.toLocaleDateString("es-CO"),
    hora: ahora.toLocaleTimeString("es-CO"),
    fechaHora: ahora.toLocaleString("es-CO"),
    timestamp: Date.now()
  };
}

/**
 * Formatear fecha personalizada
 * Python: datetime.strftime("%Y-%m-%d")
 */
export function formatearFecha(fecha = new Date(), formato = "corta") {
  if (formato === "corta") {
    return fecha.toLocaleDateString("es-CO");
  } else if (formato === "larga") {
    return fecha.toLocaleDateString("es-CO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } else if (formato === "iso") {
    return fecha.toISOString();
  }
  return fecha.toString();
}

/**
 * Calcular diferencia entre fechas
 * Python: (fecha2 - fecha1).days
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
 */
export function crearFecha(ano, mes, dia) {
  return new Date(ano, mes - 1, dia);
}

/**
 * Sumar días a una fecha
 * Python: fecha + datetime.timedelta(days=dias)
 */
export function sumarDias(fecha, dias) {
  const nueva = new Date(fecha);
  nueva.setDate(nueva.getDate() + dias);
  return nueva;
}

// ============================================
// MÓDULO STRING (utilidades de texto)
// Python: string模块, str methods
// ============================================

/**
 * Capitalizar primera letra
 * Python: str.capitalize()
 */
export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

/**
 * Palíndromo - verificar si es palíndromo
 * Python: texto == texto[::-1]
 */
export function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpio === limpio.split("").reverse().join("");
}

/**
 * Contar palabras
 * Python: len(texto.split())
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
// EXPORTAR TODO COMO OBJETO (opcional)
// ============================================
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
