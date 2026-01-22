// =====================================================
// S03: Operadores y Expresiones - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - Operadores matemáticos: +, -, *, /
// - Operadores de comparación: >, <, ===
// - Operadores lógicos: &&, ||
//
// =====================================================

// -----------------------------------------------------
// RETO 1: Completa la calculadora
// -----------------------------------------------------
//
// ¡Hola! Esta función suma dos números.
// Pero falta la resta, multiplicación y división.
//
// TU MISIÓN:
// 1. Busca donde dice "TODO: agrega la resta"
// 2. Escribe el código para restar: num1 - num2
// 3. Haz lo mismo con multiplicación (*) y división (/)
// 4. ¡Abre el HTML y prueba tu calculadora!
// -----------------------------------------------------

function calcular() {
  // Obtenemos los números de los inputs
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  // La suma ya está hecha para ti
  const suma = num1 + num2;

  // TODO: agrega la resta aquí (pista: num1 - num2)
  const resta = null;  // <-- Cambia este null por el código correcto

  // TODO: agrega la multiplicación aquí (pista: usa *)
  const multi = null;  // <-- Cambia este null por el código correcto

  // TODO: agrega la división aquí (pista: usa /)
  const div = null;  // <-- Cambia este null por el código correcto

  // Mostramos los resultados
  mostrarResultado("resultado", `
    <p>Suma: ${num1} + ${num2} = <strong>${suma}</strong></p>
    <p>Resta: ${num1} - ${num2} = <strong>${resta}</strong></p>
    <p>Multi: ${num1} × ${num2} = <strong>${multi}</strong></p>
    <p>División: ${num1} ÷ ${num2} = <strong>${div}</strong></p>
  `);
}

// -----------------------------------------------------
// RETO 2: ¿Es par o impar?
// -----------------------------------------------------
//
// Un número es PAR si al dividirlo entre 2 el residuo es 0
// El operador % nos da el residuo de una división
//
// Ejemplo: 7 % 2 = 1 (porque 7 ÷ 2 = 3 y sobra 1)
//          8 % 2 = 0 (porque 8 ÷ 2 = 4 y sobra 0)
//
// TU MISIÓN:
// 1. Haz que funcione correctamente
// 2. RETO CSS: Agrega la clase "resultado-par" o "resultado-impar"
//    según corresponda (debes crearlas en styles.css)
// 3. RETO HTML: Cambia el placeholder del input
// -----------------------------------------------------

function esParOImpar() {
  const numero = Number(document.getElementById("numeroPar").value);

  // El residuo de dividir entre 2
  const residuo = numero % 2;

  // Si el residuo es 0, es PAR. Si no, es IMPAR.
  let mensaje = "";
  let claseCss = "";  // TODO: Asigna "resultado-par" o "resultado-impar"

  // TODO: Completa este if/else
  if (residuo === 0) {
    mensaje = "El número " + numero + " es PAR";
    claseCss = "resultado-par";  // RETO CSS: Debes crear esta clase
  } else {
    // TODO: Escribe el mensaje cuando es IMPAR
    mensaje = "TODO: escribe el mensaje aquí";
    claseCss = "resultado-impar";  // RETO CSS: Debes crear esta clase
  }

  mostrarResultadoConClase("resultadoPar", mensaje, claseCss);
}

// -----------------------------------------------------
// RETO 3: Comparador de números
// -----------------------------------------------------
//
// Vamos a comparar dos números usando:
// >  (mayor que)
// <  (menor que)
// >= (mayor o igual que)
// <= (menor o igual que)
// === (igual a)
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji ⚖️ al título h2
// 2. RETO CSS: Crea clases para resaltar true (verde) y false (rojo)
// 3. TODO: Agrega las comparaciones de >= y ===
// -----------------------------------------------------

function comparar() {
  const a = Number(document.getElementById("compA").value);
  const b = Number(document.getElementById("compB").value);

  let resultado = `
    <p>¿${a} es mayor que ${b}? ${a > b}</p>
    <p>¿${a} es menor que ${b}? ${a < b}</p>
  `;

  // TODO: Agrega aquí la comparación de >=
  // Pista: Copia una línea de arriba y cámbiala

  // TODO: Agrega aquí la comparación de ===
  // Pista: Usa tres signos igual ===

  mostrarResultado("resultadoComp", resultado);
}

// -----------------------------------------------------
// RETO 4: ¿Puedes conducir?
// -----------------------------------------------------
//
// En JavaScript usamos && para "Y"
// y usamos || para "O"
//
// Para conducir necesitas:
// - Ser mayor de 18 años Y tener licencia
//
// TU MISIÓN:
// 1. RETO HTML: Agrega un <p> después del h2 con las reglas
// 2. RETO CSS: Cambia el scale del checkbox a 1.5
// 3. TODO: Completa la condición con && (AND)
// -----------------------------------------------------

function puedeConducir() {
  const edad = Number(document.getElementById("edad").value);
  const tieneLicencia = document.getElementById("licencia").checked;

  // TODO: Completa esta condición
  // Debe ser true si edad >= 18 Y tieneLicencia es true
  // Pista: usa el operador &&
  let puede = false;  // <-- Cambia esto

  let mensaje = puede ? "¡Puedes conducir!" : "No puedes conducir";

  mostrarResultado("resultadoConducir", mensaje);
}

// -----------------------------------------------------
// FUNCIONES AUXILIARES (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}

// RETO CSS: Esta función agrega una clase CSS personalizada
// ¡Debes crear las clases en styles.css!
function mostrarResultadoConClase(id, contenido, clase) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.className = "result " + clase;  // Agrega la clase personalizada
}
