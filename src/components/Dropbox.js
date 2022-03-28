import React from 'react';
import {useContext,} from "react"
import WeatherContext from '../context/WeatherContext';
import styles from "../styles.module.css"


function Dropbox() {


    const {location, setLoca} = useContext(WeatherContext) 
    const handleChange = (e) => {
        setLoca(e.target.value);
      }
   

    return (
            <div className={styles.dropbox}>
                <select style={{width:"150px"}} className={styles.option} name="location" id="location" onChange={handleChange} >
                    {location.map((item,index) =>
                    <option key={index} value={item.lat} name = {item.name}   >
                            {item.name}
    
                        </option>
                )}
            </select>
            </div>
           
        
    )
                }
            

export default Dropbox