import './Home.css';
import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import fb_app from './fb_database.js'
import { getDatabase, ref, set, get, child } from "firebase/database";

function App(){
  return (
    <div id="home_background">
        <Title />
        <InputCity />
    </div>
    
  )
}

function Title(){
  const theTitle = "Weather App";
  return (
    <div>
      <h1 id = "theTitle">{theTitle}</h1>
    </div>
  )
}

function InputCity(){
  const [celsius, setCelsius] = useState(false)

  const [formData, setFormData] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) =>{
    setIsSubmitted(false)
    setFormData(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault(); 
    // console.log(formData);
    setIsSubmitted(true);
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label id = "input-city">
          <input  type = "text" onChange = {handleChange} placeholder='Input the City, Country'/>
        </label>
        
        <div id = "submit-city">
          <button  type = "submit">Submit</button> 
        </div>
       
      </form>

    
    {isSubmitted && <Output name = {formData} celsius = {celsius}/>}
    <Temp_type variable = {celsius} setVariable = {setCelsius}/>
    </div>
    
  )
}

function Output(prop){

  const [messC, setMessC] = useState("")
  const [messF, setMessF] = useState("")

  const [valid_city, setValid] = useState(true)

  const apiKey = '7fa43d40918cc212ef1f34b51d535005';
  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${prop.name},uk&APPID=${apiKey}`;

  function fetch_url(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.cod == 429){
        setMessC("Too much access")
        setMessF("Too much acesss")
      } else {
        setMessC(`Temperature: ${(data.main.temp - 273.15).toFixed(3)} Celsius
        Humidity: ${data.main.humidity}
        Wind Speed: ${data.wind.speed} m/s
        Weather: ${data.weather[0].description}`)

        setMessF(`Temperature: ${((data.main.temp - 273.15) * 5 / 9 + 32).toFixed(3)} Fahrenheit
        Humidity: ${data.main.humidity}
        Wind Speed: ${data.wind.speed} m/s
        Weather: ${data.weather[0].description}`)
      }
      setValid(true)
      const db = getDatabase();
      const refer = ref(db)

      get(child(refer, "city/" + prop.name)).then((snapshot) => {
        const refer_city = ref(db, "city/" + prop.name)
        if (snapshot.exists()) {
          console.log(snapshot.val())
          const tmp_val = snapshot.val() + 1
          set(refer_city, tmp_val)
        } else {
          set(refer_city, 1)
        }
      }).catch((error) => {
        console.error(error);
      });
      
    })
    .catch(error => {
      console.log(error)
      setValid(false)
    });
  }
  
  
  const selectMess = () => {
    fetch_url()
    if(prop.celsius){
      return messC
    } else {
      return messF
    }
  }

  return (
    <div className='output'>
      <div className='rectangle'>
        {/* {console.log({url})} */}
        {valid_city ?  <p className='info-p'>{selectMess()}</p> : <p>Invalid city input</p>}
      </div>
    </div>
  )
}

function Temp_type({variable, setVariable}){

  const handleChange = (val) => {
    setVariable(val)
    // console.log(val)
  }

  const mess = "Check result in Celsius  "

  return(
    <div className="react-switch">
      <h4>{mess}</h4>
      <ReactSwitch  checked = {variable} onChange={handleChange} />
    </div>
  )
    
}


export default App;
