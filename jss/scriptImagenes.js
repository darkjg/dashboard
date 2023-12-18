
let intervalImg = setInterval(CambiarImagen, 15000);
let carpeta = "/dashboard/img/ImagenesAleatorias";
let arrayImagenes=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]
function CambiarImagen(){
    let valorImagen= Math.floor(Math.random() * (arrayImagenes.length - 0) + 0);
    let imagenACambiar=`${carpeta}/${arrayImagenes[valorImagen]}`
    document.body.style.backgroundImage=`url(${imagenACambiar})  `;
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundRepeat="no-repeat"
    
}
CambiarImagen();