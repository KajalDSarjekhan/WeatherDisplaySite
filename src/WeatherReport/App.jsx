import { useState } from "react"
import './Style.css'

const App =()=>{
  const [search,setSearch]=useState("")
  const [weather,setWeather]=useState({})

  const api ={
    key:"aa3a5eb640ff5c04c034b953c7f6fe4b",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }

  function handleSearch(){
    fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(d=>setWeather(d))
    
  }

  return (
    <div className="box1">
          <section className="box2">
            <input type="search" onChange={(e)=>setSearch(e.target.value)} className="inp"/>
            <button onClick={handleSearch} className="search">Search</button>
            {(typeof weather.main!=="undefined")?(
              <div>
                <p>Location : {weather.name}</p>
                <p>Temp : {weather.main.temp}</p>
                <p>Main : {weather.weather[0].main}</p>
                <p>Description : {weather.weather[0].description}</p>
              </div>
            ):("Not Found")}
          </section>
    </div>
  )
}
export default App