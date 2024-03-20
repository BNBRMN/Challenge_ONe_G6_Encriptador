const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = () => encriptarDesencriptar('encriptar');
botonDesencriptar.onclick = () => encriptarDesencriptar('desencriptar');

btnCopiar.addEventListener("click", () => {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado"); 
});

function encriptarDesencriptar(accion) {
    ocultarAdelante();
    const cajatexto = document.querySelector(".cajatexto").value;
    resultado.textContent = accion === 'encriptar' ? encriptarTexto(cajatexto) : desencriptarTexto(cajatexto);
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let textoFinal = "";
    for (let caracter of mensaje) {
        switch (caracter) {
            case 'a': textoFinal += "ai"; break;
            case 'e': textoFinal += "enter"; break;
            case 'i': textoFinal += "imes"; break;
            case 'o': textoFinal += "ober"; break;
            case 'u': textoFinal += "ufat"; break;
            default: textoFinal += caracter;
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    return mensaje.replace(/ai/g, 'a')
                   .replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
}
