// Plantilla base: estado + render + handlers
const state = {
  items: [],
};

const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const output = document.getElementById("output");
const list = document.getElementById("list");
const actionBtn = document.getElementById("actionBtn");

function parseNumber(value) {
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
}

function buildMessage(valueA, valueB) {
  return `A: ${valueA ?? "-"} | B: ${valueB ?? "-"}`;
}

function render() {
  list.innerHTML = "";
  state.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function handleAction() {
  const valueA = inputA.value.trim();
  const valueB = inputB.value.trim();

  output.textContent = buildMessage(valueA, valueB);
  if (valueA || valueB) {
    state.items.push(`${valueA || "(vacío)"} - ${valueB || "(vacío)"}`);
    render();
  }
}

actionBtn.addEventListener("click", handleAction);

// Inicial
render();
