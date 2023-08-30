import { useState } from "react";
import styles from './styles.module.css';

export const LocationSearch = ({onCity}) => {
 
    const [city, setCity] = useState('');

    const getLocation = (city) => {
        if(city){
        onCity({ city })
        setCity('')
        } else {
            window.alert("Please Enter a city");
            setCity('');
    }
    };

    return (
        <div className={styles.inputs}>
            <input placeholder="Enter a city...."
                value={city}  
                onChange={e => setCity(e.target.value)}
           />
            <button onClick={() => getLocation(city)}>Search</button>
        </div>
    )
};