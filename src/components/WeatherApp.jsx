import { useState, useEffect } from "react";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

import styles from '../styles/WeatherApp.module.css';
import { Spinner } from "./Spinner";
import { Footer } from "./Footer";

export function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    console.log(weather);
    useEffect(() => {
        //Si el weather es nulo el string es vacio
        document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather]);

    //trae los datos desde una api
    async function loadInfo(city = 'santiago'){
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&Q=${city}`);
            const json = await request.json();
            setWeather(json);
        } catch (error) {
            
        }
    }

    //carga la ciudad
    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }
    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather ? <WeatherMainInfo weather={weather}/> : <Spinner />}
            <Footer />
        </div>
    )
}
