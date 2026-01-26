# Proyecto Final: Sistema Integrado
## Curso: Estud-IA Programación G57

**Peso:** 30% de la nota final  
**Sesiones:** 26-27  
**Tiempo:** 2 sesiones de clase + trabajo autónomo  
**Modalidad:** Individual o en parejas

---

## Descripción General

El proyecto final consiste en desarrollar un **sistema integrado** que aplique todos los conceptos aprendidos durante el curso. El estudiante o equipo debe elegir **UNA** de las siguientes opciones:

> 💡 **Tip:** Todas las opciones tienen el mismo nivel de dificultad y los mismos requisitos técnicos. Elige la que más te interese o se relacione con tus intereses personales.

---

## Opción A: Gestor de Gastos Personales 💰

### Descripción
Sistema para registrar, categorizar y analizar gastos personales.

### Funcionalidades Requeridas

1. **Registro de gastos**
   - Fecha, descripción, monto, categoría
   - Validación de datos de entrada

2. **Categorías**
   - Alimentación, Transporte, Entretenimiento, Servicios, Otros
   - Permitir crear nuevas categorías

3. **Almacenamiento**
   - Guardar en archivo CSV
   - Cargar gastos existentes al iniciar

4. **Reportes**
   - Total de gastos del mes
   - Gastos por categoría
   - Promedio diario de gastos
   - Categoría con más gastos

5. **Menú interactivo**
   - Agregar gasto
   - Ver gastos
   - Generar reportes
   - Exportar reporte a TXT
   - Salir

---

## Opción B: Sistema de Inventario 📦

### Descripción
Sistema para gestionar el inventario de una pequeña tienda.

### Funcionalidades Requeridas

1. **Gestión de productos**
   - Código, nombre, cantidad, precio, categoría
   - CRUD completo (Crear, Leer, Actualizar, Eliminar)

2. **Control de stock**
   - Alertas de stock bajo
   - Registro de entradas y salidas

3. **Almacenamiento**
   - Productos en CSV
   - Log de movimientos en TXT

4. **Reportes**
   - Valor total del inventario
   - Productos por categoría
   - Productos con stock bajo
   - Historial de movimientos

5. **Menú interactivo**
   - Gestión de productos
   - Registrar entrada/salida
   - Ver reportes
   - Crear backup
   - Salir

---

## Opción C: Registro de Estudiantes y Notas 📚

### Descripción
Sistema para gestionar estudiantes y sus calificaciones.

### Funcionalidades Requeridas

1. **Gestión de estudiantes**
   - ID, nombre, email, curso
   - CRUD completo

2. **Gestión de notas**
   - Registrar notas por materia
   - Calcular promedios

3. **Almacenamiento**
   - Estudiantes en CSV
   - Notas en CSV separado

4. **Reportes**
   - Lista de estudiantes por curso
   - Promedio por estudiante
   - Promedio por materia
   - Estudiantes aprobados/reprobados

5. **Menú interactivo**
   - Gestión de estudiantes
   - Registro de notas
   - Ver reportes
   - Exportar boletín individual
   - Salir

---

## Opción D: Mini-Asistente por Consola 🤖

### Descripción
Asistente interactivo con múltiples utilidades.

### Funcionalidades Requeridas

1. **Calculadora avanzada**
   - Operaciones básicas
   - Porcentajes, raíz cuadrada
   - Conversiones (temperatura, moneda)

2. **Gestor de tareas**
   - Agregar, ver, completar, eliminar tareas
   - Guardar en archivo

3. **Generador de contraseñas**
   - Configurable (longitud, caracteres especiales)

4. **Juego de adivinanza**
   - Número aleatorio
   - Pistas (mayor/menor)
   - Contador de intentos

5. **Menú principal**
   - Acceso a todas las funcionalidades
   - Historial de uso
   - Salir

---

## Opción E: Organizador de Entretenimiento 🎬🎮

### Descripción
Sistema para gestionar tu biblioteca personal de series, películas, videojuegos o libros. Ideal si quieres llevar registro de lo que ves, juegas o lees.

### Funcionalidades Requeridas

1. **Gestión de contenido**
   - Título, tipo (serie/película/juego/libro), género, plataforma
   - Estado: pendiente/en progreso/completado
   - Rating personal (1-10)
   - Notas/comentarios opcionales

2. **Sistema de recomendaciones**
   - Recomendación aleatoria de pendientes
   - Filtrar por género o plataforma
   - "¿Qué veo/juego hoy?" basado en género favorito

3. **Almacenamiento**
   - Contenido en archivo CSV
   - Historial de completados con fecha

4. **Estadísticas y Reportes**
   - Total por tipo y estado
   - Géneros más consumidos
   - Rating promedio dado
   - Tiempo desde última actualización
   - Top 5 mejor valorados

5. **Menú interactivo**
   - Agregar contenido
   - Ver biblioteca (con filtros)
   - Marcar como completado
   - Obtener recomendación
   - Ver estadísticas
   - Exportar reporte
   - Salir

### Ejemplo de Datos
```csv
titulo,tipo,genero,plataforma,estado,rating,fecha_agregado
Breaking Bad,serie,Drama,Netflix,completado,10,2026-01-15
The Witcher 3,juego,RPG,PC,en progreso,9,2026-01-10
Oppenheimer,pelicula,Drama,Cine,pendiente,,2026-01-20
```

