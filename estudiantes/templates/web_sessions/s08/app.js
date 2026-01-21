/*
  =====================================================
  S08: Funciones Básicas - JAVASCRIPT
  =====================================================

  PYTHON FUNCIONES ↔ JAVASCRIPT FUNCIONES
  -----------------------------------------
  Las funciones en JavaScript son muy similares a Python,
  pero con diferencias de sintaxis importantes.

  DEFINIR UNA FUNCIÓN:
  --------------------
  Python:
    def mi_funcion(parametro):
        # código aquí
        return resultado

  JavaScript (forma tradicional):
    function miFuncion(parametro) {
      // código aquí
      return resultado;
    }

  JavaScript (forma moderna - arrow function):
    const miFuncion = (parametro) => {
      // código aquí
      return resultado;
    };

  LLAMAR UNA FUNCIÓN:
  -------------------
  Ambos son iguales:
    resultado = miFuncion(valor)

  PARÁMETROS POR DEFECTO:
  -----------------------
  Python:
    def saludar(nombre, saludo="Hola"):
        print(f"{saludo}, {nombre}")

  JavaScript:
    function saludar(nombre, saludo = "Hola") {
      console.log(`${saludo}, ${nombre}`);
    }

  IMPORTANTE: En JavaScript, los parámetros con valor por
  defecto deben ir AL FINAL de la lista de parámetros,
  igual que en Python.

  ARROW FUNCTIONS (→):
  -------------------
  Es una forma más compacta de escribir funciones en JavaScript.
  Se introdujo en ES6 (ECMAScript 2015).

  Python lambda vs JavaScript arrow:
    duplicar = lambda x: x * 2    # Python
    const duplicar = x => x * 2;    # JavaScript

  Diferencias clave:
  - Si hay un solo parámetro, los paréntesis son opcionales
  - Si hay una sola línea de código, las llaves {} son opcionales
  - Si se omite {}, el return es implícito

  Ejemplos:
    // Sin parámetros
    const saludar = () => console.log("Hola");

    // Un parámetro (paréntesis opcionales)
    const duplicar = x => x * 2;

    // Múltiples parámetros (paréntesis requeridos)
    const sumar = (a, b) => a + b;

    // Múltiples líneas (llaves requeridas)
    const complejo = (x, y) => {
      const temp = x + y;
      return temp * 2;
    };

  DOCUMENTACIÓN:
  -------------
  Python: """docstring"""
  JavaScript: /** JSDoc */

  Ejemplo:
    /**
     * Calcula el área de un rectángulo
     * @param {number} base - El ancho del rectángulo
     * @param {number} altura - La altura del rectángulo
     * @returns {number} El área calculada
     */
    function calcularArea(base, altura) {
      return base * altura;
    }
*/

// S08: Funciones Básicas
// Equivalente JavaScript de las prácticas de Python

// ============================================
// UTILIDADES - Funciones de ayuda reutilizables
// ============================================

/**
 * mostrarResultado - Muestra un resultado en pantalla
 * Equivalente Python: print(resultado), pero en interfaz gráfica
 */
function mostrarResultado(elementId, contenido) {
  const elemento = document.getElementById(elementId);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
  elemento.classList.add("visible");
}

/**
 * obtenerNumero - Obtiene un valor numérico de un input
 * Equivalente Python: int(input(...)) con validación
 */
function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  const numero = Number(valor);
  return Number.isNaN(numero) ? null : numero;
}

/**
 * obtenerTexto - Obtiene texto de un input
 * Equivalente Python: input(...).strip()
 */
