import React, { useState, useEffect } from 'react';
import "../design/LocalWeather.css"

const weather_api_key = "7fa43d40918cc212ef1f34b51d535005"

function Current_Weather(){
    const [weather, SetWeather] = useState("")
    const [lat, SetLat] = useState(null)
    const [lon, SetLon] = useState(null)

    const [messF, SetMessF] = useState("")




    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log(position)
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                SetLat(position.coords.latitude)
                SetLon(position.coords.longitude)
    
                console.log("Latitude:", lat);
                console.log("Longitude:", lon);
              },
              (error) => {
                console.error("Error getting location:", error);
              }
            );
          } else {
            console.error("Geolocation is not supported");
          }
          return () =>{
            
          };
    }, [])

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}`

        fetch(url).then(response => response.json())
        .then(data => {
            SetMessF(`Temperature: ${((data.main.temp - 273.15) * 5 / 9 + 32).toFixed(3)} Fahrenheit\n
            Humidity: ${data.main.humidity}\nWind Speed: ${data.wind.speed} m/s\n
            Weather: ${data.weather[0].description}`)
        })

    }, [lat, lon])


    return (
        <div>
            <h3 id = "weather_mess">{messF}</h3>
        </div>
    )


}

export default Current_Weather