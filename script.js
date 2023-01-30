var textarea = document.getElementById("texto");
var mensaje = document.getElementById("mensaje");

var claves = [["e", "enter"], 
            ["i", "imes"], 
            ["a", "ai"], 
            ["o", "ober"],
            ["u", "ufat"]];

function btnencriptar() {
    toString(textarea.value)
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btndesencriptar() {
    toString(textarea.value)
    var textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btncopiar(){
    var copia = mensaje.value;
    navigator.clipboard.writeText(copia);
    alert("Mensaje copiado!")
}

function encriptar(entrada){
    entrada = entrada.toLowerCase();
    for(let i = 0; i < claves.length; i++){
        if(entrada.includes(claves[i][0])){
            entrada = entrada.replaceAll(claves[i][0], claves[i][1]);
        }
    }
    return entrada
}

function desencriptar(entrada){
    entrada = entrada.toLowerCase();

    for(let i = 0; i < claves.length; i++){
        if(entrada.includes(claves[i][1])){
            entrada = entrada.replaceAll(claves[i][1], claves[i][0]);
        }
    }
    return entrada
}