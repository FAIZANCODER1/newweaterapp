import React,{useState ,useEffect} from 'react';
import "./styles.css"
import { Weathercard } from './Weathercard';

const Weatherapi = () => {
    const [searchvalue, setsearchvalue] = useState("mumbai");
    const [tempinfo, settempinfo] = useState({});
    const getweatherinfo = async()=>{
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=f75ae5387e47083e3d770bbb0694dfbc`
const res= await fetch(url);
const data= await res.json();
console.log(data)
const {temp, humidity , pressure} =data.main;
const {main :weathermood}=data.weather[0];
const {name}=data;
const {speed}=data.wind;
const {country , sunset}=data.sys;


const mynewweather={
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
}
settempinfo(mynewweather)

}

catch(error){
    console.log(error)

}



    }

    useEffect(() => {
        getweatherinfo();
    }, []);

    return (
        <>
        <div className="wrap">
<div className="search">
    <input type="search"
    placeholder='..search'
    autoFocus
    id='search'
    className='searchTerm'
    value={searchvalue}
    onChange={(e)=> setsearchvalue(e.target.value)}
    />

<button className="searchButton" type='button' onClick={getweatherinfo}>Search</button>

</div>



        </div>
{/* article */}


<Weathercard tempinfo={tempinfo}/>

        </>
    );
}

export default Weatherapi;
