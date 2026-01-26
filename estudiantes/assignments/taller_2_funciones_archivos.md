# Taller 2: Funciones y Manejo de Archivos
## Curso: Estud-IA Programación G57

**Peso:** 35% de la nota final  
**Sesiones cubiertas:** 8-9, 12, 15, 18  
**Modalidad:** Trabajo práctico (individual o parejas)  
**Tiempo sugerido:** 3-4 horas  
**Fecha de entrega:** Al finalizar la Sesión 18

---

## 📋 Descripción

Este taller evalúa tu capacidad para crear funciones reutilizables, usar módulos de Python y trabajar con archivos. Combina programación estructurada con persistencia de datos.

**Temas evaluados:**
- Definición y uso de funciones
- Parámetros, valores por defecto y retorno
- Módulos: `math`, `random`, `datetime`
- Lectura y escritura de archivos TXT
- Manejo de archivos CSV
- Manejo básico de errores con `try/except`

---

## 📝 Instrucciones

1. Crea un nuevo notebook en Google Colab
2. Nombra tu archivo: `Taller2_TuNombre_TuApellido.ipynb`
3. Cada ejercicio debe estar en una celda separada
4. Las funciones deben tener **docstrings** explicativos
5. Prueba todas las funciones antes de entregar

---

## 🎯 Ejercicios

### Parte A: Funciones Básicas (25 puntos)

#### Ejercicio 1: Librería de Matemáticas (15 pts)

Crea las siguientes funciones y pruébalas:

```python
def es_primo(n):
    """Retorna True si n es primo, False si no."""
    pass

def factorial(n):
    """Retorna el factorial de n (n!)."""
    pass

def fibonacci(n):
    """Retorna una lista con los primeros n números de Fibonacci."""
    pass

def es_palindromo(texto):
    """Retorna True si el texto es un palíndromo (ignora mayúsculas y espacios)."""
    pass
```

**Pruebas requeridas:**
```python
print(es_primo(7))      # True
print(es_primo(10))     # False
print(factorial(5))      # 120
print(fibonacci(8))      # [0, 1, 1, 2, 3, 5, 8, 13]
print(es_palindromo("Anita lava la tina"))  # True
```

```python
# Ejercicio 1: Librería de Matemáticas
# Tu código aquí:

```

---

#### Ejercicio 2: Funciones con Parámetros Avanzados (10 pts)

Crea las siguientes funciones:

```python
def formatear_precio(precio, moneda="COP", decimales=2):
    """
    Formatea un precio con símbolo de moneda.
    
    Args:
        precio: Valor numérico
        moneda: Código de moneda (COP, USD, EUR)
        decimales: Cantidad de decimales a mostrar
    
    Returns:
        String formateado: "$1,234.56 USD"
    """
    pass

def crear_usuario(nombre, edad, email=None, activo=True):
    """
    Crea un diccionario con datos de usuario.
    
    Returns:
        Diccionario con los datos del usuario
    """
    pass
```

**Pruebas requeridas:**
```python
print(formatear_precio(15000))              # "$15,000.00 COP"
print(formatear_precio(25.5, "USD", 2))     # "$25.50 USD"

print(crear_usuario("Ana", 25))
# {'nombre': 'Ana', 'edad': 25, 'email': None, 'activo': True}

print(crear_usuario("Juan", 30, "juan@email.com", False))
# {'nombre': 'Juan', 'edad': 30, 'email': 'juan@email.com', 'activo': False}
```

```python
# Ejercicio 2: Funciones con Parámetros Avanzados
# Tu código aquí:

```

---

### Parte B: Módulos de Python (25 puntos)

#### Ejercicio 3: Generador de Contraseñas (15 pts)

Usando el módulo `random`, crea:

```python
import random
import string

def generar_contrasena(longitud=12, incluir_mayusculas=True, incluir_numeros=True, incluir_especiales=False):
    """
    Genera una contraseña aleatoria.
    
    Args:
        longitud: Largo de la contraseña
        incluir_mayusculas: Si incluir letras mayúsculas
        incluir_numeros: Si incluir números
        incluir_especiales: Si incluir caracteres especiales (!@#$%^&*)
    
    Returns:
        String con la contraseña generada
    """
    pass

def evaluar_fortaleza(contrasena):
    """
    Evalúa la fortaleza de una contraseña.
    
    Returns:
        Tuple: (puntuacion, nivel)
        - puntuacion: 0-100
        - nivel: "Débil", "Media", "Fuerte", "Muy Fuerte"
    
    Criterios:
        - Longitud >= 8: +25 pts
        - Tiene mayúsculas: +25 pts
        - Tiene números: +25 pts
        - Tiene especiales: +25 pts
    """
    pass
```

