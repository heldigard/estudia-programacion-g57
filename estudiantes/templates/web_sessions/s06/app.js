// S06: Bucles (for y while)
// Equivalente JavaScript de las prácticas de Python

// ============================================
// ESTADO GLOBAL
// ============================================
const listaCompras = [];
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

// ============================================
// UTILIDADES
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

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Contador Simple con For
 * Python: for i in range(final):
 * JS: for (let i = 0; i < final; i++)
 */
function ejecutarFor() {
  const final = obtenerNumero("contadorFinal");

  if (!final || final < 1) {
    mostrarResultado("resultadoFor", "<p class='error'>Ingresa un número válido (mayor a 0).</p>");
    return;
  }

  // Python: for i in range(final + 1):
  // JS: for (let i = 0; i <= final; i++)
  let resultado = "Números generados: ";
  for (let i = 0; i <= final; i++) {
    resultado += i + (i < final ? ", " : "");
  }

  const html = `
    <div class="success-box">
      <h3>🔢 Contando de 0 a ${final}</h3>
      <p class="numero-grande">${final + 1} números</p>
      <p>${resultado}</p>
      <p class="formula">
        Python: <code>for i in range(${final + 1}): print(i)</code><br>
        JS: <code>for (let i = 0; i <= ${final}; i++) { console.log(i); }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoFor", html);
}

/**
 * Tabla de Multiplicar
 * Python: for con range anidado
 * JS: for anidado
 */
function generarTabla() {
  const numero = obtenerNumero("tablaNumero");

  if (!numero || numero < 1 || numero > 12) {
    mostrarResultado("resultadoTabla", "<p class='error'>Ingresa un número entre 1 y 12.</p>");
    return;
  }

  // Python: for i in range(1, 11):
  // JS: for (let i = 1; i <= 10; i++)
  let tabla = "<div class='tabla-container'><table>";
  tabla += "<tr><th>×</th><th>" + numero + "</th></tr>";

  for (let i = 1; i <= 10; i++) {
    tabla += `<tr><td>${numero}</td><td>${i}</td><td><strong>${numero * i}</strong></td></tr>`;
  }
  tabla += "</table></div>";

  const html = `
    <div class="success-box">
      <h3>✖️ Tabla del ${numero}</h3>
      ${tabla}
    </div>
  `;

  mostrarResultado("resultadoTabla", html);
}

/**
 * Suma de Rango
 * Python: for con sum() o acumulador
 * JS: for con acumulador
 */
function sumarRango() {
  const inicio = obtenerNumero("sumaInicio");
  const fin = obtenerNumero("sumaFin");

  if (!inicio || !fin || inicio > fin) {
    mostrarResultado("resultadoSuma", "<p class='error'>Ingresa números válidos (inicio debe ser menor o igual al fin).</p>");
    return;
  }

  // Python: suma = 0; for i in range(inicio, fin + 1): suma += i
  // JS: let suma = 0; for (let i = inicio; i <= fin; i++) { suma += i; }
  let suma = 0;
  let secuencia = [];

  for (let i = inicio; i <= fin; i++) {
    suma += i;
    secuencia.push(i);
  }

  const html = `
    <div class="success-box">
      <h3>➕ Suma de ${inicio} a ${fin}</h3>
      <p class="numero-grande">${suma}</p>
      <p>Secuencia: ${secuencia.join(" + ")}</p>
      <p>Cantidad de números: ${fin - inicio + 1}</p>
      <p class="formula">
        Promedio: ${(suma / (fin - inicio + 1)).toFixed(2)}
      </p>
    </div>
  `;

  mostrarResultado("resultadoSuma", html);
}

/**
 * Lista de Compras
 * Python: for item in lista:
 * JS: for (const item of lista)
 */
function agregarItem() {
  const input = document.getElementById("nuevoItem");
  const item = input.value.trim();

  if (!item) {
    alert("Por favor, ingresa un producto.");
    return;
  }

  // Python: lista.append(item)
  // JS: lista.push(item)
  listaCompras.push(item);
  input.value = "";

  renderizarLista();
}

function renderizarLista() {
  const ul = document.getElementById("listaCompras");
  const resultadoLista = document.getElementById("resultadoLista");
  const resumenLista = document.getElementById("resumenLista");

  ul.innerHTML = "";

  // Python: for item in lista:
  // JS: for (const item of lista)
  for (const item of listaCompras) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  }

  if (listaCompras.length > 0) {
    resultadoLista.classList.remove("hidden");
    resumenLista.classList.remove("hidden");

    resumenLista.innerHTML = `
      <div class="info-box">
        <h3>📊 Resumen</h3>
        <p><strong>Total de items:</strong> ${listaCompras.length}</p>
        <p><strong>Primer item:</strong> ${listaCompras[0]}</p>
        <p><strong>Último item:</strong> ${listaCompras[listaCompras.length - 1]}</p>
      </div>
    `;
  } else {
    resultadoLista.classList.add("hidden");
    resumenLista.classList.add("hidden");
  }
}

function limpiarLista() {
  // Python: lista.clear() o lista = []
  // JS: lista.length = 0
  listaCompras.length = 0;
  renderizarLista();
}

/**
 * Adivina el Número (While)
 * Python: while not adivino:
 * JS: while (!adivino)
 */
function adivinar() {
  const intento = obtenerNumero("advinanza");

  if (!intento || intento < 1 || intento > 10) {
    mostrarResultado("resultadoAdivina", "<p class='error'>Ingresa un número entre 1 y 10.</p>");
    return;
  }

  intentos++;

  // Python: while intento != numero_secreto:
  // JS: while (intento !== numeroSecreto)
  let mensaje;

  if (intento === numeroSecreto) {
    mensaje = `
      <div class="success-box">
        <h3>🎉 ¡Felicidades! Adivinaste el número ${numeroSecreto}</h3>
        <p>Intentos: ${intentos}</p>
        <button class="btn success" onclick="reiniciarJuego()">Jugar de Nuevo</button>
      </div>
    `;
  } else if (intento < numeroSecreto) {
    mensaje = `
      <div class="info-box">
        <h3>📈 Muy bajo</h3>
        <p>Intento ${intentos}: ${intento} (¡El número es mayor!)</p>
      </div>
    `;
  } else {
    mensaje = `
      <div class="info-box">
        <h3>📉 Muy alto</h3>
        <p>Intento ${intentos}: ${intento} (¡El número es menor!)</p>
      </div>
    `;
  }

  mostrarResultado("resultadoAdivina", mensaje);
}

function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  document.getElementById("advinanza").value = "";
  mostrarResultado("resultadoAdivina", "");
}

/**
 * Cuenta Regresiva (While)
 * Python: while contador > 0:
 * JS: while (contador > 0)
 */
async function ejecutarCuentaRegresiva() {
  const inicio = obtenerNumero("cuentaInicio");

  if (!inicio || inicio < 1) {
    mostrarResultado("resultadoCuenta", "<p class='error'>Ingresa un número válido (mayor a 0).</p>");
    return;
  }

  const resultadoDiv = document.getElementById("resultadoCuenta");
  resultadoDiv.innerHTML = "<p class='info-box'>⏳ Cuenta regresiva en progreso...</p>";
  resultadoDiv.classList.remove("hidden");

  let contador = inicio;

  // Python: while contador > 0:
  // JS: while (contador > 0)
  while (contador > 0) {
    resultadoDiv.innerHTML = `<div class="success-box"><h3 class="numero-grande">${contador}</h3></div>`;

    // Pausa dramática
    await new Promise(resolve => setTimeout(resolve, 800));

    contador--;
  }

  resultadoDiv.innerHTML = `
    <div class="success-box">
      <h3>🚀 ¡Despegue!</h3>
      <p>La cuenta regresiva ha terminado.</p>
      <p class="formula">
        Python: <code>while contador > 0: print(contador); contador -= 1</code><br>
        JS: <code>while (contador > 0) { console.log(contador); contador--; }</code>
      </p>
    </div>
  `;
}

// ============================================
// INICIALIZACION
// ============================================

console.log("%cS06: Bucles (for y while)", "color: #f59e0b; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("for i in range(5) (Python) → for (let i = 0; i < 5; i++) (JS)");
console.log("for item in lista (Python) → for (const item of lista) (JS)");
console.log("while condicion: (Python) → while (condicion) { } (JS)");
console.log("\n🎮 Número secreto generado:", numeroSecreto);

// Permitir Enter para submit en inputs
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

  // Mostrar lista inicial
  renderizarLista();
});
