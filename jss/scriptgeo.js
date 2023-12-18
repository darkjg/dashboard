let geo = "https://api.bigdatacloud.net/data/reverse-geocode-client";
let navi = navigator.geolocation
//'https://nominatim.openstreetmap.org/reverse?lat=41.63125237270472&lon=-4.742565007934635&format=json';
let Lugar = "Cangas"

getClima().then((data => templateWeatherIndex(data)))
async function obtenerPosicion() {
    let lat
    let long
    navi.watchPosition((posicion) => {
        lat = posicion.coords.latitude;
        long = posicion.coords.longitude;
        let geoloca = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`;
        fetch(geoloca).then(Response => {
            if (!Response.ok) {
                throw new Error("Error en la solicitud");
            } else {
                return Response.json();
            }
        }).then(datos => {
            Lugar = datos.address.borough;
            getClima().then((data => templateWeatherIndex(data)))
            return Lugar;
        }).catch(error => {
            throw new Error("Error en la solicitud");
        })
    })
}


//obtenerPosicion()




