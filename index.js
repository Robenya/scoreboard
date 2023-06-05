let contador = document.getElementById("contador")
let cuenta = 0
contador.textContent = "Usa esto para contar: " + cuenta

function agregar() {
    cuenta += 1
    contador.textContent = "Usa esto para contar: " + cuenta
}

function quitar() {
    cuenta -= 1
    contador.textContent = "Usa esto para contar: " + cuenta
}