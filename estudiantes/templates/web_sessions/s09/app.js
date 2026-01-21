const btn = document.getElementById("btn");
const salida = document.getElementById("salida");

function cToF(c) {
  return (c * 9 / 5) + 32;
}

btn.addEventListener("click", () => {
  const c = Number(document.getElementById("c").value);
  const f = cToF(c);
  salida.textContent = `${c}°C = ${f.toFixed(2)}°F`;
});
