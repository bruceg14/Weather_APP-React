// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(){
  return (
    <div>
      <Title />
      <InputCity />
    </div>
    
  )
}

function Title(){
  const theTitle = "Weather App";
  return (
    <div>
      <h1 id = "theTitel">{theTitle}</h1>
    </div>
  )
}

function InputCity(){
  const [formData, setFormData] = useState('');

  const handleChange = (event) =>{
    setFormData(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault(); 
    console.log(formData);
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type = "text" onChange = {handleChange} />
        </label>
        
        <button type = "submit">Submit</button> 
      </form>

    <Output name = {formData}/>
      
    </div>
    
  )
}

function Output(city){
  const [mess, setMess] = useState("")

  const apiKey = '7fa43d40918cc212ef1f34b51d535005';
  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.name},uk&APPID=7fa43d40918cc212ef1f34b51d535005`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      setMess(`Temperature: ${data.main.temp} &deg;C<br>
                            Humidity: ${data.main.humidity} %<br>
                            Wind Speed: ${data.wind.speed} m/s`)
    })
    .catch(error => console.log(error));
  
  return (
    <div>
      <p>{mess}</p>
    </div>
  )
}

export default App;
