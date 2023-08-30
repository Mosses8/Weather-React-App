import styles from './styles.module.css';

export const WeatherDay = ({ min, max, weatherkey, weatherType, day }) => {
    return (
        
        <>
            <div className={styles.day}>
            {day}
            </div>
            {weatherType}
                <img src={`${weatherkey}`} alt={weatherType} />
        
            <div>
               
                {min}°C  / {max}°F
                
            </div>
            
            </>
       
    );
};