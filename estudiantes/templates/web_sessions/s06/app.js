const items = [];
const btn = document.getElementById("btn");
const ul = document.getElementById("lista");

btn.addEventListener("click", () => {
  const valor = document.getElementById("item").value.trim();
  if (!valor) return;
  items.push(valor);
  document.getElementById("item").value = "";
  render();
});

function render() {
  ul.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  }
}
