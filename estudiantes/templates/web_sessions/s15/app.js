// S15: Fetch API - Peticiones HTTP
// Python: import requests → requests.get(url)
// JS: fetch(url)

// ============================================
// UTILIDADES
// ============================================

function mostrarResultado(elementId, contenido) {
  const elemento = document.getElementById(elementId);
  elemento.innerHTML = contenido;
  elemento.classList.remove("hidden");
  elemento.classList.add("visible");
}

function mostrarLoading(elementId) {
  const elemento = document.getElementById(elementId);
  elemento.innerHTML = `<div class="success-box"><p><span class="loading"></span> Cargando...</p></div>`;
  elemento.classList.remove("hidden");
  elemento.classList.add("visible");
}

function mostrarError(mensaje) {
  return `<div class="error-box">
    <h3>❌ Error</h3>
    <p>${mensaje}</p>
  </div>`;
}

function formatearJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

// ============================================
// API BASE URL
// ============================================
const API_BASE = "https://jsonplaceholder.typicode.com";

// ============================================
// GET - Obtener un recurso
// Python: response = requests.get(url); data = response.json()
// JS: const response = await fetch(url); const data = await response.json();
// ============================================

async function obtenerUsuario() {
  mostrarLoading("resultadoGet");

  try {
    // Python: requests.get(f"{base}/users/1")
    const response = await fetch(`${API_BASE}/users/1`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    const html = `
      <div class="success-box">
        <h3>👤 Usuario Obtenido</h3>
        <div class="user-card">
          <div class="user-card-header">
            <div class="user-avatar">${data.name.charAt(0)}</div>
            <div>
              <div class="user-name">${data.name}</div>
              <div class="user-info">@${data.username}</div>
            </div>
          </div>
          <div class="user-info">
            <p>📧 ${data.email}</p>
            <p>📱 ${data.phone}</p>
            <p>🌐 ${data.website}</p>
          </div>
        </div>
        <p class="formula">
          Python: <code>requests.get("{base}/users/1")</code><br>
          JS: <code>await fetch("{base}/users/1")</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoGet", html);
  } catch (error) {
    mostrarResultado("resultadoGet", mostrarError(error.message));
  }
}

// ============================================
// GET - Obtener lista de recursos
// ============================================

async function obtenerUsuarios() {
  mostrarLoading("resultadoGetLista");

  try {
    const response = await fetch(`${API_BASE}/users?_limit=5`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    let usuariosHtml = data.map(user => `
      <div class="user-card">
        <div class="user-card-header">
          <div class="user-avatar">${user.name.charAt(0)}</div>
          <div>
            <div class="user-name">${user.name}</div>
            <div class="user-info">@${user.username}</div>
          </div>
        </div>
      </div>
    `).join("");

    const html = `
      <div class="success-box">
        <h3>👥 Lista de Usuarios (${data.length})</h3>
        ${usuariosHtml}
        <p class="formula">
          Python: <code>requests.get("{base}/users").json()</code><br>
          JS: <code>await fetch("{base}/users").then(r => r.json())</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoGetLista", html);
  } catch (error) {
    mostrarResultado("resultadoGetLista", mostrarError(error.message));
  }
}

// ============================================
// GET - Con parámetros de consulta
// Python: requests.get(url, params={"key": "value"})
// JS: fetch(url + "?key=value")
// ============================================

async function obtenerPosts() {
  mostrarLoading("resultadoQueryParams");

  try {
    const userId = document.getElementById("postsUserId")?.value || "1";

    // Python: requests.get(f"{base}/posts", params={"userId": userId})
    const response = await fetch(`${API_BASE}/posts?userId=${userId}&_limit=5`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    let postsHtml = data.map(post => `
      <div style="background: var(--bg-primary); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 8px;">
        <p style="color: var(--accent-primary); font-weight: bold;">${post.title}</p>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">${post.body}</p>
      </div>
    `).join("");

    const html = `
      <div class="success-box">
        <h3>📝 Posts del Usuario ${userId} (${data.length})</h3>
        ${postsHtml}
        <p class="formula">
          Python: <code>requests.get(url, params={"userId": ${userId}})</code><br>
          JS: <code>fetch(url + "?userId=${userId}")</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoQueryParams", html);
  } catch (error) {
    mostrarResultado("resultadoQueryParams", mostrarError(error.message));
  }
}

// ============================================
// POST - Crear un nuevo recurso
// Python: requests.post(url, json={"key": "value"})
// JS: fetch(url, {method: "POST", body: JSON.stringify(data)})
// ============================================

async function crearPost() {
  mostrarLoading("resultadoPost");

  try {
    const titulo = document.getElementById("postTitulo")?.value || "Mi Nuevo Post";
    const cuerpo = document.getElementById("postCuerpo")?.value || "Contenido del post";

    const nuevoPost = {
      title: titulo,
      body: cuerpo,
      userId: 1
    };

    // Python: requests.post(url, json=nuevo_post)
    const response = await fetch(`${API_BASE}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoPost)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const html = `
      <div class="success-box">
        <h3>✅ Post Creado (ID: ${data.id})</h3>
        <div class="user-card">
          <p style="color: var(--accent-primary); font-weight: bold;">${data.title}</p>
          <p style="color: var(--text-secondary);">${data.body}</p>
        </div>
        <p class="formula">
          Python: <code>requests.post(url, json={"title": "${titulo}"})</code><br>
          JS: <code>fetch(url, {method: "POST", body: JSON.stringify(data)})</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoPost", html);
  } catch (error) {
    mostrarResultado("resultadoPost", mostrarError(error.message));
  }
}

// ============================================
// PUT - Actualizar un recurso completo
// Python: requests.put(url, json=data)
// JS: fetch(url, {method: "PUT", body: JSON.stringify(data)})
// ============================================

async function actualizarPost() {
  mostrarLoading("resultadoPut");

  try {
    const postId = document.getElementById("putPostId")?.value || "1";
    const nuevoTitulo = document.getElementById("putTitulo")?.value || "Título Actualizado";

    const datosActualizados = {
      id: postId,
      title: nuevoTitulo,
      body: "Contenido actualizado",
      userId: 1
    };

    // Python: requests.put(f"{url}/posts/{id}", json=datos)
    const response = await fetch(`${API_BASE}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosActualizados)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const html = `
      <div class="success-box">
        <h3>✏️ Post Actualizado (ID: ${data.id})</h3>
        <div class="user-card">
          <p style="color: var(--accent-primary); font-weight: bold;">${data.title}</p>
          <p style="color: var(--text-secondary);">${data.body}</p>
        </div>
        <p class="formula">
          Python: <code>requests.put(url, json=data)</code><br>
          JS: <code>fetch(url, {method: "PUT", body: JSON.stringify(data)})</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoPut", html);
  } catch (error) {
    mostrarResultado("resultadoPut", mostrarError(error.message));
  }
}

// ============================================
// DELETE - Eliminar un recurso
// Python: requests.delete(url)
// JS: fetch(url, {method: "DELETE"})
// ============================================

async function eliminarPost() {
  mostrarLoading("resultadoDelete");

  try {
    const postId = document.getElementById("deletePostId")?.value || "1";

    // Python: requests.delete(f"{url}/posts/{id}")
    const response = await fetch(`${API_BASE}/posts/${postId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = `
      <div class="success-box">
        <h3>🗑️ Post Eliminado</h3>
        <p>Post ID ${postId} eliminado exitosamente</p>
        <p class="formula">
          Python: <code>requests.delete(f"{url}/posts/{postId}")</code><br>
          JS: <code>fetch("{url}/posts/${postId}", {method: "DELETE"})</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoDelete", html);
  } catch (error) {
    mostrarResultado("resultadoDelete", mostrarError(error.message));
  }
}

// ============================================
// Headers - Personalizar encabezados
// Python: requests.get(url, headers={"Authorization": "Bearer token"})
// JS: fetch(url, {headers: {"Authorization": "Bearer token"}})
// ============================================

async function consultarConHeaders() {
  mostrarLoading("resultadoHeaders");

  try {
    // Python: requests.get(url, headers={"Accept": "application/json"})
    const response = await fetch(`${API_BASE}/users/1`, {
      headers: {
        "Accept": "application/json",
        "User-Agent": "S15-Fetch-Demo/1.0"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    // Mostrar headers de respuesta
    const headersHtml = `
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--accent-primary);">Headers de Respuesta</summary>
        <div class="json-display">${formatearJSON({
          "content-type": response.headers.get("content-type"),
          "server": "cloudflare",
          "otros": "... (ver en consola)"
        })}</div>
      </details>
    `;

    const html = `
      <div class="success-box">
        <h3>📋 Petición con Headers</h3>
        <p><strong>Usuario:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${headersHtml}
        <p class="formula">
          Python: <code>requests.get(url, headers={"Accept": "application/json"})</code><br>
          JS: <code>fetch(url, {headers: {"Accept": "application/json"}})</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoHeaders", html);

    // Log headers en consola
    console.log("Response Headers:", Object.fromEntries(response.headers.entries()));
  } catch (error) {
    mostrarResultado("resultadoHeaders", mostrarError(error.message));
  }
}

