import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({updateFunc,updateErr}){
    let [place,setPlace]=useState("");
    var GEOCODE_API_KEY,WEATHER_API_KEY;
    if(import.meta.env.MODE!='production'){
        WEATHER_API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
        GEOCODE_API_KEY=import.meta.env.VITE_GEOCODE_API_KEY;
    }
    const GCODE_URL="https://geocode.maps.co/search";
    const WEATHER_URL="https://api.openweathermap.org/data/2.5/weather";

    let getCoOrd=async(address)=>{
        let res=await fetch(`${GCODE_URL}?q=${address}&api_key=${GEOCODE_API_KEY}`);
        let jsonRes=await res.json();
        if(!jsonRes[0])
            updateErr(true);
        else{
            updateErr(false);
        let lat=jsonRes[0].lat;
        let lon=jsonRes[0].lon;
        getWeather(lat,lon);
        }        
    }

    let getWeather=async(lat,lon)=>{
        let res=await fetch(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        let jsonRes=await res.json();
        let info={
            location: place,
            main: jsonRes.main,
            sunInfo: jsonRes.sys,
            weather: jsonRes.weather[0],
            wind: jsonRes.wind,
        };
        if(!info.main){
            updateErr(true);
        }
        else
            updateErr(false);

        updateFunc({info});
    }

    let handleText=(event)=>{
        setPlace(event.target.value);
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        getCoOrd(place.replace(' ','+'));
        setPlace("");
    }
    return(
    
    <div className='SearchBox'>
        <form action="#" onSubmit={handleSubmit}>
            <TextField id="outlined-basic"  
                label="Enter city" 
                variant="outlined" 
                required
                value={place}
                onChange={handleText} />
            <br /><br />
            <Button variant="contained"
                type='submit'>
                    Search
            </Button>
        </form>
    </div>
    )
}