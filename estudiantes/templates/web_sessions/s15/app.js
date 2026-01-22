// =====================================================
// S15: Archivos (localStorage) - JAVASCRIPT
// =====================================================
//
// En esta sesión practicaremos:
// - Guardar datos con localStorage.setItem()
// - Leer datos con localStorage.getItem()
// - Borrar datos con localStorage.removeItem()
// - Guardar objetos usando JSON.stringify()
//
// Python vs JavaScript:
// Python: open("file.txt", "w")    JS: localStorage.setItem("clave", "valor")
// Python: file.read()              JS: localStorage.getItem("clave")
// Python: json.dump(obj, file)     JS: localStorage.setItem("key", JSON.stringify(obj))
//
// NOTA: localStorage persiste en el navegador del usuario.
// Los datos se guardan incluso si cierras la página.
//
// =====================================================

// -----------------------------------------------------
// RETO 1: Guardar en "Archivo"
// -----------------------------------------------------
//
// localStorage guarda datos que persisten entre sesiones
//
// TU MISIÓN:
// 1. RETO HTML: Cambia placeholder a "Escribe algo..."
// 2. RETO CSS: Crea .guardado-mensaje con borde verde
// 3. TODO: Completa guardarEnArchivo() con localStorage.setItem()
// -----------------------------------------------------

function guardarEnArchivo() {
  const texto = document.getElementById("textoGuardar").value;

  if (!texto.trim()) {
    mostrarResultado("resultadoGuardar", "<p class='error'>Escribe algo para guardar.</p>");
    return;
  }

  // TODO: Guarda el texto en localStorage
  // Pista: localStorage.setItem("miArchivo", texto);
  // localStorage.setItem("miArchivo", texto);

  const html = `
    <div class="guardado-mensaje">
      <h3>💾 ¡Guardado!</h3>
      <p><strong>Texto guardado:</strong> "${texto}"</p>
      <p class="formula">
        Python: <code>with open("file.txt", "w") as f: f.write(texto)</code><br>
        JS: <code>localStorage.setItem("miArchivo", texto)</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoGuardar", html);
}

// -----------------------------------------------------
// RETO 2: Leer de "Archivo"
// -----------------------------------------------------
//
// localStorage.getItem() recupera datos guardados
//
// TU MISIÓN:
// 1. RETO HTML: Agrega emoji 📖 al título
// 2. RETO CSS: Crea .contenido-leido con padding
// 3. TODO: Completa leerDeArchivo() con localStorage.getItem()
// -----------------------------------------------------

function leerDeArchivo() {
  // TODO: Lee el texto guardado de localStorage
  // Pista: const texto = localStorage.getItem("miArchivo");
  const texto = null;  // <-- Cambia esto

  if (texto === null) {
    mostrarResultado("resultadoLeer", "<p class='error'>No hay datos guardados. Primero guarda algo.</p>");
    return;
  }

  const html = `
    <div class="contenido-leido">
      <h3>📖 Contenido del Archivo</h3>
      <p><strong>Datos leídos:</strong></p>
      <p class="formula">
        Python: <code>with open("file.txt", "r") as f: contenido = f.read()</code><br>
        JS: <code>localStorage.getItem("miArchivo")</code>
      </p>
      <p class="result">${texto}</p>
    </div>
  `;
  mostrarResultado("resultadoLeer", html);
}

// -----------------------------------------------------
// RETO 3: Borrar "Archivo"
// -----------------------------------------------------
//
// localStorage.removeItem() elimina datos guardados
//
// TU MISIÓN:
// 1. RETO HTML: Cambia el botón a color rojo
// 2. RETO CSS: Crea .borrado-mensaje centrado
// 3. TODO: Completa borrarArchivo() con localStorage.removeItem()
// -----------------------------------------------------

function borrarArchivo() {
  // TODO: Verifica si hay datos antes de borrar
  const existe = localStorage.getItem("miArchivo") !== null;

  if (!existe) {
    mostrarResultado("resultadoBorrar", "<p class='error'>No hay datos para borrar.</p>");
    return;
  }

  // TODO: Borra los datos de localStorage
  // Pista: localStorage.removeItem("miArchivo");
  // localStorage.removeItem("miArchivo");

  const html = `
    <div class="borrado-mensaje">
      <h3>🗑️ ¡Borrado!</h3>
      <p>Los datos han sido eliminados del "archivo".</p>
      <p class="formula">
        Python: <code>os.remove("file.txt")</code><br>
        JS: <code>localStorage.removeItem("miArchivo")</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoBorrar", html);
}

// -----------------------------------------------------
// RETO 4: Guardar Objeto
// -----------------------------------------------------
//
// Para guardar objetos, primero convertimos a JSON
//
// TU MISIÓN:
// 1. RETO HTML: Cambia label a "Tu nombre:"
// 2. RETO CSS: Crea .objeto-guardado con borde
// 3. TODO: Guarda el objeto usando JSON.stringify()
// -----------------------------------------------------

function guardarObjeto() {
  const nombre = document.getElementById("nombreObjeto").value.trim();

  if (!nombre) {
    mostrarResultado("resultadoObjeto", "<p class='error'>Ingresa tu nombre.</p>");
    return;
  }

  // Crear un objeto con los datos
  const objeto = {
    nombre: nombre,
    fecha: new Date().toLocaleDateString("es-CO")
  };

  // TODO: Guarda el objeto como JSON
  // Pista: localStorage.setItem("usuario", JSON.stringify(objeto));
  // localStorage.setItem("usuario", JSON.stringify(objeto));

  const html = `
    <div class="objeto-guardado">
      <h3>📦 Objeto Guardado</h3>
      <p><strong>Nombre:</strong> ${objeto.nombre}</p>
      <p><strong>Fecha:</strong> ${objeto.fecha}</p>
      <p class="formula">
        Python: <code>json.dump(objeto, file)</code><br>
        JS: <code>localStorage.setItem("usuario", JSON.stringify(objeto))</code>
      </p>
    </div>
  `;
  mostrarResultado("resultadoObjeto", html);
}

// -----------------------------------------------------
// FUNCIÓN AUXILIAR (no necesitas modificar esto)
// -----------------------------------------------------

function mostrarResultado(id, contenido) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
}

console.log("S15: Archivos - Abre la consola (F12) para ver logs");
