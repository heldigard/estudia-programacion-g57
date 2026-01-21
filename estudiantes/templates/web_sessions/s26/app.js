const tareas = [];
const btn = document.getElementById("btn");
const ul = document.getElementById("lista");

btn.addEventListener("click", () => {
  const texto = document.getElementById("tarea").value.trim();
  if (!texto) return;
  tareas.push({ texto, done: false });
  document.getElementById("tarea").value = "";
  render();
});

function toggle(i) {
  tareas[i].done = !tareas[i].done;
  render();
}

function render() {
  ul.innerHTML = "";
  tareas.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox" ${t.done ? "checked" : ""} onchange="toggle(${i})" /> ${t.texto}</label>`;
    ul.appendChild(li);
  });
}
