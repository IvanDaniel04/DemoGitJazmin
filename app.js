const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  msg.textContent = "Mensaje: Hola desde otra rama";
});

