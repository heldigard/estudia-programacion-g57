# Guía de Web para Principiantes

Esta guía te enseña los fundamentos de **HTML**, **CSS** y **JavaScript** mientras practicas los conceptos de Python.

---

## 📚 Los 3 Lenguajes de la Web

Toda página web usa **3 tecnologías** juntas:

| Lenguaje | ¿Qué hace? | Analogía | Ejemplo |
|----------|-------------|----------|---------|
| **HTML** | Estructura y contenido | Los **ladrillos** de una casa | Títulos, párrafos, botones |
| **CSS** | Estilo y apariencia | La **pintura y decoración** | Colores, tamaños, posiciones |
| **JavaScript** | Comportamiento e interactividad | La **electricidad** | Responder a clicks, calcular |

---

## 🌐 ¿Qué es HTML?

**HTML** (HyperText Markup Language) define **QUÉ** hay en la página.

### Estructura básica de un archivo HTML:

```html
<!DOCTYPE html>  <!-- Le dice al navegador que es HTML5 -->
<html>
  <head>
    <!-- Información que NO se ve (metadatos, conexión a CSS) -->
    <title>Mi Página</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Contenido VISIBLE de la página -->
    <h1>Mi Título</h1>
    <p>Mi párrafo de texto</p>
    <script src="app.js"></script>
  </body>
</html>
```

### Etiquetas HTML más comunes:

| Etiqueta | ¿Qué hace? | Ejemplo |
|----------|-------------|---------|
| `<h1>` a `<h6>` | Títulos (h1 = más grande) | `<h1>Título Principal</h1>` |
| `<p>` | Párrafo de texto | `<p>Hola mundo</p>` |
| `<div>` | Caja contenedora invisible | `<div>Contenido aquí</div>` |
| `<span>` | Contenedor en línea | `<span>texto destacado</span>` |
| `<button>` | Botón clickeable | `<button>Click aquí</button>` |
| `<input>` | Campo de entrada | `<input type="text">` |
| `<label>` | Etiqueta descriptiva | `<label>Nombre:</label>` |
| `<section>` | Sección temática | `<section><h2>Título</h2></section>` |

### Atributos importantes:

- `id="nombre"` - Identificador ÚNICO (como un DNI)
- `class="clase"` - Clase para CSS (puede repetirse)
- `type="text/number"` - Tipo de input
- `placeholder="texto"` - Texto de ejemplo
- `onclick="funcion()"` - Ejecuta función al hacer click

---

## 🎨 ¿Qué es CSS?

**CSS** (Cascading Style Sheets) define **CÓMO** se ve la página.

### Sintaxis básica:

```css
selector {
  propiedad: valor;
}
```

### Selectores CSS:

```css
/* Por etiqueta */
button { ... }

/* Por ID (usa #) */
#miBoton { ... }

/* Por clase (usa .) */
.mi-clase { ... }

/* Combinado */
button.primary { ... }  /* botones con clase "primary" */
```

### Propiedades CSS útiles:

| Propiedad | ¿Qué hace? | Valores comunes |
|-----------|-------------|-----------------|
| `color` | Color del texto | `red`, `#ff0000`, `rgb(255,0,0)` |
| `background` | Color de fondo | `blue`, `#0000ff` |
| `font-size` | Tamaño de texto | `16px`, `1.2rem` |
| `margin` | Espacio externo | `10px`, `20px 10px` |
| `padding` | Espacio interno | `15px`, `10px 20px` |
| `border-radius` | Bordes redondeados | `8px`, `50%` |
| `display` | Tipo de visualización | `block`, `inline`, `flex`, `none` |
| `text-align` | Alineación de texto | `left`, `center`, `right` |

---

## ⚡ ¿Qué es JavaScript?

**JavaScript** hace las páginas **INTERACTIVAS**.

### Variables en JavaScript:

```javascript
// Python vs JavaScript
let x = 5;           // x = 5  (variable que puede cambiar)
const x = 5;          // x = 5  (constante, no puede cambiar)
```

### Funciones en JavaScript:

```javascript
// Forma tradicional
function saludar() {
  console.log("Hola");
}

// Arrow function (moderna)
const saludar = () => {
  console.log("Hola");
};
```

### Equivalencias Python ↔ JavaScript:

| Python | JavaScript |
|--------|------------|
| `x = 5` | `let x = 5;` |
| `print(x)` | `console.log(x);` |
| `f"Hola {x}"` | `` `Hola ${x}` `` |
| `type(x)` | `typeof x` |
| `int(texto)` | `Number(texto)` o `parseInt(texto)` |
| `len(lista)` | `lista.length` |
| `x == 5` | `x === 5` (¡usa === en JS!) |
| `x != 5` | `x !== 5` |
| `and` | `&&` |
| `or` | `||` |
| `not` | `!` |

