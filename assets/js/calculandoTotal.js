const cantidadInput = document.querySelector(".cantidad")
const colorInput = document.querySelector("#colorInput")
const precio = 30000
const cantidadSpan = document.querySelector(".cantidad-span")
const botonCalcular = document.querySelector("#btn-calcular")
const totalSpan = document.querySelector(".total-calculado")
const colorFinal = document.querySelector(".color-final")

botonCalcular.addEventListener("click", () => {
  cantidadSpan.textContent = cantidadInput.value;
  totalSpan.textContent = `${cantidadInput.value * precio}`;
  colorFinal.style.backgroundColor = colorInput.value;
})