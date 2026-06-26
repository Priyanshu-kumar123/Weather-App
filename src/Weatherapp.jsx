import SearchBox from "./searchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function Weatherapp(){
    const[weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.84 ,
        humidity:47 ,
        temp:25.05,
        tempMax:25.05,
        tempMin:25.05,
        weather:"haze"

    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);

    }

    return(
        <div style={{textAlign:"center"}}>
               <h2>Weather App by Delta</h2>
               <SearchBox updateInfo={updateInfo}/>
               <InfoBox info={weatherInfo}/>
        </div>
    )
    
}