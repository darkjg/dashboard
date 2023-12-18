//endpoint para recoger el clima de ahora
//https://api.weatherapi.com/v1/current.json?key=dc5cb9c0af574e3f832104604230712&q=cangas&aqi=yes
//endpoint para recoger el clima de todo el dia
//https://api.weatherapi.com/v1/history.json?key=dc5cb9c0af574e3f832104604230712&q=cangas&dt=2024-01-06


let d = new Date();
let hoyWheather = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
const weatherapi = document.getElementById("wheater");

const getClima = async () => {
    let datos = []
    try {
        if (Lugar != null) {
            const response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + apikey + "&q=" + Lugar + "&aqi=yes ");
            const response2 = await fetch(`https://api.weatherapi.com/v1/history.json?key=${apikey}&q=${Lugar}&dt=${hoyWheather}`);
            if (!response && !response2) {
                throw new Error("Error");
            } else {
                const data = await response.json();
                const data2 = await response2.json();
                datos.unshift(data);
                datos.unshift(data2["forecast"]["forecastday"][0]["hour"]);
                return datos;
            }
        }
    } catch (error) {
        console.log("Errror al obtener")
    }
}

const templateWeatherIndex = (datos) => {
    let imgCelsius;
    try {
      
        if(window.location.href=="https://darkjg.github.io/dashboard/index.html"|| window.location.href=="https://darkjg.github.io/dashboard/"){
            console.log("Entro",window.location.href)
            imgCelsius = "img/celsius.png";
        }else {
            console.log("no Entro",window.location.href)
            imgCelsius = "../img/celsius.png";
        }

        const location = datos[1]["location"];
        const current = datos[1]["current"]

        weatherapi.innerHTML = `<section class="hoy">
                                <div class="datos">
                                        <p>Lugar:${location["name"]}</p>
                                        <p>Region:${location["region"]}</p>
                                        <p>Pais:${location["country"]}</p>
                                </div>
                                <div class=imagen>
                                    <div class=grande>
                                        <img src="${current["condition"]["icon"]}"
                                        <p>${current["temp_c"]}<img src="${imgCelsius}"</p>
                                    </div>
                                    <div>
                                        <p>Precipitaciones:${current["precip_mm"]}%</p>
                                        <p> Humedad:${current["humidity"]} % </p>
                                        <p>Viento:${current["wind_kph"]}  Km/h</p>                                    
                                    </div>
                                </div>
                            </section>
                                <div class="lista" id="lista">
                            </div>
                            `;
        const lista = document.getElementById("lista");

        datos[0].forEach(dato => {
            let fecha = dato["time"];
            const d = new Date(fecha);
            let horas = ("0" + d.getHours()).slice(-2);
            let mins = ("0" + d.getMinutes()).slice(-2);
            lista.innerHTML += `<div class="datoLista">
                                <img src="${dato["condition"]["icon"]}"/>
                                <p>${horas}:${mins}</p>
                                <p>${dato["temp_c"]}º</p>        
                            </div>`;
        });

    } catch (error) {

    }
}

//getClima().then((data => templateWeatherIndex(data)))

