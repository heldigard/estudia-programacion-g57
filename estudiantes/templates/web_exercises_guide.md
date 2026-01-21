# Guía rápida de uso (Web)

Esta guía acompaña la plantilla en [estudiantes/templates/web_base](estudiantes/templates/web_base).

## Cómo usar

1. Copia el contenido de `index.html`, `styles.css` y `app.js` en CodePen o Replit.
2. Cambia **solo** los IDs y funciones según el ejercicio de la sesión.
3. Mantén el patrón: **estado → funciones puras → render → eventos**.

## Ejemplos por sesión

- S02: `estudiantes/templates/web_sessions/s02/`
- S03: `estudiantes/templates/web_sessions/s03/`
- S04: `estudiantes/templates/web_sessions/s04/`
- S06: `estudiantes/templates/web_sessions/s06/`
- S07: `estudiantes/templates/web_sessions/s07/`
- S08: `estudiantes/templates/web_sessions/s08/`
- S09: `estudiantes/templates/web_sessions/s09/`
- S12: `estudiantes/templates/web_sessions/s12/`
- S15: `estudiantes/templates/web_sessions/s15/`
- S18: `estudiantes/templates/web_sessions/s18/`
- S21: `estudiantes/templates/web_sessions/s21/`
- S24: `estudiantes/templates/web_sessions/s24/`
- S26: `estudiantes/templates/web_sessions/s26/`
- S27: `estudiantes/templates/web_sessions/s27/`

## Adaptación por sesión (S02–S27)

### S02 (Variables y tipos)
- Reemplazar `buildMessage()` por una salida tipo “perfil”.
- Usar `typeof` y mostrar tipo en `output`.

### S03 (Operadores)
- Convertir `inputA` y `inputB` en número con `parseNumber()`.
- Mostrar suma, resta, multiplicación, división.

### S04 (Condicionales)
- Agregar clases CSS `.ok` y `.error`.
- Cambiar color del `output` según rango.

### S06 (Bucles)
- Usar `state.items` como lista de compras.
- Renderizar en `ul` con `for...of` o `.forEach()`.

### S07 (Listas)
- Agregar filtro por texto.
- Usar `state.items.filter()` antes del `render()`.

### S08 (Funciones)
- Separar cálculo en funciones puras.
- El handler solo lee inputs y actualiza UI.

### S09 (Return)
- Hacer funciones que **retornen** valor y no cambien el DOM.
- `render()` es el único que toca la UI.

### S12 (Módulos)
- Mover helpers a `utils.js` y exportarlos.
- Importar en `app.js`.

### S15/S18 (Datos)
- Reemplazar `state.items` con datos de `fetch()`.
- Renderizar cards/tabla desde JSON.

### S21/S24 (Debug)
- Introducir errores intencionales y usar DevTools.

### S26–S27 (Proyecto)
- Convertir la plantilla en un CRUD simple (form + tabla + filtros).

---

## Notas de aula

- Siempre mostrar el **puente** con Python en una sola frase.
- Hacer que el alumno vea el mismo concepto en dos entornos.
