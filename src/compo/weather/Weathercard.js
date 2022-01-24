import React, {useEffect} from 'react'

export const Weathercard = ({tempinfo}) => {
const [weathermoods, setweathermoods] = React.useState();

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    }=tempinfo;
let sec = sunset;
let date= new Date(sec * 1000);
console.log(date)
let new_str=`${date.getHours()}:${date.getMinutes()}`
console.log(new_str)

useEffect(() => {
    if (weathermood) {
        switch (weathermood) {
            case 'Clouds': setweathermoods("wi-day-cloudy")
                
                break;
                case 'Haze':
                    setweathermoods("wi-fog")
        break;
        case 'Smoke':
            setweathermoods("wi-fog")
            break;
        case 'Clear':
            setweathermoods("wi-day-sunny")
            break;
            default:
                setweathermoods("wi-day-sunny")
                break;
        }
        
    }
    
}, [weathermood]);

    return (
        <>
            <article className="widget">
    <div className='weatherIcon'>
        <i className={`wi ${weathermoods}`}>  </i>
    </div>
    <div className="weatherInfo">
        <div className="temperature"><span>{temp}&deg;</span></div>
        <div className="description">
        <div className="weatherCondition">
    {weathermood}
</div>
<div className="place">{name},{country}</div>
        </div>

    </div>
<div className='date'>{ new Date().toLocaleString()}</div>

{/* our 4 section */}
<div className="extra-temp">
    <dev className="temp-info-minmax">
        <div className="two-sided-section">
            <p>
                <i className="wi wi-sunset"></i>

            </p>
            <p className="extra-info-leftside">
            {new_str} PM <br/>
                sunset
            </p>
        </div>
        <div className="two-sided-section">
            <p>
                <i className="wi wi-humidity"></i>

            </p>
            <p className="extra-info-leftside">
            {humidity}<br/>
            humidity
            </p>
        </div>
    </dev>
    <div className="weather-extra-info">
    <div className="two-sided-section">
            <p>
                <i className="wi wi-rain"></i>

            </p>
            <p className="extra-info-leftside">
            {pressure}<br/>
               pressure
            
            </p>
        </div>
        <div className="two-sided-section">
            <p>
                <i className="wi wi-Wind"></i>

            </p>
            <p className="extra-info-leftside">
            {speed} <br/>
         speed
            </p>
        </div>
    </div>
</div>


</article>
        </>
    )
}
