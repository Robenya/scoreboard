let contador = document.getElementById("contador")
let cuenta = 0

function agregar() {
    cuenta += 1
}

function quitar() {
    cuenta -= 1
}

contador.textContent = "Usa esto para contar: " + cuenta