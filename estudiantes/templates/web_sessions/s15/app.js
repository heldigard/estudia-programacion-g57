const btn = document.getElementById("btn");
const usuario = document.getElementById("usuario");

btn.addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  usuario.innerHTML = `<h3>${data.name}</h3><p>${data.email}</p><p>${data.phone}</p>`;
});
