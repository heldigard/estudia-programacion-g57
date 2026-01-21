let data = [];
const btn = document.getElementById("btn");
const tabla = document.getElementById("tabla");

btn.addEventListener("click", render);

async function cargar() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await res.json();
  render();
}

function render() {
  const q = document.getElementById("filtro").value.toLowerCase();
  tabla.innerHTML = "";
  data.filter((u) => u.name.toLowerCase().includes(q))
      .forEach((u) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${u.name}</td><td>${u.email}</td>`;
        tabla.appendChild(tr);
      });
}

cargar();
