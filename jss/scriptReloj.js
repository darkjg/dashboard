const reloj = document.getElementById("reloj");
let intervalID = setInterval(actualizar, 500);

function actualizar() {
    d = new Date();
    let horas = ("0" + d.getHours()).slice(-2);
    let mins = ("0" + d.getMinutes()).slice(-2);
    let seg = ("0" + d.getSeconds()).slice(-2);
    let frase =Frases(horas,mins)
    reloj.innerHTML = `<div id=horaWidget>
                            <p class="ocultar">Son las</p>
                            <h3>${horas}:${mins}:${seg}  </h3>
                            <p>${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}</P>
                            <p class="ocultar">${frase}</p>
                        </div>`

}

function Frases(hora, minutos) {
    let string = "";
 
    //Es hora de descansar. Apaga y sigue mañana
    if (hora >=0 && hora <= 7) {
        if (hora == 0 ) {
            if(minutos > 0){
                string = "Es hora de descansar. Apaga y sigue mañana"
                }
        } else {
            string = "Es hora de descansar. Apaga y sigue mañana"
        }
    }
    //Buenos días, desayuna fuerte y a darle al código
    if (hora >=7 && hora <= 12) {
        
        if (hora == 7)   {
            if(minutos > 0){
            string = "Buenos días, desayuna fuerte y a darle al código"
            }
        } else {
            string = "Buenos días, desayuna fuerte y a darle al código"
        }
    }
    //Echa un rato más pero no olvides comer
    if (hora >=12 && hora <= 14) {        
        if (hora == 12)   {
            if(minutos > 0){
            string = "Echa un rato más pero no olvides comer"
            }
        } else {
            string = "Echa un rato más pero no olvides comer"
        }
    }
    //Espero que hayas comido
    if (hora >=14 && hora <= 16) {
        if (hora == 14)   {
            if(minutos > 0){
            string = "Espero que hayas comido"
            }
        } else {
            string = "Espero que hayas comido"
        }
    }
    //Buenas tardes, el último empujón
    if (hora >=16 && hora <= 18) {
        if (hora == 16)   {
            if(minutos > 0){
            string = "Buenas tardes, el último empujón"
            }
        } else {
            string = "Buenas tardes, el último empujón"
        }
    }
    //Esto ya son horas extras, ... piensa en parar pronto
    if (hora >=18 && hora <= 22) {
        if (hora == 18)   {
            if(minutos > 0){
            string = "Esto ya son horas extras, ... piensa en parar pronto"
            }
        } else {
            string = "Esto ya son horas extras, ... piensa en parar pronto"
        }
    }

    //Buenas noches, es hora de pensar en parar y descansar
    if (hora >=22 && hora <= 0) {
        if (hora == 22)   {
            if(minutos > 0){
            string = "Buenas noches, es hora de pensar en parar y descansar"
            }
        } else {
            string = "Buenas noches, es hora de pensar en parar y descansar"
        }
    }
    return string;
}