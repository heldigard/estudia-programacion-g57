const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  res.textContent = `Suma: ${a + b} | Resta: ${a - b} | Mult: ${a * b} | Div: ${b ? (a / b).toFixed(2) : "∞"}`;
});