---

## 🔗 Cómo se conectan los 3 archivos

```
index.html          styles.css           app.js
├── <head>          ├── .card {          ├── function calcular() {
│   └── <link>      │     background:    │     const input = ...
│       href=        │     white;          │     input.value ...
│       "styles.css"│   }                  │     ...
│                   └── .btn {           └── }
└── <body>              └── background:
    ├── <div class="card">     blue;
    │     (aplica estilos)
    └── <button onclick=
            "calcular()">
            (ejecuta JS)
```

---

## 🛠️ Cómo usar los templates

### Opción 1: CodePen.io (Recomendado para principiantes)

1. Entra a [codepen.io/pen](https://codepen.io/pen)
2. Verás 3 secciones: **HTML**, **CSS**, **JS**
3. Copia el contenido de `index.html` → pégalo en sección **HTML**
4. Copia el contenido de `styles.css` → pégalo en sección **CSS**
5. Copia el contenido de `app.js` → pégalo en sección **JS**
6. ¡Prueba en vivo!

### Opción 2: Editor local (VS Code, etc.)

1. Abre la carpeta de la sesión:
   - `estudiantes/templates/web_sessions/s02/` (por ejemplo)
2. Abre `index.html` con doble click
3. ¡Prueba los ejercicios directamente en tu navegador!

---

## 📝 Ejercicios por Sesión

| Sesión | Tema Python | Template | Ejercicios Web |
|--------|-------------|----------|------------------|
| **S02** | Variables y Tipos | `s02/` | Calculadora de edad, Perfil, Verificador de tipos, Ticket |
| **S03** | Operadores | `s03/` | Calculadora, Par/Impar, Comparaciones, Lógicos, Conversor |
| **S04** | Condicionales | `s04/` | Verificador de edad, Notas, Cajero, Descuentos, Contraseña |
| **S06** | Bucles for/while | `s06/` | Lista de compras, Contador, Tablas de multiplicar |
| **S07** | Listas | `s07/` | Filtros, Búsqueda, Manipulación de listas |
| **S08** | Funciones básicas | `s08/` | Calculadoras, Conversores |
| **S09** | Funciones con return | `s09/` | Validadores, Procesadores de datos |
| **S12** | Módulos y reuso | `s12/` | Código organizado en módulos |
| **S15** | Archivos TXT/CSV | `s15/` | Lectura de datos, Mostrar información |
| **S18** | Práctica archivos | `s18/` | Procesamiento de datos reales |

---

## 🎯 Flujo de Trabajo Típico

1. **Lee el notebook** de la sesión (Python concepts)
2. **Abre el template web** correspondiente
3. **Observa las equivalencias** Python ↔ JavaScript
4. **Modifica el código** para experimentar
5. **Verifica resultados** en el navegador

---

## 💡 Consejos para Principiantes

### HTML:
- Siempre cierra las etiquetas: `<div>...</div>`
- Usa `id` para elementos únicos
- Usa `class` para estilos repetidos

### CSS:
- Los colores pueden ser nombres (`red`) o códigos (`#ff0000`)
- `margin` es espacio AFUERA, `padding` es espacio ADENTRO
- `display: none` oculta elementos

### JavaScript:
- SIEMPRE usa `===` en lugar de `==` para comparaciones
- Usa `let` para variables que cambian, `const` para constantes
- `console.log()` es tu amigo para debugging (como `print()`)

---

## 🔍 Debugging en el Navegador

### ¿Cómo ver errores?

1. **Abre las DevTools**: Presiona `F12`
2. **Ve a la consola**: Busca la pestaña "Console"
3. **Lee los errores**: Te mostrará qué está mal
4. **Usa console.log()**: Agrega `console.log(variable)` para ver valores

### Errores comunes:

| Error | Causa | Solución |
|-------|-------|----------|
| `Uncaught ReferenceError` | Variable no definida | Verifica que escribiste bien el nombre |
| `Uncaught TypeError` | Tipo incorrecto | Usa `Number()` o `String()` para convertir |
| `null is not a function` | Elemento no encontrado | Verifica que el `id` en HTML coincide |

---

## 📚 Recursos Adicionales

- [MDN Web Docs](https://developer.mozilla.org/es/) - Documentación oficial
- [W3Schools](https://www.w3schools.com/) - Tutoriales interactivos
- [JavaScript.info](https://es.javascript.info/) - Tutorial moderno de JS

---

**¿Listo para empezar?** Elige una sesión y comienza a practicar:
- `estudiantes/templates/web_sessions/s02/`
