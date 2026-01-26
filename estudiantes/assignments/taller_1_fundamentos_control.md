# Taller 1: Fundamentos y Control de Flujo
## Curso: Estud-IA Programación G57

**Peso:** 35% de la nota final  
**Sesiones cubiertas:** 1-4, 6-7  
**Modalidad:** Trabajo práctico (individual o parejas)  
**Tiempo sugerido:** 2-3 horas  
**Fecha de entrega:** Al finalizar la Sesión 7

---

## 📋 Descripción

Este taller evalúa tu comprensión de los fundamentos de Python y las estructuras de control. Deberás completar todos los ejercicios y entregarlos en un notebook de Google Colab.

**Temas evaluados:**
- Variables, tipos de datos y operadores
- Entrada/salida con `input()` y `print()`
- Condicionales (`if`, `elif`, `else`)
- Bucles (`for`, `while`)
- Listas y sus métodos
- `break`, `continue`, `range()`

---

## 📝 Instrucciones

1. Crea un nuevo notebook en Google Colab
2. Nombra tu archivo: `Taller1_TuNombre_TuApellido.ipynb`
3. Cada ejercicio debe estar en una celda separada con un comentario indicando el número
4. Prueba que tu código funcione antes de entregar
5. Incluye comentarios explicando tu lógica

---

## 🎯 Ejercicios

### Parte A: Variables y Operaciones (20 puntos)

#### Ejercicio 1: Calculadora de Edad (10 pts)

Crea un programa que:
1. Pida el nombre del usuario
2. Pida su año de nacimiento
3. Calcule su edad actual (2026)
4. Determine si es mayor de edad (≥18)
5. Muestre un mensaje personalizado con toda la información

**Ejemplo de salida:**
```
Ingresa tu nombre: María
Ingresa tu año de nacimiento: 2000
---
¡Hola María!
Tienes 26 años.
Eres mayor de edad. ✓
```

```python
# Ejercicio 1: Calculadora de Edad
# Tu código aquí:

```

---

#### Ejercicio 2: Conversor de Moneda (10 pts)

Crea un programa que:
1. Pida una cantidad en pesos colombianos
2. Convierta a dólares (usa tasa: 1 USD = 4200 COP)
3. Convierta a euros (usa tasa: 1 EUR = 4500 COP)
4. Muestre los resultados formateados con 2 decimales

**Ejemplo:**
```
Cantidad en COP: 100000
---
100,000 COP equivalen a:
- 23.81 USD
- 22.22 EUR
```

```python
# Ejercicio 2: Conversor de Moneda
# Tu código aquí:

```

---

### Parte B: Condicionales (25 puntos)

#### Ejercicio 3: Sistema de Calificaciones (15 pts)

Crea un programa que:
1. Pida una nota numérica (0-100)
2. Valide que esté en el rango correcto
3. Clasifique según la escala:
   - 90-100: "Excelente" (A)
   - 80-89: "Muy Bueno" (B)
   - 70-79: "Bueno" (C)
   - 60-69: "Aceptable" (D)
   - 0-59: "Reprobado" (F)
4. Indique si aprobó (≥60) o reprobó
5. Muestre mensaje de ánimo o felicitación según el caso

```python
# Ejercicio 3: Sistema de Calificaciones
# Tu código aquí:

```

---

#### Ejercicio 4: Calculadora de Descuentos (10 pts)

Un cine tiene las siguientes políticas de descuento:
- Niños (0-12): 50% de descuento
- Estudiantes (13-25): 30% de descuento  
- Adultos (26-59): Sin descuento
- Adultos mayores (60+): 40% de descuento
- Martes es día de descuento adicional: 10% extra para todos

Precio base de entrada: $15,000 COP

Crea un programa que:
1. Pida la edad del cliente
2. Pregunte si es martes (s/n)
3. Calcule el precio final con descuentos aplicados
4. Muestre el desglose del precio

```python
# Ejercicio 4: Calculadora de Descuentos
# Tu código aquí:

```

---

