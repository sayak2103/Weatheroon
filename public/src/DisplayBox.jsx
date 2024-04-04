import './DisplayBox.css';
export default function DisplayBox({WeatherInfo}){
    const ICON_PNG_LINK="https://openweathermap.org/img/wn/";

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if(WeatherInfo.main)
    return(
        <div className="DisplayBox">
            <div className="top">
                <div className="loc">
                    <span style={{fontSize:50}}>{capFirstLetter(WeatherInfo.location)}</span>
                    <br />
                    <span style={{fontSize:20}}>{`${WeatherInfo.sunInfo.country}`}</span>
                </div>
                <div className="img">
                    <img src={`${ICON_PNG_LINK}${WeatherInfo.weather.icon}@2x.png`} alt="" />
                    <br />
                    <span style={{fontSize:20}}>{`${WeatherInfo.weather.description}`}</span>
                </div>
            </div>
            <div className="temp">
                <span style={{fontSize: 20}}>Temperature (&deg;C)</span>
                <p>{Math.round(WeatherInfo.main.temp)}</p>
            </div>
            <div className="details">
                    <span>Feels like : <b>{`${WeatherInfo.main.feels_like}`}&deg;C</b></span>
                    <span>Max temperature : <b>{`${WeatherInfo.main.temp_max}`}&deg;C</b></span>
                    <span>Min temperature : <b>{`${WeatherInfo.main.temp_min}`}&deg;C</b></span>
                    <span>Humidity : <b>{`${WeatherInfo.main.humidity}`}%</b></span>
                    <span>Pressure : <b>{`${WeatherInfo.main.pressure}`} hPa</b></span>
                    <span>Wind : 
                    <b>{`${WeatherInfo.wind.speed}`} kmph</b></span>
            </div>
        </div>
    )
    else
    return(<></>);
}

/*
Sample WeatherInfo
{
    "main": {
        "temp": 32.97,
        "feels_like": 39.97,
        "temp_min": 32.97,
        "temp_max": 32.97,
        "pressure": 1006,
        "humidity": 66
    },
    "sunInfo": {
        "type": 1,
        "id": 9114,
        "country": "IN",
        "sunrise": 1711670517,
        "sunset": 1711714839
    },
    "weather": {
        "id": 721,
        "main": "Haze",
        "description": "haze",
        "icon": "50d"
    },
    "wind": {
        "speed": 3.09,
        "deg": 110
    }
}
*/