// ============================================
// Manejo de Errores HTTP
// ============================================

async function demoError404() {
  mostrarLoading("resultadoErrores");

  try {
    // Intentar obtener un recurso que no existe
    const response = await fetch(`${API_BASE}/posts/999999`);

    // En fetch, errores 4xx no lanzan excepción automáticamente
    // Hay que verificar response.ok
    if (!response.ok) {
      const html = `
        <div class="error-box">
          <h3>❌ Error ${response.status}: ${response.statusText}</h3>
          <p>El recurso solicitado no existe</p>
          <p class="formula">
            Python: <code>try: response.raise_for_status()</code><br>
            JS: <code>if (!response.ok) { throw Error(...) }</code>
          </p>
        </div>
      `;
      mostrarResultado("resultadoErrores", html);
      return;
    }

    const data = await response.json();
    mostrarResultado("resultadoErrores", `<p>${JSON.stringify(data)}</p>`);
  } catch (error) {
    mostrarResultado("resultadoErrores", mostrarError(error.message));
  }
}

async function demoError500() {
  mostrarLoading("resultadoErrores");

  try {
    // Simular error del servidor
    const response = await fetch(`${API_BASE}/posts/invalid`);

    if (!response.ok) {
      const html = `
        <div class="error-box">
          <h3>⚠️ Error del Servidor</h3>
          <p>Status: ${response.status}</p>
          <p>Siempre verificar <code>response.ok</code> antes de usar los datos</p>
          <p class="formula">
            Python: <code>if response.status_code >= 400: handle_error()</code><br>
            JS: <code>if (!response.ok) { handle_error() }</code>
          </p>
        </div>
      `;
      mostrarResultado("resultadoErrores", html);
      return;
    }

    const data = await response.json();
    mostrarResultado("resultadoErrores", `<p>${JSON.stringify(data)}</p>`);
  } catch (error) {
    mostrarResultado("resultadoErrores", mostrarError(error.message));
  }
}

