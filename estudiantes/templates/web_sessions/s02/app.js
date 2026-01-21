const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const salida = document.getElementById("salida");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const n = nombre.value.trim();
  const e = Number(edad.value);
  salida.textContent = `Hola, ${n || "(sin nombre)"}. Tienes ${e || 0} años.`;
  console.log(typeof n, typeof e);
});
