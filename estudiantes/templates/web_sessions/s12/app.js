import { totalConImpuesto } from "./utils.js";

const btn = document.getElementById("btn");
const salida = document.getElementById("salida");

btn.addEventListener("click", () => {
  const valor = Number(document.getElementById("valor").value);
  const total = totalConImpuesto(valor, 19);
  salida.textContent = `Total: ${total.toFixed(2)}`;
});