### Parte C: Bucles (30 puntos)

#### Ejercicio 5: Tabla de Multiplicar Personalizada (10 pts)

Crea un programa que:
1. Pida un número al usuario
2. Pregunte desde qué número hasta qué número quiere la tabla
3. Muestre la tabla de multiplicar en ese rango

**Ejemplo:**
```
Número para la tabla: 7
Desde: 5
Hasta: 10

=== Tabla del 7 (5-10) ===
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

```python
# Ejercicio 5: Tabla de Multiplicar
# Tu código aquí:

```

---

#### Ejercicio 6: Contador de Estadísticas (10 pts)

Crea un programa que pida números al usuario hasta que escriba -1, y luego muestre:
- Cantidad de números ingresados
- Suma total
- Promedio
- Número mayor
- Número menor
- Cuántos fueron positivos y cuántos negativos

**Nota:** El -1 no debe incluirse en los cálculos.

```python
# Ejercicio 6: Contador de Estadísticas
# Tu código aquí:

```

---

#### Ejercicio 7: Patrón de Asteriscos (10 pts)

Crea un programa que pida un número N y dibuje el siguiente patrón:

**Para N=5:**
```
*
**
***
****
*****
****
***
**
*
```

El patrón sube hasta N asteriscos y luego baja.

```python
# Ejercicio 7: Patrón de Asteriscos
# Tu código aquí:

```

---

### Parte D: Listas (25 puntos)

#### Ejercicio 8: Gestor de Lista de Compras (25 pts)

Crea un programa de lista de compras con menú que permita:

1. **Agregar producto** - Pide nombre y lo agrega a la lista
2. **Ver lista** - Muestra todos los productos numerados
3. **Buscar producto** - Dice si existe y en qué posición
4. **Eliminar producto** - Elimina por nombre
5. **Estadísticas** - Muestra:
   - Total de productos
   - Producto más largo (más letras)
   - Productos en orden alfabético
6. **Salir** - Termina el programa

**Requisitos:**
- Usa un bucle `while` para el menú
- Valida entradas incorrectas
- Muestra mensajes claros al usuario

```python
# Ejercicio 8: Gestor de Lista de Compras
# Tu código aquí:

```

---

## 📊 Rúbrica de Evaluación

| Criterio | Puntos |
|----------|--------|
| **Funcionalidad** | 60 |
| Ejercicio 1 funciona correctamente | 10 |
| Ejercicio 2 funciona correctamente | 10 |
| Ejercicio 3 funciona correctamente | 15 |
| Ejercicio 4 funciona correctamente | 10 |
| Ejercicio 5 funciona correctamente | 10 |
| Ejercicio 6 funciona correctamente | 10 |
| Ejercicio 7 funciona correctamente | 10 |
| Ejercicio 8 funciona correctamente | 25 |
| **Calidad del Código** | 25 |
| Variables con nombres descriptivos | 5 |
| Comentarios explicativos | 5 |
| Código organizado y legible | 5 |
| Validación de entradas | 5 |
| Mensajes claros al usuario | 5 |
| **Entrega** | 15 |
| Formato correcto del notebook | 5 |
| Todos los ejercicios incluidos | 5 |
| Código ejecuta sin errores | 5 |
| **TOTAL** | **100** |

---

## 💡 Consejos

- **Prueba cada ejercicio** antes de pasar al siguiente
- **Lee bien** los requisitos de cada ejercicio
- **Usa print()** para verificar valores intermedios mientras desarrollas
- **Comenta tu código** para que sea más fácil de entender
- Si un ejercicio te bloquea, pasa al siguiente y vuelve después

---

## 📤 Formato de Entrega

1. Comparte tu notebook de Colab con permisos de **"Cualquier persona con el enlace puede ver"**
2. Envía el enlace a la plataforma indicada por el docente
3. Asegúrate de que el notebook esté guardado con todos los ejercicios

**Nombre del archivo:** `Taller1_Nombre_Apellido.ipynb`

---

¡Éxito! 🚀