// ============================================
// Promise chaining vs async/await
// Demostrar ambas formas de hacer fetch
// ============================================

function demoThenCatch() {
  mostrarLoading("resultadoComparacion");

  // Python no tiene equivalente directo a .then()/.catch()
  // JS: Promise chaining tradicional
  fetch(`${API_BASE}/users/1`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const html = `
        <div class="success-box">
          <h3>⛓️ Promise Chaining (.then/.catch)</h3>
          <div class="user-card">
            <div class="user-card-header">
              <div class="user-avatar">${data.name.charAt(0)}</div>
              <div>
                <div class="user-name">${data.name}</div>
                <div class="user-info">@${data.username}</div>
              </div>
            </div>
          </div>
          <p class="formula">
            <code>fetch(url).then(r => r.json()).then(data => console.log(data))</code>
          </p>
        </div>
      `;
      mostrarResultado("resultadoComparacion", html);
    })
    .catch(error => {
      mostrarResultado("resultadoComparacion", mostrarError(error.message));
    });
}

async function demoAsyncAwait() {
  mostrarLoading("resultadoComparacion");

  // Python: response = requests.get(url); data = response.json()
  // JS: async/await - más similar a Python
  try {
    const response = await fetch(`${API_BASE}/users/2`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const html = `
      <div class="success-box">
        <h3>⏹️ Async/Await</h3>
        <div class="user-card">
          <div class="user-card-header">
            <div class="user-avatar">${data.name.charAt(0)}</div>
            <div>
              <div class="user-name">${data.name}</div>
              <div class="user-info">@${data.username}</div>
            </div>
          </div>
        </div>
        <p class="formula">
          Python: <code>data = requests.get(url).json()</code><br>
          JS: <code>const response = await fetch(url); const data = await response.json();</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoComparacion", html);
  } catch (error) {
    mostrarResultado("resultadoComparacion", mostrarError(error.message));
  }
}

// ============================================
// Timeout y Abort Controller
// Python: requests.get(url, timeout=5)
// JS: AbortController
// ============================================

async function demoTimeout() {
  mostrarLoading("resultadoTimeout");

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 100);

  try {
    // Petición rápida que debería completarse antes del timeout
    const response = await fetch(`${API_BASE}/users/1`, {
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const html = `
      <div class="success-box">
        <h3>⏱️ Timeout con AbortController</h3>
        <p>Petición completada: <strong>${data.name}</strong></p>
        <p>Timeout: 100ms (la petición se completó antes)</p>
        <p class="formula">
          Python: <code>requests.get(url, timeout=5)</code><br>
          JS: <code>const controller = new AbortController(); setTimeout(() => controller.abort(), 5000);</code>
        </p>
      </div>
    `;

    mostrarResultado("resultadoTimeout", html);
  } catch (error) {
    if (error.name === "AbortError") {
      mostrarResultado("resultadoTimeout", `<p class="error">⏱️ Timeout: La petición tomó demasiado tiempo</p>`);
    } else {
      mostrarResultado("resultadoTimeout", mostrarError(error.message));
    }
  }
}

// ============================================
// INICIALIZACIÓN
// ============================================

console.log("%cS15: Fetch API - Peticiones HTTP", "color: #fb923c; font-size: 20px; font-weight: bold;");
console.log("\n--- Equivalencias Python vs JavaScript ---");
console.log("import requests (Python) → fetch (JS, built-in)");
console.log("requests.get(url) → await fetch(url)");
console.log("response.json() → await response.json()");
console.log("requests.post(url, json=data) → fetch(url, {method: 'POST', body: JSON.stringify(data)})");

// Enter key support
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
});
