import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import DisplayBox from "./DisplayBox.jsx";
import Alert from '@mui/material/Alert';


export default function WeatherApp(){
    let [weather,setWeather]=useState({});
    let [err,setError]=useState(false);

    let updateError=(b)=>{
        setError(b);
    }

    let updateWeather=({info})=>{
        setWeather(info);
    }
    return(
        <div className="WeatherApp">
            <h1 style={{fontSize:40}}>Weatheroon</h1>
            <SearchBox updateFunc={updateWeather} updateErr={updateError}></SearchBox>
            <br /><br />
            {!err? 
                <DisplayBox WeatherInfo={weather}></DisplayBox> : 
                <Alert severity="error">No such place found !!</Alert>
            }
        </div>
    );
}