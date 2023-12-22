const divenlace = document.getElementById("enlace");
let arrayEnlaces = [];
let enlacesGuardados = localStorage.getItem('arrayEnlaces');
let objetoeliminar;



function nuevoconjutno(nombre, url, indice) {
    this.nombre = nombre;
    this.url = url;
    this.indice = indice;

}

function templateEnlaces() {
    divenlace.innerHTML += `<div id="introducion" >
    Añade tu enlace de interés
    <form id="formenlace"> 
        <input id="nombrelink" type="text" placeholder="nombre de tu enlance"></input> 
            <input id="linkurl" type="text" placeholder="Pega aqui tu url"></input></div>
            <input type="submit" id="submit" class="boton" value="añadir enlace"></input>
    </form>
    <div id="lista">
        <ul id=listaDeEnlaces>
        </ul>
    </div>
    `
}

templateEnlaces();
cargarStorage();


const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    let nombrelink = document.getElementById("nombrelink");
    let linkurl = document.getElementById("linkurl");
   if(linkurl.value.startsWith("www")){
    linkurl.value="https://"+linkurl.value;
   }
    if (nombrelink.value != "" && linkurl.value != "") {
        let conjunto = new nuevoconjutno(nombrelink.value, linkurl.value, arrayEnlaces.length + 1);
        arrayEnlaces.push(conjunto);
        actualizarStorage();
        AñadirALista();

    }
})



function AñadirALista() {
    let listaDeEnlaces = document.getElementById("listaDeEnlaces");
    listaDeEnlaces.innerHTML = "";

    arrayEnlaces.forEach((objeto, i, arrayEnlaces) => {
        let objetoLista = document.createElement('li');
        let elemento = document.createElement('a');
        let botonEliminar = document.createElement('button');

        elemento.href = objeto.url;
        elemento.target = "_blank";
        elemento.textContent = objeto.nombre;

        botonEliminar.textContent = 'X';
        botonEliminar.addEventListener("click", function () {

            let nombre = objeto.nombre;
            let url = objeto.url;
            let indice = objeto.indice;
            objetoeliminar = "";
            objetoeliminar = arrayEnlaces.filter(enlace => enlace.nombre == nombre && enlace.url == url && enlace.indice == indice);
            let indexeliminar = findWithAttr(arrayEnlaces, "nombre", objetoeliminar[0].nombre);
            console.log(indexeliminar)
            if (indexeliminar == 0) {
                arrayEnlaces.splice(0, 1)
            } else {
                arrayEnlaces.splice(indexeliminar, i)
            }

            listaDeEnlaces.removeChild(objetoLista)
            actualizarStorage();





        })
        objetoLista.appendChild(elemento);
        objetoLista.appendChild(botonEliminar);
        listaDeEnlaces.appendChild(objetoLista);

    });

}


function findWithAttr(array, attr, value) {

    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

function cargarStorage() {


    if (localStorage.getItem("lista") != null) {
        let variable = JSON.parse(localStorage.getItem("lista"))
        arrayEnlaces = variable;
        AñadirALista()
    }
}

function actualizarStorage() {
    console.log(arrayEnlaces)
    localStorage.setItem("lista", JSON.stringify(arrayEnlaces))
    AñadirALista()
}