function obtenerTexto(id) {
  const valor = document.getElementById(id).value;
  return valor.trim() || null;
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Función Simple (Sin Parámetros)
 * Python: def saludar(): print("¡Hola!")
 * JS: function saludar() { return "¡Hola!"; }
 *
 * NOTA: Las funciones pueden ejecutar código directamente
 * o retornar un valor para ser usado después.
 */

// Python:
// def saludar():
//     print("¡Hola!")
//     print("Bienvenido al curso")
function saludar() {
  return "¡Hola!\nBienvenido al curso de Python";
}

/**
 * ejecutarSaludo - Llama a la función saludar() y muestra el resultado
 *
 * Concepto clave: Las funciones no se ejecutan solas.
 * Deben ser LLAMADAS para que su código corra.
 */
function ejecutarSaludo() {
  // Python: resultado = saludar()
  // JS: const resultado = saludar()
  const mensaje = saludar();

  const html = `
    <div class="success-box">
      <h3>👋 Función Ejecutada</h3>
      <pre>${mensaje}</pre>
      <p class="formula">
        Python: <code>def saludar():</code><br>
        JS: <code>function saludar() { }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoSaludo", html);
}

/**
 * Función con Parámetros
 * Python: def saludar_persona(nombre): print(f"¡Hola, {nombre}!")
 * JS: function saludarPersona(nombre) { return \`¡Hola, ${nombre}!\`; }
 *
 * Los PARÁMETROS son variables que la función recibe.
 * Cada vez que llamas la función con diferentes valores,
 * el parámetro toma ese valor.
 */

// Python:
// def saludar_persona(nombre):
//     print(f"¡Hola, {nombre}!")
function saludarPersonaFn(nombre) {
  return `¡Hola, ${nombre}!\nBienvenido/a al curso de Python`;
}

function saludarPersona() {
  const nombre = obtenerTexto("nombreParametro");

  if (!nombre) {
    mostrarResultado("resultadoPersona", "<p class='error'>Ingresa un nombre.</p>");
    return;
  }

  // Python: resultado = saludar_persona("Ana")
  // JS: const resultado = saludarPersonaFn("Ana")
  const resultado = saludarPersonaFn(nombre);

  const html = `
    <div class="success-box">
      <h3>📝 Saludo Personalizado</h3>
      <pre>${resultado}</pre>
      <p class="formula">
        Python: <code>def saludar_persona(nombre):</code><br>
        JS: <code>function saludarPersona(nombre) { }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoPersona", html);
}

/**
 * Múltiples Parámetros
 * Python: def presentar(nombre, edad, ciudad): ...
 * JS: function presentar(nombre, edad, ciudad) { ... }
 *
 * Las funciones pueden tener múltiples parámetros separados por coma.
 * El ORDEN de los parámetros es importante cuando llamas la función.
 */

// Python:
// def presentar(nombre, edad, ciudad):
//     print(f"Me llamo {nombre}")
//     print(f"Tengo {edad} años")
//     print(f"Vivo en {ciudad}")
function presentarFn(nombre, edad, ciudad) {
  return `Me llamo ${nombre}\nTengo ${edad} años\nVivo en ${ciudad}`;
}

function presentarPerfil() {
  const nombre = obtenerTexto("presentarNombre");
  const edad = obtenerNumero("presentarEdad");
  const ciudad = obtenerTexto("presentarCiudad");

  if (!nombre || edad === null || !ciudad) {
    mostrarResultado("resultadoPresentar", "<p class='error'>Completa todos los campos.</p>");
    return;
  }

  // Python: presentar("Juan", 25, "Bogotá")
  // JS: presentarFn("Juan", 25, "Bogotá")
  const resultado = presentarFn(nombre, edad, ciudad);

  const html = `
    <div class="success-box">
      <h3>📋 Perfil Generado</h3>
      <pre>${resultado}</pre>
      <p class="formula">
        Python: <code>def presentar(nombre, edad, ciudad):</code><br>
        JS: <code>function presentar(nombre, edad, ciudad) { }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoPresentar", html);
}

/**
 * Parámetros por Defecto
 * Python: def calcular_propina(cuenta, porcentaje=10): ...
 * JS: function calcularPropina(cuenta, porcentaje = 10) { ... }
 *
 * Los valores por defecto se usan si NO proporcionas un valor
 * para ese parámetro al llamar la función.
 *
 * IMPORTANTE: En JavaScript (como en Python), los parámetros con
 * valor por defecto deben ir AL FINAL de la lista.
 */

// Python:
// def calcular_propina(cuenta, porcentaje=10):
//     propina = cuenta * porcentaje / 100
//     total = cuenta + propina
//     return {"cuenta": cuenta, "propina": propina, "total": total}
function calcularPropinaFn(cuenta, porcentaje = 10) {
  const propina = cuenta * porcentaje / 100;
  const total = cuenta + propina;
  // En JavaScript, retornamos un objeto (similar a diccionario en Python)
  return {
    cuenta: cuenta,
    propina: propina,
    total: total,
    porcentaje: porcentaje
  };
}

function calcularPropina() {
  const cuenta = obtenerNumero("cuentaPropina");
  let porcentaje = obtenerNumero("porcentajePropina");

  if (!cuenta || cuenta < 0) {
    mostrarResultado("resultadoPropina", "<p class='error'>Ingresa un monto válido.</p>");
    return;
  }

  // Si no se especifica porcentaje, usa 10 por defecto
  // Esta lógica está en el wrapper porque el usuario podría
  // dejar el input vacío (null)
  if (porcentaje === null) {
    porcentaje = 10;
  }

  // Python: calcular_propina(50000, 15)
  // JS: calcularPropinaFn(50000, 15)
  const resultado = calcularPropinaFn(cuenta, porcentaje);

  const html = `
    <div class="success-box">
      <h3>💰 Calculadora de Propina</h3>
      <p><strong>Cuenta:</strong> $${resultado.cuenta.toLocaleString("es-CO")}</p>
      <p><strong>Propina (${resultado.porcentaje}%):</strong> $${resultado.propina.toLocaleString("es-CO")}</p>
      <p class="numero-grande">Total: $${resultado.total.toLocaleString("es-CO")}</p>
      <p class="formula">
        Python: <code>def calcular_propina(cuenta, porcentaje=10):</code><br>
        JS: <code>function calcularPropina(cuenta, porcentaje = 10) { }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoPropina", html);
}

/**
 * Verificador de Edad con Parámetro por Defecto
 * Python: def verificar_edad(edad, edad_minima=18): ...
 * JS: function verificarEdadFn(edad, edadMinima = 18) { ... }
 */

// Python:
// def verificar_edad(edad, edad_minima=18):
//     if edad >= edad_minima:
//         return {"permitido": True, "mensaje": "✅ Acceso permitido"}
//     else:
//         return {"permitido": False, "mensaje": "❌ Acceso denegado"}
function verificarEdadFn(edad, edadMinima = 18) {
  if (edad >= edadMinima) {
    return {
      permitido: true,
      mensaje: `✅ Acceso permitido (edad: ${edad})`
    };
  } else {
    return {
      permitido: false,
      mensaje: `❌ Acceso denegado. Requiere ${edadMinima} años (tienes ${edad})`
    };
  }
}

function verificarEdadFuncion() {
  const edad = obtenerNumero("verificarEdad");
  let edadMinima = obtenerNumero("edadMinima");

  if (edad === null || edad < 0) {
    mostrarResultado("resultadoVerificar", "<p class='error'>Ingresa una edad válida.</p>");
    return;
  }

  // Si no se especifica edad mínima, usa 18 por defecto
  if (edadMinima === null) {
    edadMinima = 18;
  }

  // Python: verificar_edad(25, 21)
  // JS: verificarEdadFn(25, 21)
  const resultado = verificarEdadFn(edad, edadMinima);

  const html = `
    <div class="${resultado.permitido ? "success-box" : "error-box"}">
      <h3>${resultado.permitido ? "✅ Acceso Permitido" : "❌ Acceso Denegado"}</h3>
      <p>${resultado.mensaje}</p>
      <p class="formula">
        Python: <code>def verificar_edad(edad, edad_minima=18):</code><br>
        JS: <code>function verificarEdad(edad, edadMinima = 18) { }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoVerificar", html);
}

/**
 * Tabla de Multiplicar con Parámetro por Defecto
 * Python: def tabla_multiplicar(numero, hasta=10): ...
 * JS: function tablaMultiplicar(numero, hasta = 10) { ... }
 *
 * Esta función usa un bucle for para generar una tabla HTML.
 * El bucle for en JavaScript es similar al de Python.
 */

// Python:
// def tabla_multiplicar(numero, hasta=10):
//     tabla = f"<h4>=== Tabla del {numero} ===</h4>"
//     for i in range(1, hasta + 1):
//         tabla += f"{numero} x {i} = {numero * i}<br>"
//     return tabla
function tablaMultiplicarFn(numero, hasta = 10) {
  let tabla = `<h4>=== Tabla del ${numero} ===</h4>`;
  tabla += "<div class='tabla-container'><table>";
  tabla += "<tr><th>×</th><th>" + numero + "</th><th>=</th></tr>";

  // Python: for i in range(1, hasta + 1):
  // JS: for (let i = 1; i <= hasta; i++)
  for (let i = 1; i <= hasta; i++) {
    tabla += `<tr><td>${numero}</td><td>${i}</td><td><strong>${numero * i}</strong></td></tr>`;
  }
  tabla += "</table></div>";

  return tabla;
}

function generarTablaFuncion() {
  const numero = obtenerNumero("tablaNumero");
  let hasta = obtenerNumero("tablaHasta");

  if (!numero || numero < 1 || numero > 12) {
    mostrarResultado("resultadoTabla", "<p class='error'>Ingresa un número entre 1 y 12.</p>");
    return;
  }

  // Si no se especifica hasta, usa 10 por defecto
  if (hasta === null) {
    hasta = 10;
  }

  // Python: tabla_multiplicar(7, 5)
  // JS: tablaMultiplicarFn(7, 5)
  const resultado = tablaMultiplicarFn(numero, hasta);

  const html = `
    <div class="success-box">
      <h3>✖️ Tabla del ${numero}</h3>
      ${resultado}
      <p class="formula">
        Python: <code>def tabla_multiplicar(numero, hasta=10):</code><br>
        JS: <code>function tablaMultiplicar(numero, hasta = 10) { }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoTabla", html);
}

/**
 * Generador de Reportes - Múltiples Funciones
 * Python: Varias funciones que trabajan juntas
 * JS: Varias funciones que trabajan juntas
 *
 * Concepto clave: DIVIDE AND CONQUER
 * Divide un problema grande en funciones pequeñas,
 * cada una hace una tarea específica.
 */

// Datos de prueba (similares a listas en Python)
const estudiantes = ["Ana", "Carlos", "María", "Pedro", "Lucía"];
const calificaciones = [85, 72, 90, 55, 78];

// Python: def imprimir_encabezado(titulo): ...
function imprimirEncabezado(titulo) {
  return `<div class="encabezado-report">
    <h4>========================================</h4>
    <h4 style="text-align:center; color:var(--accent-primary)">${titulo.toUpperCase()}</h4>
    <h4>========================================</h4>
  </div>`;
}

// Python: def imprimir_separador(): ...
function imprimirSeparador() {
  return '<hr style="margin: 12px 0; border-color: var(--border-color);">';
}

// Python: def mostrar_nota(estudiante, nota): ...
function mostrarNota(estudiante, nota) {
  // Operador ternario de JavaScript: condicion ? valor_si_true : valor_si_false
  // Python: estado = "Aprobado" if nota >= 60 else "Reprobado"
  const estado = nota >= 60 ? "✅ Aprobado" : "❌ Reprobado";
  const color = nota >= 60 ? "var(--accent-success)" : "var(--accent-danger)";
  return `<p style="margin: 4px 0;">&nbsp;&nbsp;${estudiante}: <strong>${nota}</strong> - <span style="color:${color}">${estado}</span></p>`;
}

// Python: def generar_reporte(titulo, estudiantes, notas): ...
function generarReporteFn(titulo, listaEstudiantes, listaNotas) {
  let html = imprimirEncabezado(titulo);

  // Python: for i in range(len(estudiantes)):
  // JS: for (let i = 0; i < listaEstudiantes.length; i++)
  for (let i = 0; i < listaEstudiantes.length; i++) {
    html += mostrarNota(listaEstudiantes[i], listaNotas[i]);
  }

  html += imprimirSeparador();

  // Python: promedio = sum(notas) / len(notas)
  // JS: const promedio = listaNotas.reduce((a, b) => a + b, 0) / listaNotas.length
  const promedio = listaNotas.reduce((a, b) => a + b, 0) / listaNotas.length;
  const maximo = Math.max(...listaNotas);
  const minimo = Math.min(...listaNotas);

  html += `<p><strong>&nbsp;&nbsp;Promedio del grupo:</strong> ${promedio.toFixed(1)}</p>`;
  html += `<p><strong>&nbsp;&nbsp;Nota más alta:</strong> ${maximo}</p>`;
  html += `<p><strong>&nbsp;&nbsp;Nota más baja:</strong> ${minimo}</p>`;
  html += imprimirSeparador();

  return html;
}

function generarReporte() {
  const titulo = obtenerTexto("tituloReporte");

  if (!titulo) {
    mostrarResultado("resultadoReporte", "<p class='error'>Ingresa un título para el reporte.</p>");
    return;
  }

  // Python: generar_reporte("Matemáticas", estudiantes, calificaciones)
  // JS: generarReporteFn("Matemáticas", estudiantes, calificaciones)
  const resultado = generarReporteFn(titulo, estudiantes, calificaciones);

  const html = `
    <div class="success-box" style="background: var(--bg-primary);">
      <h3>📊 Reporte Generado</h3>
      ${resultado}
      <p class="formula">
        Python: <code>def generar_reporte(titulo, estudiantes, notas):</code><br>
        JS: <code>function generarReporte(titulo, estudiantes, notas) { }</code>
      </p>
    </div>
  `;

  mostrarResultado("resultadoReporte", html);
}

// ============================================
// INICIALIZACION
// ============================================

console.log("%cS08: Funciones Básicas", "color: #06b6d4; font-size: 20px; font-weight: bold;");
console.log("Abre las herramientas de desarrollador (F12) para ver los logs.");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("def nombre(): (Python) → function nombre() { } (JS)");
console.log("def nombre(param): (Python) → function nombre(param) { } (JS)");
console.log("param='valor' (Python) → param = 'valor' (JS)");
console.log("return valor (Python) → return valor (JS)");

// Permitir Enter para submit en inputs
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const button = input.closest(".card")?.querySelector("button");
        if (button && button.onclick) button.click();
      }
    });
  });
});
