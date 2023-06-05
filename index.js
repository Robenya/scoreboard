let contador = document.getElementById("contador")
let cuenta = 0

contador.textContent = cuenta

function agregar() {
    cuenta += 1
    contador.textContent = cuenta
}

function quitar() {
    cuenta -= 1
    contador.textContent = cuenta
}