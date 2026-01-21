const log = document.getElementById("log");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  try {
    const nums = [1, 2, 3];
    console.log("nums", nums);
    log.textContent = "Abre la consola (F12) y revisa los logs.";
    // Error intencional para practicar
    console.log(nums[5].toString());
  } catch (err) {
    console.error(err);
    log.textContent = `Error capturado: ${err.message}`;
  }
});
