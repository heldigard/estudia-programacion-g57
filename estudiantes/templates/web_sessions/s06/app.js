// =====================================================
// S06: Bucles (for y while) - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - for: repetir código un número determinado de veces
// - while: repetir código mientras se cumpla una condición
//
// Python vs JavaScript:
// Python: for i in range(5):      JS: for (let i = 0; i < 5; i++)
// Python: for item in lista:      JS: for (const item of lista)
// Python: while condicion:        JS: while (condicion) { }
//
// =====================================================

// -----------------------------------------------------
// RETO 1: Contar con for
// -----------------------------------------------------
//
// Vamos a contar desde 0 hasta un número que el usuario ingrese
//
// Ejemplo: si el usuario ingresa 5, mostramos: 0, 1, 2, 3, 4, 5
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el texto del label a "Ingresa un número:"
// 2. RETO CSS: Crea .numero-destacado con color naranja
// 3. TODO: Completa el bucle for
// 4. PRUEBA: Escribe diferentes números
// -----------------------------------------------------

function contar() {
  const numero = Number(document.getElementById("numero").value);

  let resultado = "Contando: ";

  // TODO: Completa el bucle for
  // Debe contar desde 0 hasta el número que ingresó el usuario
  for (let i = 0; i <= numero; i++) {
    // TODO: Agrega i al resultado
    // Pista: resultado = resultado + i + ", "
  }

  mostrarResultado("resultadoContar", resultado);
}

// -----------------------------------------------------
// RETO 2: Tabla de multiplicar
// -----------------------------------------------------
//
// Vamos a generar la tabla de multiplicar de un número
// Ejemplo: Tabla del 7 → 7×1=7, 7×2=14, 7×3=21, ... 7×10=70
//
// TU MISIÓN:
// 1. RETO HTML: Agrega max="12" al input de tabla
// 2. RETO CSS: Crea .tabla-result td con padding: 10px
// 3. TODO: Completa este bucle for
// 4. PRUEBA: Prueba con diferentes números
// -----------------------------------------------------

function tablaMultiplicar() {
  const numero = Number(document.getElementById("tabla").value);

  let resultado = `<h3>Tabla del ${numero}:</h3>`;

  // TODO: Completa este bucle for
  // Debe ir de 1 a 10
  for (let i = 1; i <= 10; i++) {
    // TODO: Multiplica numero por i
    const producto = null; // <-- Cambia null por la operación correcta

    resultado += `<p>${numero} × ${i} = ${producto}</p>`;
  }

  mostrarResultado("resultadoTabla", resultado);
}

// -----------------------------------------------------
// RETO 3: Sumar números
// -----------------------------------------------------
//
// Vamos a sumar todos los números desde 1 hasta el número que ingrese el usuario
// Ejemplo: Si ingresa 5, sumamos 1+2+3+4+5 = 15
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji ➕ al título h2
// 2. RETO CSS: Crea .resultado-suma con fondo verde
// 3. TODO: Completa el bucle para sumar los números
// 4. Pista: Usa una variable "suma" y ve sumando cada número
// -----------------------------------------------------

function sumarNumeros() {
  const numero = Number(document.getElementById("sumar").value);

  let suma = 0; // Aquí acumularemos la suma

  // TODO: Completa el bucle
  // Debe sumar todos los números desde 1 hasta "numero"
  for (let i = 1; i <= numero; i++) {
    // TODO: Suma i a suma
    // Pista: suma = suma + i  o  suma += i
  }

  mostrarResultado("resultadoSumar", `
    <h3>Suma de 1 a ${numero}</h3>
    <p class="grande">Resultado: ${suma}</p>
    <p>La suma de 1+2+3+...+${numero} = ${suma}</p>
  `);
}

// -----------------------------------------------------
// RETO 4: Lista de compras
// -----------------------------------------------------
//
// Vamos a crear una lista de compras
// El usuario agrega items y los mostramos
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el placeholder a "Ej: manzanas"
// 2. RETO CSS: En #listaCompras li, agrega margin-bottom: 12px
// 3. La función de agregar ya está hecha
// 4. TODO: Completa la función mostrarLista()
//
// Pista: for (const item of lista)
// -----------------------------------------------------

let listaCompras = []; // Lista vacía al inicio

function agregarItem() {
  const input = document.getElementById("item");
  const item = input.value.trim();

  if (item === "") {
    mostrarResultado("resultadoLista", "Escribe algo para agregar");
    return;
  }

  // Agregamos el item a la lista
  listaCompras.push(item);

  // Limpiamos el input
  input.value = "";

  // Mostramos la lista actualizada
  mostrarLista();
}

function mostrarLista() {
  if (listaCompras.length === 0) {
    mostrarResultado("resultadoLista", "La lista está vacía");
    return;
  }

  let html = "<h3>Tu lista de compras:</h3>";
  html += "<ul>";

  // TODO: Completa este bucle for
  // Debe recorrer cada item de listaCompras y agregarlo a html
  // Pista: for (const item of listaCompras) {

  // Dentro del bucle, agrega: html += "<li>" + item + "</li>";


  html += "</ul>";
  html += `<p>Total: ${listaCompras.length} items</p>`;

  mostrarResultado("resultadoLista", html);
}

function limpiarLista() {
  listaCompras = []; // Lista vacía de nuevo
  mostrarResultado("resultadoLista", "Lista vaciada");
}

// -----------------------------------------------------
// RETO 5: Adivina el número (Juego con while)
// -----------------------------------------------------
//
// Vamos a jugar un juego. La computadora elige un número del 1 al 10
// y tú tienes que adivinarlo.
//
// TU MISIÓN:
// 1. RETO HTML: Agrega un <p> con las instrucciones del juego
// 2. RETO CSS: Crea .acierto y .error con diferentes colores
// 3. Ya está programado, solo juega y entiende cómo funciona el while
// -----------------------------------------------------

let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número aleatorio 1-10

function adivinar() {
  const intento = Number(document.getElementById("intento").value);

  if (intento === numeroSecreto) {
    mostrarResultado("resultadoAdivina", `
      <h3>¡Felicidades! 🎉</h3>
      <p>Adivinaste el número: ${numeroSecreto}</p>
      <button onclick="reiniciar()">Jugar de nuevo</button>
    `);
  } else if (intento < numeroSecreto) {
    mostrarResultado("resultadoAdivina", `
      <h3>Muy bajo ⬆️</h3>
      <p>El número es MAYOR que ${intento}</p>
      <p>Intenta de nuevo</p>
    `);
  } else {
    mostrarResultado("resultadoAdivina", `
      <h3>Muy alto ⬇️</h3>
      <p>El número es MENOR que ${intento}</p>
      <p>Intenta de nuevo</p>
    `);
  }
}

function reiniciar() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  document.getElementById("intento").value = "";
  mostrarResultado("resultadoAdivina", "Nuevo juego empezado. ¡Adivina el número!");
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}
