# Coding Conventions - EstudIA-Programacion

## Python Style (Notebooks)

### Naming Conventions
- **Variables**: `snake_case` - ej: `mi_variable`, `lista_compras`
- **Functions**: `snake_case` - ej: `calcular_total()`, `mostrar_mensaje()`
- **Constants**: `UPPER_SNAKE_CASE` - ej: `MAX_INTENTOS`, `TASA_IVA`
- **Comments**: `#` para comentarios de una línea

### Code Organization (Notebooks)
1. **Header Markdown**: Título, curso, docente, duración
2. **Checklist de Apertura**: Verificaciones previas
3. **Objetivos**: Lista de objetivos de aprendizaje
4. **Conceptos Clave**: Tablas resumen con ejemplos
5. **Ejemplo Guiado**: Código paso a paso con comentarios
6. **Ejercicios**: Práctica guiada y autónoma

### Cell Structure
```python
# [Descripción breve de lo que hace el código]
print("ejemplo")  # Comentario inline cuando necesario
```

### Educational Patterns
- **Spanish language**: Todo el material en español
- **Emojis**: Usar emojis para destacar secciones (🎯, 📚, 💡, ⚠️)
- **Progressive disclosure**: Concepto → Ejemplo → Práctica
- **Python-Web bridge**: Mostrar equivalencias cuando sea relevante

## JavaScript/HTML/CSS Style (Web Templates)

### Pattern: State → Pure Functions → Render → Events
```javascript
// 1. State
const state = { /* initial state */ };

// 2. Pure functions
function buildMessage(data) {
  return `Processed: ${data}`;
}

// 3. Render (only touches UI)
function render() {
  output.textContent = buildMessage(state.data);
}

// 4. Event handlers
btn.addEventListener("click", () => {
  state.data = input.value;
  render();
});
```

### Naming Conventions (JavaScript)
- **Variables**: `camelCase` - ej: `nombre`, `listaItems`
- **Functions**: `camelCase` - ej: `calcularTotal()`, `render()`
- **Constants**: `UPPER_SNAKE_CASE` - ej: `MAX_ITEMS`
- **DOM elements**: Named by ID or purpose - ej: `btn`, `output`

### File Structure (Web Sessions)
- **index.html**: Estructura semántica con IDs específicos
- **styles.css**: Estilos base + clases de sesión
- **app.js**: Lógica principal siguiendo el patrón arriba

### Session Adaptations
Each session (s02-s27) modifies the base template minimally:
- S02: Variables y tipos (`typeof`)
- S03: Operadores (aritméticos)
- S04: Condicionales (`.ok`, `.error` classes)
- S06: Bucles (render listas)
- S07: Listas con filtros
- S08: Funciones puras
- S09: Return values
- S12: Módulos (`utils.js`)
- S15/S18: Datos desde JSON
- S26-S27: CRUD completo

## File Naming
- Notebooks: `sXX_descripcion_corta.ipynb` (ej: `s01_sintaxis_basica.ipynb`)
- Templates: `sXX/` folders with `index.html`, `styles.css`, `app.js`
- Evaluations: `evaluacion_N_tema.md`
- Datasets: `nombre_descriptivo.csv`

## Documentation Style
- Spanish language throughout
- Clear section headers with emojis
- Code examples with comments explaining WHY
- Tables for comparison and reference
- Progressive: basic → intermediate → advanced
