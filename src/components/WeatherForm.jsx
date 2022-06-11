import { useState } from "react";

import styles from '../styles/WeatherForm.module.css';

export function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState('');

    //traemos el valor del input
    function onChange(e){
        const value = e.target.value;

        if(value != ""){
            setCity(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        //cada vez que cambie la city
        onChangeCity(city);
    }
    return (
        <div>
            <div>
                <h1 className={styles.titleWeather}>WeatherApp con React</h1>
            </div>
            <form onSubmit={handleSubmit} className={styles.container}>
                <input type="text" onChange={onChange} className={styles.input}
                placeholder="Enter the city"/>
            </form>
        </div>
    )
}
