const contra= document.getElementById("contra");
const arrayMayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const arrayMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arraySimbolos = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
let contrasena;
let contrasenaFinal;
let numeroDeCaracteresContraseña = 12;
function CrearContraseña(numeroDeCaracteresContraseña) {
    contrasena = "";
    for (let i = 0; i < numeroDeCaracteresContraseña; i++) {
        let elecion = Math.floor(Math.random() * (4 - 1 + 1) + 1)
        switch (elecion) {
            case 1:
                ElecionDeCaracter(arrayMayusculas);
                break;
            case 2:
                ElecionDeCaracter(arrayMinusculas);
                break;
            case 3:
                ElecionDeCaracter(arrayNumeros);
                break;
            case 4:
                ElecionDeCaracter(arraySimbolos);
                break;

        }
    }
    
    return Comprobacion(contrasena);

}

function ElecionDeCaracter(arrayelegido) {

    let numeroArray = Math.floor(Math.random() * (arrayelegido.length));
    contrasena += arrayelegido[numeroArray];
}

//comprobaciones
function Comprobacion(contrasena) {
    let bandera;
    let bandera2;
    let bandera3;
    let bandera4;
    let banderaTotal;
    bandera = ComprobarArray(arrayMayusculas);
    bandera2 = ComprobarArray(arrayMinusculas);
    bandera3 = ComprobarArray(arrayNumeros);
    bandera4 = ComprobarArray(arraySimbolos);
    banderaTotal=bandera && bandera2 && bandera3 && bandera4;
  

    if (banderaTotal) {
        contrasenaFinal=contrasena        
        return contrasenaFinal;
    } 
}
function ComprobarArray(arrayelegido) {
    let Comprobacion=false;
    arrayelegido.forEach(letra => {
        if (contrasena.includes(letra)) {
            Comprobacion = true;
        }
    });
    return Comprobacion;
}
//llamada de funcion
function RevisarUndefined(){
    contrasenaFinal=undefined;
    while (contrasenaFinal==undefined) {
        contrasenaFinal= CrearContraseña(numeroDeCaracteresContraseña)
    }
    return contrasenaFinal;
}


function templatePaswordIndex(){
    let string=RevisarUndefined();
    contra.innerHTML+=`<div id=contraseña> la contraseña es: ${string}</div>`
}


//templatePaswordIndex();