**Pruebas requeridas:**
```python
# Generar varias contraseñas
print(generar_contrasena(8, False, False, False))  # Solo minúsculas
print(generar_contrasena(12, True, True, True))    # Completa

# Evaluar fortaleza
print(evaluar_fortaleza("abc"))           # (0, "Débil")
print(evaluar_fortaleza("Password123!"))  # (100, "Muy Fuerte")
```

```python
# Ejercicio 3: Generador de Contraseñas
# Tu código aquí:

```

---

#### Ejercicio 4: Calculadora de Fechas (10 pts)

Usando el módulo `datetime`, crea:

```python
from datetime import datetime, timedelta

def dias_hasta_fecha(fecha_str):
    """
    Calcula días desde hoy hasta una fecha.
    
    Args:
        fecha_str: Fecha en formato "DD/MM/YYYY"
    
    Returns:
        Número de días (positivo=futuro, negativo=pasado)
    """
    pass

def edad_exacta(fecha_nacimiento_str):
    """
    Calcula la edad exacta en años, meses y días.
    
    Args:
        fecha_nacimiento_str: Fecha en formato "DD/MM/YYYY"
    
    Returns:
        Diccionario: {'años': X, 'meses': Y, 'días': Z}
    """
    pass

def dia_semana(fecha_str):
    """
    Retorna el día de la semana de una fecha.
    
    Returns:
        String: "Lunes", "Martes", etc.
    """
    pass
```

**Pruebas requeridas:**
```python
print(dias_hasta_fecha("31/12/2026"))  # Días hasta fin de año
print(edad_exacta("15/03/1995"))       # Edad de alguien nacido en esa fecha
print(dia_semana("25/12/2026"))        # Día de Navidad 2026
```

```python
# Ejercicio 4: Calculadora de Fechas
# Tu código aquí:

```

---

### Parte C: Archivos (30 puntos)

#### Ejercicio 5: Diario Personal (15 pts)

Crea un sistema de diario que guarde entradas en un archivo TXT:

```python
def agregar_entrada(archivo, texto):
    """
    Agrega una nueva entrada al diario con fecha y hora.
    Formato: [2026-01-26 14:30] Texto de la entrada
    """
    pass

def leer_diario(archivo):
    """
    Lee y muestra todas las entradas del diario.
    """
    pass

def buscar_en_diario(archivo, palabra):
    """
    Busca entradas que contengan una palabra específica.
    Returns: Lista de entradas encontradas
    """
    pass

def contar_entradas(archivo):
    """
    Cuenta el total de entradas en el diario.
    """
    pass
```

**Pruebas requeridas:**
```python
# Agregar entradas
agregar_entrada("mi_diario.txt", "Hoy empecé a aprender Python")
agregar_entrada("mi_diario.txt", "Python es muy interesante")
agregar_entrada("mi_diario.txt", "Completé mi primer proyecto")

# Leer todo
leer_diario("mi_diario.txt")

# Buscar
print(buscar_en_diario("mi_diario.txt", "Python"))

# Contar
print(f"Total de entradas: {contar_entradas('mi_diario.txt')}")
```

```python
# Ejercicio 5: Diario Personal
# Tu código aquí:

```

---

#### Ejercicio 6: Sistema de Registro de Gastos con CSV (15 pts)

Crea un sistema completo de gastos que use archivos CSV:

```python
import csv
from datetime import datetime

def crear_archivo_gastos(archivo):
    """
    Crea el archivo CSV con encabezados si no existe.
    Columnas: fecha,descripcion,categoria,monto
    """
    pass

def agregar_gasto(archivo, descripcion, categoria, monto):
    """
    Agrega un nuevo gasto al archivo.
    La fecha se genera automáticamente.
    """
    pass

def leer_gastos(archivo):
    """
    Lee y retorna todos los gastos como lista de diccionarios.
    """
    pass

def total_por_categoria(archivo):
    """
    Calcula el total gastado por cada categoría.
    Returns: Diccionario {categoria: total}
    """
    pass

def gastos_del_mes(archivo, mes, año):
    """
    Filtra gastos de un mes específico.
    Returns: Lista de gastos de ese mes
    """
    pass

def generar_reporte(archivo, archivo_salida):
    """
    Genera un reporte TXT con:
    - Total de gastos
    - Promedio por gasto
    - Categoría con más gastos
    - Gasto más alto
    - Listado por categoría
    """
    pass
```

