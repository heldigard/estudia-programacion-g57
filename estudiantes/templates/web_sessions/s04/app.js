// =====================================================
// S04: Condicionales (if/else) - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - if: si se cumple una condición
// - else: si NO se cumple la condición
// - else if: otra condición para probar
//
// Python vs JavaScript:
// Python: if edad >= 18:        JS: if (edad >= 18) {
// Python:     print("mayor")    JS:     console.log("mayor");
// Python: elif edad >= 13:      JS: } else if (edad >= 13) {
// Python:     print("teen")     JS:     console.log("teen");
// Python: else:                 JS: } else {
// Python:     print("nino")     JS:     console.log("nino");
//                                  }
//
// =====================================================

// -----------------------------------------------------
// RETO 1: ¿Eres mayor de edad?
// -----------------------------------------------------
//
// Vamos a verificar si una persona es mayor de edad (18 o más)
//
// TU MISIÓN:
// 1. RETO HTML: Agrega max="120" al input de edad
// 2. RETO CSS: Crea las clases .edad-mayor y .edad-menor
// 3. TODO: Agrega else if para adolescentes (13-17 años)
// 4. TODO: Agrega else para niños (menos de 13)
// -----------------------------------------------------

function verificarEdad() {
  const edad = Number(document.getElementById("edad").value);

  let mensaje = "";
  let claseCss = "";  // RETO CSS: Asigna "edad-mayor" o "edad-menor"

  // Esta parte ya está hecha para ti
  if (edad >= 18) {
    mensaje = "✅ Eres MAYOR de edad. Puedes votar y conducir.";
    claseCss = "edad-mayor";  // RETO CSS: Debes crear esta clase
  }
  // TODO: Agrega aquí el else if para adolescentes (13-17 años)
  // Pista: else if (edad >= 13) {

  // TODO: Agrega aquí el else para niños (menos de 13)
  // Pista: } else {

  mostrarResultadoConClase("resultadoEdad", mensaje, claseCss);
}

// -----------------------------------------------------
// RETO 2: Clasificador de notas
// -----------------------------------------------------
//
// Vamos a clasificar una nota en letras: A, B, C, D, o F
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji 📝 al título h2
// 2. RETO CSS: Crea .nota-a, .nota-b, .nota-c, .nota-d, .nota-f
// 3. TODO: Completa las condiciones que faltan
//
// Tabla de notas:
// 90-100 = A (Excelente)
// 80-89  = B (Muy bien)
// 70-79  = C (Bien)
// 60-69  = D (Suficiente)
// 0-59   = F (Reprobado)
// -----------------------------------------------------

function clasificarNota() {
  const nota = Number(document.getElementById("nota").value);

  let letra = "";
  let mensaje = "";
  let claseCss = "";  // RETO CSS: Asigna según la letra

  // Ya está hecho: nota de A
  if (nota >= 90) {
    letra = "A";
    mensaje = "¡Excelente! ¡Felicidades!";
    claseCss = "nota-a";  // RETO CSS: Debes crear esta clase
  }
  // TODO: Agrega else if para nota B (80 o más)
  // Pista: else if (nota >= 80) {

  // TODO: Agrega else if para nota C (70 o más)

  // TODO: Agrega else if para nota D (60 o más)

  // TODO: Agrega else para nota F (menos de 60)

  mostrarResultado("resultadoNota", `
    <h2>Nota: ${letra}</h2>
    <p>${mensaje}</p>
    <p>Tu nota: ${nota}/100</p>
  `);
}

// -----------------------------------------------------
// RETO 3: ¿Es fin de semana?
// -----------------------------------------------------
//
// Vamos a verificar si un día es fin de semana o no
//
// Sábado y Domingo = fin de semana
// Lunes a Viernes = día de semana
//
// TU MISIÓN:
// 1. RETO HTML: Agrega un <p> explicando qué días son fin de semana
// 2. RETO CSS: Agrega text-transform: lowercase al input
// 3. TODO: Completa la condición para verificar si es fin de semana
// 4. Usa el operador || (OR) para combinar dos condiciones
//
// Pista: dia === "sabado" || dia === "domingo"
// -----------------------------------------------------

function esFinDeSemana() {
  const dia = document.getElementById("dia").value.toLowerCase(); // convertir a minúsculas

  let mensaje = "";

  // TODO: Completa esta condición
  // Debe ser true si es "sabado" O "domingo"
  if (false) {  // <-- Cambia false por la condición correcta
    mensaje = "¡Es fin de semana! 🎉";
  } else {
    mensaje = "Es día de semana 📚";
  }

  mostrarResultado("resultadoFinSemana", mensaje);
}

// -----------------------------------------------------
// RETO 4: Cajero automático
// -----------------------------------------------------
//
// Simulamos un cajero con saldo inicial de $100,000
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji 💰 al saldo
// 2. RETO CSS: Personaliza .saldo-grande con font-size más grande
// 3. El retiro ya está hecho, pero falta el depósito
// 4. TODO: Completa la función depositar()
// -----------------------------------------------------

let saldo = 100000; // Saldo inicial

function retirar() {
  const monto = Number(document.getElementById("montoRetiro").value);

  // Verificamos si hay suficiente saldo
  if (monto > saldo) {
    mostrarResultado("resultadoCajero", "❌ No tienes suficiente saldo");
  } else {
    saldo = saldo - monto; // Restamos del saldo
    actualizarSaldo();
    mostrarResultado("resultadoCajero", `✅ Retiraste $${monto}. Nuevo saldo: $${saldo}`);
  }
}

function depositar() {
  const monto = Number(document.getElementById("montoDeposito").value);

  // TODO: Suma el monto al saldo
  // Pista: saldo += monto

  // TODO: Llama a actualizarSaldo()

  // TODO: Muestra un mensaje de éxito
  mostrarResultado("resultadoCajero", "TODO: escribe el mensaje aquí");
}

function consultarSaldo() {
  mostrarResultado("resultadoCajero", `Tu saldo actual es: $${saldo}`);
}

function actualizarSaldo() {
  document.getElementById("saldoDisplay").textContent = "💰 $" + saldo;
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
