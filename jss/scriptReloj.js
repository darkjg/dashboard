const reloj= document.getElementById("reloj");
//let intervalID = setInterval(actualizar, 500);

function actualizar(){
    d = new Date();
    let horas = ("0" + d.getHours()).slice(-2);
    let mins = ("0" + d.getMinutes()).slice(-2);
    let seg = ("0" + d.getSeconds()).slice(-2);
    reloj.innerHTML=`<div id=horaWidget><h3>${horas}:${mins}:${seg}  </h3><p> ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}</P></div>`
   
}