**Categorías sugeridas:** Alimentación, Transporte, Entretenimiento, Servicios, Otros

**Pruebas requeridas:**
```python
# Crear archivo
crear_archivo_gastos("gastos.csv")

# Agregar varios gastos
agregar_gasto("gastos.csv", "Almuerzo", "Alimentación", 15000)
agregar_gasto("gastos.csv", "Bus", "Transporte", 3000)
agregar_gasto("gastos.csv", "Netflix", "Entretenimiento", 40000)
agregar_gasto("gastos.csv", "Mercado", "Alimentación", 150000)
agregar_gasto("gastos.csv", "Uber", "Transporte", 12000)

# Ver totales por categoría
print(total_por_categoria("gastos.csv"))

# Generar reporte
generar_reporte("gastos.csv", "reporte_gastos.txt")
```

```python
# Ejercicio 6: Sistema de Registro de Gastos
# Tu código aquí:

```

---

### Parte D: Integración y Manejo de Errores (20 puntos)

#### Ejercicio 7: Mini-Sistema Integrado (20 pts)

Crea un sistema que combine todo lo aprendido:

**"Administrador de Contactos"**

Funcionalidades:
1. Agregar contacto (nombre, teléfono, email, categoría)
2. Buscar contacto por nombre
3. Listar todos los contactos
4. Eliminar contacto
5. Exportar contactos a TXT
6. Importar contactos desde CSV
7. Estadísticas (total, por categoría)

**Requisitos técnicos:**
- Datos guardados en `contactos.csv`
- Al menos 5 funciones separadas
- Menú interactivo con validación
- Manejo de errores con `try/except` para:
  - Archivo no encontrado
  - Datos inválidos
  - Contacto no existe
- Docstrings en todas las funciones

```python
# Ejercicio 7: Administrador de Contactos
# Tu código aquí:

```

---

## 📊 Rúbrica de Evaluación

| Criterio | Puntos |
|----------|--------|
| **Funcionalidad** | 60 |
| Ejercicio 1: Funciones matemáticas | 15 |
| Ejercicio 2: Parámetros avanzados | 10 |
| Ejercicio 3: Generador contraseñas | 15 |
| Ejercicio 4: Calculadora fechas | 10 |
| Ejercicio 5: Diario personal | 15 |
| Ejercicio 6: Sistema gastos CSV | 15 |
| Ejercicio 7: Sistema integrado | 20 |
| **Calidad del Código** | 25 |
| Funciones con docstrings | 5 |
| Nombres descriptivos | 5 |
| Código modular y reutilizable | 5 |
| Manejo de errores | 5 |
| Comentarios y organización | 5 |
| **Entrega** | 15 |
| Formato correcto | 5 |
| Todos los ejercicios | 5 |
| Código ejecuta sin errores | 5 |
| **TOTAL** | **100** |

---

## 💡 Consejos

- **Empieza por las funciones simples** y ve aumentando la complejidad
- **Prueba cada función** individualmente antes de integrarla
- **Usa try/except** para manejar posibles errores de archivos
- **Lee la documentación** de los módulos si tienes dudas
- Los archivos creados aparecerán en el panel lateral de Colab

---

## 📤 Formato de Entrega

1. Comparte tu notebook de Colab con permisos de **"Cualquier persona con el enlace puede ver"**
2. **Incluye los archivos generados** (CSV, TXT) ejecutando las celdas antes de entregar
3. Envía el enlace a la plataforma indicada

**Nombre del archivo:** `Taller2_Nombre_Apellido.ipynb`

---

## 🔗 Recursos Útiles

- [Documentación datetime](https://docs.python.org/3/library/datetime.html)
- [Documentación csv](https://docs.python.org/3/library/csv.html)
- [Documentación random](https://docs.python.org/3/library/random.html)

---

¡Éxito! 🚀
