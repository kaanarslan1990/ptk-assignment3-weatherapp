import React,{useEffect, useState} from 'react'
import {createContext} from "react"
import {locations} from "../location/Location";
import axios from "axios"
import styles from "../styles.module.css"

const WeatherContext = createContext();

export const WeatherProvider= ({children})=>{
    
    const [location,setLocation] = useState(locations)
    
    const [loca,setLoca] = useState([])
    const [daily, setDaily] = useState([])
    const api_key ="67294179d0226b6e2ebdf4d312ea0119" //process.env.API_KEY
    
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${loca.slice(0,7)}&lon=${loca.slice(8,18)}&exclude=weekly&appid=${api_key}`
    
    
     

    const values = {location,setLoca,daily, setLocation}

    useEffect( () => {
        axios.get(url)
        .then(res => setDaily(res.data.daily.map(df => {
            return {
                min : df.temp.min,
                max :  df.temp.max,
                weather : df.weather[0].description,
                icon:df.weather[0].icon,
                date : df.dt
            }
        })))
      
        //.then(res)
        
    }, [loca,url]);
    
    return (
        <WeatherContext.Provider value={values} className={styles.app}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext ;