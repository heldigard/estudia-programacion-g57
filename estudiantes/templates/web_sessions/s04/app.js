const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click", () => {
  const nota = Number(document.getElementById("nota").value);
  if (nota >= 90) {
    mensaje.textContent = "Excelente";
    mensaje.className = "estado ok";
  } else if (nota >= 70) {
    mensaje.textContent = "Bien";
    mensaje.className = "estado warn";
  } else {
    mensaje.textContent = "Necesita mejorar";
    mensaje.className = "estado bad";
  }
});
