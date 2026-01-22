// =====================================================
// S12: Módulos - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - Importar funciones desde utils.js
// - Usar el módulo Math (integrado en JavaScript)
// - Exportar funciones desde utils.js
//
// Python vs JavaScript:
// Python: from utils import sumar        JS: import { sumar } from "./utils.js"
// Python: import math                    JS: Math (objeto global, no requiere import)
// Python: def funcion():                 JS: export function funcion() {}
//
// IMPORTANTE: En JavaScript ES6, usamos import/export.
// El script en HTML DEBE tener type="module"
//
// =====================================================

// -----------------------------------------------------
// RETO 1: Importar desde un Módulo
// -----------------------------------------------------
//
// Importa funciones desde utils.js
//
// TU MISIÓN:
// 1. RETO HTML: Verifica que el script tenga type="module"
// 2. RETO CSS: Crea .import-destacado con borde verde
// 3. TODO: Completa el import de sumar desde utils.js
// -----------------------------------------------------

// TODO: Importa la función sumar desde utils.js
// Pista: import { sumar, lanzarDado, saludar } from "./utils.js";
import { } from "./utils.js";  // <-- Completa esto

function probarImport() {
  const a = Number(document.getElementById("numeroA").value);
  const b = Number(document.getElementById("numeroB").value);

  if (isNaN(a) || isNaN(b)) {
    mostrarResultado("resultadoImport", "<p class='error'>Ingresa ambos números.</p>");
    return;
  }

  // TODO: Usa la función sumar importada
  const resultado = 0;  // <-- Cambia esto: sumar(a, b)

  const html = `
    <div class="import-destacado">
      <h3>✅ Import Exitoso</h3>
      <p><strong>${a} + ${b} =</strong> <span class="numero-grande">${resultado}</span></p>
      <p class="formula">
        Python: <code>from utils import sumar</code><br>
        JS: <code>import { sumar } from "./utils.js"</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoImport", html);
}

// -----------------------------------------------------
// RETO 2: Módulo Math
// -----------------------------------------------------
//
// Math es un objeto global en JavaScript (no requiere import)
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji 📐 al título
// 2. RETO CSS: Cambia .numero-grande a color #84cc16
// 3. TODO: Completa calcularRaiz() usando Math.sqrt()
// -----------------------------------------------------

function calcularRaiz() {
  const n = Number(document.getElementById("raizNumero").value);

  if (isNaN(n)) {
    mostrarResultado("resultadoRaiz", "<p class='error'>Ingresa un número.</p>");
    return;
  }

  // TODO: Usa Math.sqrt() para calcular la raíz
  const resultado = 0;  // <-- Cambia esto: Math.sqrt(n)

  const html = `
    <div class="success-box">
      <h3>📐 Raíz de ${n}</h3>
      <p class="numero-grande">${resultado.toFixed(4)}</p>
      <p class="formula">
        Python: <code>import math; math.sqrt(${n})</code><br>
        JS: <code>Math.sqrt(${n})</code> (Math es global)
      </p>
    </div>
  `;
  mostrarResultado("resultadoRaiz", html);
}

// -----------------------------------------------------
// RETO 3: Usar Funciones Importadas
// -----------------------------------------------------
//
// Usa funciones que ya importaste desde utils.js
//
// TU MISIÓN:
// 1. RETO HTML: Cambia placeholder a "Ej: 6"
// 2. RETO CSS: Crea .dado-resultado con font-size grande
// 3. TODO: Llama a lanzarDado() desde utils.js
// -----------------------------------------------------

function lanzarDadoReto() {
  const caras = Number(document.getElementById("dadoCaras").value) || 6;

  // TODO: Llama a la función lanzarDado importada de utils.js
  const resultado = 1;  // <-- Cambia esto: lanzarDado(caras)

  const html = `
    <div class="success-box">
      <h3>🎲 Dado de ${caras} caras</h3>
      <p class="dado-resultado">${resultado}</p>
      <p class="formula">
        Función importada desde utils.js
      </p>
    </div>
  `;
  mostrarResultado("resultadoDado", html);
}

// -----------------------------------------------------
// RETO 4: Exportar una Función
// -----------------------------------------------------
//
// Crea tu propia función exportada en utils.js
//
// TU MISIÓN:
// 1. RETO HTML: Cambia label a "Tu texto aquí:"
// 2. RETO CSS: Crea .mensaje-exportado con estilo
// 3. TODO: En utils.js, crea export function saludar(nombre)
// -----------------------------------------------------

function probarSaludar() {
  const nombre = document.getElementById("tuNombre").value.trim();

  if (!nombre) {
    mostrarResultado("resultadoExportar", "<p class='error'>Ingresa tu nombre.</p>");
    return;
  }

  // TODO: Llama a la función saludar desde utils.js
  const mensaje = "TODO: importa y llama a saludar(nombre)";

  const html = `
    <div class="info-box">
      <h3>👋 Función Exportada</h3>
      <p class="mensaje-exportado">${mensaje}</p>
      <p class="formula">
        En utils.js: <code>export function saludar(nombre) { ... }</code><br>
        En app.js: <code>import { saludar } from "./utils.js"</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoExportar", html);
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}

console.log("S12: Módulos - Abre la consola (F12) para ver logs");
