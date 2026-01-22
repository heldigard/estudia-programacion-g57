// =====================================================
// S07: Listas (Arrays) - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - Crear listas (arrays en JavaScript)
// - Agregar elementos con push()
// - Obtener la longitud con .length
// - Buscar elementos con includes()
// - Recorrer listas con for
//
// Python vs JavaScript:
// Python: lista = [1, 2, 3]       JS: const lista = [1, 2, 3]
// Python: lista.append(x)          JS: lista.push(x)
// Python: len(lista)               JS: lista.length
// Python: x in lista               JS: lista.includes(x)
// Python: for x in lista:          JS: for (const x of lista)
//
// =====================================================

// Lista inicial de frutas
let frutas = ["🍎 manzana", "🍌 banana", "🍊 naranja", "🍇 uva"];

// -----------------------------------------------------
// RETO 1: Mostrar Lista de Frutas
// -----------------------------------------------------
//
// Vamos a mostrar todas las frutas de la lista
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el título h2 agregando tu fruta favorita
// 2. RETO CSS: Crea .fruta-item con padding y fondo verde claro
// 3. TODO: Completa el bucle for para mostrar cada fruta
// -----------------------------------------------------

function mostrarFrutas() {
  let html = "<h3>Tus frutas:</h3>";

  // TODO: Completa este bucle for
  // Debe recorrer cada fruta de la lista "frutas"
  for (let i = 0; i < frutas.length; i++) {
    // TODO: Agrega cada fruta al html
    // Pista: html += "<p class='fruta-item'>" + frutas[i] + "</p>";
  }

  mostrarResultado("resultadoFrutas", html);
}

// -----------------------------------------------------
// RETO 2: Agregar Elementos
// -----------------------------------------------------
//
// Vamos a agregar una nueva fruta a la lista
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el placeholder a "Ej: manga"
// 2. RETO CSS: Cambia el color del botón success a #ec4899
// 3. TODO: Completa la función para agregar la fruta
// -----------------------------------------------------

function agregarElemento() {
  const input = document.getElementById("nuevaFruta");
  const nuevaFruta = input.value.trim();

  if (nuevaFruta === "") {
    mostrarResultado("resultadoAgregar", "<p>Escribe una fruta para agregar</p>");
    return;
  }

  // TODO: Agrega la nueva fruta a la lista
  // Pista: frutas.push(nuevaFruta)

  // Limpiamos el input
  input.value = "";

  // TODO: Muestra un mensaje de éxito
  mostrarResultado("resultadoAgregar", "TODO: escribe el mensaje aquí");
}

function verLista() {
  let html = "<h3>Lista actual:</h3><ul>";

  // Recorremos la lista con for...of (como Python: for fruta in frutas)
  for (const fruta of frutas) {
    html += `<li>${fruta}</li>`;
  }

  html += "</ul>";
  html += `<p>Total: ${frutas.length} frutas</p>`;

  mostrarResultado("resultadoAgregar", html);
}

// -----------------------------------------------------
// RETO 3: ¿Cuántos Elementos?
// -----------------------------------------------------
//
// Vamos a contar cuántos elementos tiene la lista
//
// TU MISIÓN:
// 1. RETO HTML: Agrega un <p> después del h2 explicando .length
// 2. RETO CSS: Crea .numero-grande con font-size: 2.5rem
// 3. TODO: Usa frutas.length para obtener la cantidad
// -----------------------------------------------------

function contarElementos() {
  // TODO: Obtiene la cantidad de elementos de la lista
  // Pista: const cantidad = frutas.length
  const cantidad = 0;  // <-- Cambia esto

  mostrarResultado("resultadoContar", `
    <h3>Cantidad de frutas</h3>
    <p class="numero-grande">${cantidad}</p>
    <p>La lista tiene ${cantidad} elementos</p>
  `);
}

// -----------------------------------------------------
// RETO 4: ¿Está en la Lista?
// -----------------------------------------------------
//
// Vamos a verificar si una fruta está en la lista
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji 🔍 al botón
// 2. RETO CSS: Crea .encontrado (verde) y .no-encontrado (rojo)
// 3. TODO: Usa includes() para verificar si la fruta existe
// -----------------------------------------------------

function buscarElemento() {
  const input = document.getElementById("buscarFruta");
  const buscar = input.value.trim().toLowerCase();

  if (buscar === "") {
    mostrarResultado("resultadoBuscar", "<p>Escribe una fruta para buscar</p>");
    return;
  }

  // TODO: Verifica si la fruta está en la lista
  // Pista: Convertir frutas a minúsculas para comparar
  let encontrada = false;  // <-- Cambia esto usando includes()

  let mensaje = "";
  let clase = encontrada ? "encontrado" : "no-encontrado";

  if (encontrada) {
    mensaje = `¡Sí! "${buscar}" está en la lista 🎉`;
  } else {
    mensaje = `No, "${buscar}" NO está en la lista`;
  }

  mostrarResultadoConClase("resultadoBuscar", mensaje, clase);
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
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
