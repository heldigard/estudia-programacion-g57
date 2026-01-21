const btn = document.getElementById("btn");
const salida = document.getElementById("salida");

function totalConPropina(monto, porcentaje) {
  return monto + (monto * porcentaje / 100);
}

btn.addEventListener("click", () => {
  const monto = Number(document.getElementById("monto").value);
  const porcentaje = Number(document.getElementById("propina").value);
  const total = totalConPropina(monto, porcentaje);
  salida.textContent = `Total: ${total.toFixed(2)}`;
});
