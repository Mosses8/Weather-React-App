import styles from './styles.module.css';
export const CurrentWeather = ({ tempc, tempf, type, icon, Time }) => {
    return (
        
        <>
            <div className={styles.type}>
            <img src={`${icon}`} alt={type} />
            {type}
            </div>
            
            <div className={styles.temp}>
                {tempc}°C  / {tempf}°F
            </div> 
            <div className={styles.time}>
                 Today
            </div>
            </>
       
    );
};