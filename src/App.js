//import GoogleFontLoader from 'react-google-font-loader';
import './App.css';
// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js"
import Layout from "./pages/Layout.js"
import Contact from './pages/Contact.js';
import History from './pages/Search_his.js';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "contact" element={<Contact />}/>
          <Route path = "submitHis" element = {<History />}/>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

// function Title(){
//   const theTitle = "Weather App";
//   return (
//     <div>
//       <h1 id = "theTitle">{theTitle}</h1>
//     </div>
//   )
// }

// function InputCity(){
//   const [formData, setFormData] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (event) =>{
//     setIsSubmitted(false)
//     setFormData(event.target.value)
//   }

//   const handleSubmit = (event) =>{
//     event.preventDefault(); 
//     console.log(formData);
//     setIsSubmitted(true);
//   }


//   return(
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label id = "input-city">
//           <input  type = "text" onChange = {handleChange} placeholder='Input the City, Country'/>
//         </label>
        
//         <div id = "submit-city">
//           <button  type = "submit">Submit</button> 
//         </div>
       
//       </form>

//     {isSubmitted && <Output name = {formData}/>}
      
//     </div>
    
//   )
// }

// function Output(city){
//   const [mess, setMess] = useState("")

//   const [valid_city, setValid] = useState(true)

//   const apiKey = '7fa43d40918cc212ef1f34b51d535005';
  
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.name},uk&APPID=${apiKey}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       setMess(`Temperature: ${data.main.temp}
//                             Humidity: ${data.main.humidity} 
//                             Wind Speed: ${data.wind.speed} m/s
//                             Weather: ${data.weather[0].description}`)
//       setValid(true)
//     })
//     .catch(error => {
//       console.log(error)
//       setValid(false)
//     });
  
//   return (
//     <div className='output'>
//       <div className='rectangle'>
//         {valid_city ?  <p>{mess}</p> : <p>Invalid city input</p>}
//       </div>
//     </div>
//   )
// }

export default App;
