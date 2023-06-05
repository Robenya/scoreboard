let contador = document.getElementById("contador")
let cuenta = 0

contador.textContent = cuenta

function agregar() {
    cuenta++
    contador.textContent = cuenta
}

function quitar() {
    cuenta--
    contador.textContent = cuenta
}

