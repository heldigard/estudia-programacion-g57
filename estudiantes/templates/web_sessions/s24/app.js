const btn = document.getElementById("btn");
const salida = document.getElementById("salida");

btn.addEventListener("click", () => {
  // BUG: value llega como string; intencional para depurar
  const n = document.getElementById("n").value;
  const doble = n + n; // error lógico
  salida.textContent = `Doble: ${doble}`;
});
