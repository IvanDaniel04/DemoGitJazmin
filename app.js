const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  msg.textContent = "Mensaje: Ahora de la rama de prueba";
});

