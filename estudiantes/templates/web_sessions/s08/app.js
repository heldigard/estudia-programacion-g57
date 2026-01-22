// =====================================================
// S08: Funciones Básicas - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - Crear funciones con function nombre() {}
// - Funciones con parámetros: function saludar(nombre)
// - Funciones con múltiples parámetros
// - Parámetros por defecto: function saludar(nombre, saludo = "Hola")
//
// Python vs JavaScript:
// Python: def saludar(nombre):        JS: function saludar(nombre) {
// Python:     return f"Hola {nombre}"  JS:     return `Hola ${nombre}`;
// Python:                                }
//
// =====================================================

// -----------------------------------------------------
// RETO 1: Función Simple (Sin Parámetros)
// -----------------------------------------------------
//
// Una función simple siempre hace lo mismo
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el texto del botón a "¡Haz click!"
// 2. RETO CSS: Crea .saludo-destacado con color verde
// 3. TODO: Completa la función para mostrar un saludo
// -----------------------------------------------------

function ejecutarSaludo() {
  // Esta función siempre muestra el mismo mensaje
  // TODO: Cambia "TODO" por tu saludo personalizado
  const mensaje = "TODO: escribe tu saludo aquí";

  mostrarResultado("resultadoSaludo", `<p class="saludo-destacado">${mensaje}</p>`);
}

// -----------------------------------------------------
// RETO 2: Función con Parámetros
// -----------------------------------------------------
//
// Una función con parámetros puede personalizar su comportamiento
//
// TU MISIÓN:
// 1. RETO HTML: Agrega maxlength="20" al input de nombre
// 2. RETO CSS: Cambia .btn.primary a color púrpura
// 3. TODO: Completa la función saludarPersonaFn() con el parámetro
// -----------------------------------------------------

function saludarPersona() {
  const nombre = document.getElementById("nombreParametro").value;

  // Llamamos a la función con el parámetro
  const resultado = saludarPersonaFn(nombre);

  mostrarResultado("resultadoPersona", resultado);
}

// Esta función recibe un parámetro llamado 'nombre'
function saludarPersonaFn(nombre) {
  // TODO: Usa el parámetro 'nombre' en el mensaje
  // Pista: return `<p>Hola, ${nombre}!</p>`
  return "TODO: usa el parámetro nombre aquí";
}

// -----------------------------------------------------
// RETO 3: Múltiples Parámetros
// -----------------------------------------------------
//
// Una función puede recibir varios parámetros separados por coma
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji 📋 al título h2
// 2. RETO CSS: Crea .perfil-card con borde azul
// 3. TODO: Completa presentarPerfilFn() con los 3 parámetros
// -----------------------------------------------------

function presentarPerfil() {
  const nombre = document.getElementById("presentarNombre").value;
  const edad = document.getElementById("presentarEdad").value;
  const ciudad = document.getElementById("presentarCiudad").value;

  // Llamamos a la función con 3 parámetros
  const resultado = presentarPerfilFn(nombre, edad, ciudad);

  mostrarResultado("resultadoPresentar", resultado);
}

// Esta función recibe 3 parámetros: nombre, edad, ciudad
function presentarPerfilFn(nombre, edad, ciudad) {
  // TODO: Usa los 3 parámetros para crear un perfil
  // Pista: return `<div class="perfil-card"><p>Me llamo ${nombre}...</p></div>`
  return "TODO: usa los 3 parámetros aquí";
}

// -----------------------------------------------------
// RETO 4: Parámetros por Defecto
// -----------------------------------------------------
//
// Los parámetros por defecto se usan si no pasas un valor
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el label a "Porcentaje de propina:"
// 2. RETO CSS: Crea .propina-resultado con fondo verde claro
// 3. TODO: Si porcentaje está vacío, usa 10 por defecto
// -----------------------------------------------------

function calcularPropina() {
  const cuenta = Number(document.getElementById("cuentaPropina").value);
  let porcentaje = document.getElementById("porcentajePropina").value;

  // TODO: Si porcentaje está vacío, usa 10
  // Pista: if (porcentaje === "") { porcentaje = 10; }

  const propina = cuenta * (porcentaje / 100);
  const total = cuenta + propina;

  mostrarResultado("resultadoPropina", `
    <div class="propina-resultado">
      <h3>💰 Propina Calculada</h3>
      <p>Propina: $${propina.toFixed(0)}</p>
      <p>Total a pagar: $${total.toFixed(0)}</p>
      <p>Porcentaje usado: ${porcentaje}%</p>
    </div>
  `);
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}
