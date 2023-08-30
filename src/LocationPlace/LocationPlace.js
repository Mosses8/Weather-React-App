import styles from './styles.module.css';
export const LocationPlace = ({ CityName, Country, Time }) => {
    return (
        
            <>
                
        
                 <div className={styles.location}>
                 {CityName} / {Country} 
            </div>
            
            </>
       
    );
};