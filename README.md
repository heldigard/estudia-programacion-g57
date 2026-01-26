# Programacion - Estud-IA / Digital X

Curso de introduccion a la programacion en Python para el programa Estud-IA / Digital X.

## Sobre el curso

- **Publico:** Jovenes (16-28) y adultos (29-59) iniciando en programacion
- **Modalidad:** 60% virtual, 40% presencial
- **Duracion por sesion:** 4 horas (3h 15m de instruccion + 45m de descanso)
- **Entorno:** Google Colab (sin necesidad de instalar nada)

## 📅 Calendario del Curso

**Horario completo:** [Google Sheets del horario](https://docs.google.com/spreadsheets/d/e/2PACX-1vTo8bQCm349iPOXsPwnJnydwU4wvAvm2HGCFDeD1U3R1jHnSnkLx_mlbk6mqocO1w/pubhtml?gid=575859347&single=true)

### **Sesiones de Habilidades Digitales (15 sesiones)**
| Sesión | Fecha | Tipo | Tema | Material |
|--------|-------|------|------|----------|
| 1-4 | 20-23 ene | Virtual | Fundamentos de Sintaxis en Python | [S01-S04](estudiantes/notebooks/) |
| 6-7 | 26-27 ene | Virtual | Estructuras de Control Básicas | [S06-S07](estudiantes/notebooks/) |
| 8-9 | 28-29 ene | Virtual | Funciones y Modularidad | [S08-S09](estudiantes/notebooks/) |
| 12 | 3 feb | Presencial | Funciones y Modularidad | [S12](estudiantes/notebooks/s12_modulos_y_reuso.ipynb) |
| 15 | 10 feb | Presencial | Manejo de Archivos y Entrada/Salida | [S15](estudiantes/notebooks/s15_archivos_txt_csv.ipynb) |
| 18 | 17 feb | Virtual | Manejo de Archivos y Entrada/Salida | [S18](estudiantes/notebooks/s18_archivos_practica.ipynb) |
| 21 | 24 feb | Virtual | Debugging y Resolución de Problemas | [S21](estudiantes/notebooks/s21_debugging_problemas.ipynb) |
| 24 | 3 mar | Presencial | Optimización y Buenas Prácticas | [S24](estudiantes/notebooks/s24_optimizacion_buenas_practicas.ipynb) |
| 26-27 | 7-9 mar | Presencial | Desarrollo de Aplicaciones Prácticas | [S26](estudiantes/notebooks/s26_proyecto_final_parte1.ipynb) |

*Nota: Las demás sesiones del horario corresponden a módulos de inglés.*

## Estructura del repositorio

```
EstudIA-Programacion/
├── estudiantes/                    # Material para estudiantes
│   ├── notebooks/                 # Notebooks de Google Colab por sesión
│   │   ├── s01_sintaxis_basica.ipynb
│   │   ├── s02_variables_tipos.ipynb
│   │   ├── s03_operadores_expresiones.ipynb
│   │   ├── s04_condicionales.ipynb
│   │   ├── s06_loops_for_while.ipynb
│   │   ├── s07_listas_y_bucles.ipynb
│   │   ├── s08_funciones_basicas.ipynb
│   │   ├── s09_funciones_return.ipynb
│   │   ├── s12_modulos_y_reuso.ipynb
│   │   ├── s15_archivos_txt_csv.ipynb
│   │   ├── s18_archivos_practica.ipynb
│   │   ├── s21_debugging_problemas.ipynb
│   │   ├── s24_optimizacion_buenas_practicas.ipynb
│   │   └── s26_proyecto_final_parte1.ipynb
│   ├── assignments/               # Evaluaciones y talleres
│   │   ├── evaluacion_1_fundamentos.md
│   │   ├── evaluacion_2_bucles_listas.md
│   │   ├── evaluacion_3_funciones.md
│   │   ├── evaluacion_4_archivos.md
│   │   └── proyecto_final.md
│   ├── datasets/                  # Archivos de datos para ejercicios
│   │   ├── contactos.csv
│   │   └── ventas.csv
│   ├── templates/                 # Plantillas y recursos web
│   │   ├── web_base/             # Plantilla base para ejercicios web
│   │   ├── web_sessions/         # Ejercicios web por sesión
│   │   └── web_exercises_guide.md
│   └── 00 Bienvenida.md          # Documento de bienvenida
├── profesor/                      # Material del docente (privado)
│   ├── solutions/                # Soluciones de ejercicios
│   ├── rubrics/                  # Rúbricas de evaluación
│   ├── assessments/              # Evaluaciones completas
│   └── recursos_privados/        # Recursos exclusivos del profesor
├── memory-bank/                  # Contexto del proyecto para IA
├── README.md                     # Este archivo
└── plan_ajustes_curso.md         # Plan de ajustes identificados
```

## Como usar este repositorio

1. **Clonar el repositorio:**
   ```bash
   git clone <URL-del-repositorio>
   cd EstudIA-Programacion
   ```

2. **Abrir un notebook en Google Colab:**
   - Ve a `estudiantes/notebooks/`
   - Selecciona la sesion correspondiente
   - Abre el archivo en Google Colab

3. **Guardar tu trabajo:**
   - File > Save a copy in Drive

## 📊 Sistema de Evaluación

### **Estructura de Calificación**
- **70% Talleres prácticos (2 × 35%):** Trabajos prácticos integradores por bloques temáticos
- **30% Proyecto final:** Sistema integrado que aplica todos los conceptos del curso

### **Calendario de Evaluaciones**
| Evaluación | Sesiones cubiertas | Temas evaluados | Fecha entrega | Material |
|------------|-------------------|-----------------|---------------|----------|
| **Taller 1** | 1-7 | Fundamentos, Condicionales, Bucles, Listas | Sesión 7 | [Ver taller](estudiantes/assignments/taller_1_fundamentos_control.md) |
| **Taller 2** | 8-18 | Funciones, Módulos, Archivos | Sesión 18 | [Ver taller](estudiantes/assignments/taller_2_funciones_archivos.md) |
| **Proyecto Final** | 26-27 | Todos los conceptos integrados | Sesión 27 | [Ver proyecto](estudiantes/assignments/proyecto_final.md) |

### **Formato de Talleres**
- **100% práctico:** Ejercicios de programación aplicados
- **Modalidad:** Individual o en parejas
- **Tiempo:** 2-4 horas (puede completarse fuera de clase)
- **Entrega:** Notebook de Google Colab compartido

### **Opciones de Proyecto Final**
El proyecto final ofrece **6 opciones** para elegir según tus intereses:
- 💰 Gestor de Gastos Personales
- 📦 Sistema de Inventario
- 📚 Registro de Estudiantes y Notas
- 🤖 Mini-Asistente por Consola
- 🎬 Organizador de Entretenimiento *(Nuevo)*
- 📊 Bot Analizador de Hábitos *(Nuevo 2026)*

## Requisitos previos

- Cuenta de Google (para Google Colab)
- Conexion a internet
- Navegador web actualizado (Chrome, Firefox, Edge)

## Docente

**Eldigardo Camacho**
[Email de contacto]

## Licencia

Material educativo para uso en el programa Estud-IA / Digital X.
