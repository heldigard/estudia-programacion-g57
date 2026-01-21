const contactos = ["Ana", "Juan", "María", "Pedro", "Sofía", "Luisa", "Camilo"];
const btn = document.getElementById("btn");
const ul = document.getElementById("lista");

btn.addEventListener("click", render);

function render() {
  const q = document.getElementById("busqueda").value.toLowerCase();
  const filtrados = contactos.filter((n) => n.toLowerCase().includes(q));
  ul.innerHTML = "";
  filtrados.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = n;
    ul.appendChild(li);
  });
}

render();