---

## Opción F: Bot Analizador de Hábitos 📊🤖 *(Nueva 2026)*

### Descripción
Un asistente interactivo que te ayuda a registrar y analizar tus hábitos diarios. Puede ser para productividad, ejercicio, alimentación, o cualquier hábito que quieras trackear.

### Funcionalidades Requeridas

1. **Registro de hábitos**
   - Definir hábitos a seguir (ej: "Ejercicio", "Leer", "Meditar")
   - Registrar cumplimiento diario (sí/no o valor numérico)
   - Agregar notas opcionales

2. **Sistema de seguimiento**
   - Racha actual por hábito
   - Mejor racha histórica
   - Porcentaje de cumplimiento semanal/mensual

3. **Asistente conversacional**
   - "¿Cómo voy esta semana?"
   - "¿Cuál es mi mejor hábito?"
   - "Dame un resumen del mes"
   - Mensajes motivacionales según el progreso

4. **Almacenamiento**
   - Hábitos en CSV
   - Registro diario en CSV separado

5. **Reportes y Visualización**
   - Reporte semanal en TXT
   - Calendario simple con símbolos (✓/✗)
   - Predicción: "A este ritmo completarás X días este mes"

6. **Menú interactivo**
   - Registrar hábito de hoy
   - Ver progreso
   - Hablar con el asistente
   - Configurar hábitos
   - Generar reporte
   - Salir

### Ejemplo de Interacción
```
🤖 ¡Hola! Soy tu asistente de hábitos.

¿Qué quieres hacer?
1. Registrar mis hábitos de hoy
2. Ver mi progreso
3. Hablar conmigo
4. Ver reporte

> 3

🤖 ¿Qué quieres saber?
> ¿cómo voy esta semana?

🤖 Esta semana llevas:
   ✅ Ejercicio: 4/5 días (80%) - ¡Excelente!
   ✅ Leer: 5/5 días (100%) - ¡Racha perfecta!
   ⚠️ Meditar: 2/5 días (40%) - Puedes mejorar
   
   Promedio general: 73% 
   ¡Sigue así! 💪
```

---

## Requisitos Técnicos Obligatorios

Independientemente de la opción elegida, el proyecto debe incluir:

### Código
- [ ] Mínimo 5 funciones con `return`
- [ ] Uso de al menos 2 módulos (csv, random, datetime, math)
- [ ] Manejo de errores con `try-except`
- [ ] Docstrings en todas las funciones
- [ ] Comentarios explicativos

### Archivos
- [ ] Lectura y escritura de archivos
- [ ] Al menos un archivo CSV
- [ ] Al menos un archivo TXT (log o reporte)

### Estructura
- [ ] Menú principal funcional
- [ ] Validación de entradas del usuario
- [ ] Mensajes claros para el usuario

### Buenas Prácticas
- [ ] Nombres de variables descriptivos
- [ ] Código organizado y legible
- [ ] Sin código repetido (usar funciones)

---

## Rúbrica de Evaluación (100 puntos)

### Funcionalidad (40 puntos)
| Criterio | Puntos |
|----------|--------|
| El programa ejecuta sin errores | 10 |
| Todas las funcionalidades implementadas | 15 |
| Manejo correcto de archivos | 10 |
| Validación de datos de entrada | 5 |

### Código (30 puntos)
| Criterio | Puntos |
|----------|--------|
| Uso correcto de funciones | 10 |
| Manejo de errores | 5 |
| Docstrings y comentarios | 5 |
| Código organizado y legible | 5 |
| Sin código repetido | 5 |

### Interfaz de Usuario (15 puntos)
| Criterio | Puntos |
|----------|--------|
| Menú claro e intuitivo | 5 |
| Mensajes informativos | 5 |
| Experiencia de usuario fluida | 5 |

### Extras y Creatividad (15 puntos)
| Criterio | Puntos |
|----------|--------|
| Funcionalidades adicionales | 5 |
| Creatividad en la solución | 5 |
| Presentación del código | 5 |

---

## Entregables

1. **Archivo .ipynb** con todo el código del proyecto
2. **Archivos de datos** de ejemplo (.csv, .txt)
3. **Documento breve** (en markdown o texto) explicando:
   - Opción elegida
   - Cómo usar el programa
   - Funcionalidades implementadas
   - Dificultades encontradas

---

## Cronograma

### Sesión 26
- Selección de proyecto
- Diseño de funciones principales
- Inicio de implementación

### Sesión 27
- Continuación de implementación
- Pruebas y corrección de errores
- Entrega final

### Fecha límite
Entregar al finalizar la Sesión 27 o según indique el docente.

---

## Consejos para el Éxito

1. **Planifica antes de codear**: Dibuja el flujo del programa
2. **Empieza simple**: Haz funcionar lo básico primero
3. **Prueba constantemente**: No esperes al final
4. **Guarda versiones**: Haz copias de seguridad frecuentes
5. **Pide ayuda**: Si te bloqueas, consulta al docente

---

*¡Éxito en tu proyecto final! Este es el momento de demostrar todo lo que has aprendido. 🚀*
