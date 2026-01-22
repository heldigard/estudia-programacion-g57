// =====================================================
// S12: Módulos - UTILS.JS
// =====================================================
//
// Este archivo es un MÓDULO que exporta funciones.
//
// En Python, creas utils.py y las funciones están disponibles.
// En JavaScript, DEBES usar "export" antes de cada función.
//
// Python vs JavaScript:
// Python: def sumar(a, b): return a + b    JS: export function sumar(a, b) { return a + b; }
//
// Para importar en app.js:
// import { sumar } from "./utils.js"
//
// =====================================================

// -----------------------------------------------------
// FUNCIÓN 1: sumar
// -----------------------------------------------------
//
// Esta función suma dos números
//
// RETO: Los estudiantes deben importar esta función en app.js
// -----------------------------------------------------

export function sumar(a, b) {
  return a + b;
}

// -----------------------------------------------------
// FUNCIÓN 2: lanzarDado
// -----------------------------------------------------
//
// Simula el lanzamiento de un dado
// Math.random() genera un número entre 0 y 1
// Math.floor() redondea hacia abajo
//
// RETO: Los estudiantes deben usar esta función en app.js
// -----------------------------------------------------

export function lanzarDado(caras = 6) {
  return Math.floor(Math.random() * caras) + 1;
}

// -----------------------------------------------------
// FUNCIÓN 3: saludar
// -----------------------------------------------------
//
// TODO: Los estudiantes deben completar esta función
//
// RETO: Crea una función que devuelva un saludo personalizado
// Pista: return `¡Hola, ${nombre}!`;
// -----------------------------------------------------

export function saludar(nombre) {
  // TODO: Devuelve un saludo personalizado
  // Pista: return `¡Hola, ${nombre}!`;
  return "TODO: Completa esta función";
}
