let contador = document.getElementById("contador")
let cuenta = 0

function agregar() {
    cuenta++
}

function quitar() {
    cuenta--
}

contador.textContent = cuenta