import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from './styles.module.css';
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { LocationPlace } from "../LocationPlace/LocationPlace";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";

export const App = () => {

  const [city, setCity] = useState('Addis Ababa');

  const [weatherInfo, setWeatherInfo] = useState();
  const [locationInfo, setLocationInfo] = useState();
  const [currentWeather, setcurrentWeather] = useState();

 

  useEffect(() => {
    if (city) {
   
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=05f520321126476a94d130551233008&q=${city}&days=5&aqi=no&alerts=no`
      )
        .then(res => res.json())
        .then(res => {
          setLocationInfo(res.location)
          setcurrentWeather(res.current)
          setWeatherInfo(res.forecast.forecastday
            .slice(1, 5).map(df => {
              return {
                min: df.day.avgtemp_c,
                max: df.day.avgtemp_f,
                weatherType: df.day.condition.text,
                weatherkey: df.day.condition.icon,
                days: days[new Date(df.date).getDay()],
              }
            }))

        })
    
        .catch(() => {
          window.alert("Please Enter a valid City");
          window.location.reload(false);
        });
    }
  }, [city]);



  return (
    <div className={styles.all}>
      <LocationSearch
        onCity={zCity => {
          setCity(zCity.city)
        }} />
      
      <div>
          {locationInfo && <LocationPlace
          CityName={locationInfo.name}
          Country={locationInfo.country}
           />
          }
          
        </div>
      
      <div>
          {currentWeather && <CurrentWeather
          tempc={currentWeather.temp_c}
          tempf={currentWeather.temp_f}
          type={currentWeather.condition.text}
          icon={currentWeather.condition.icon}
          Time={currentWeather.last_updated}/>
          }
          
        </div>
     
    
      <div className={styles.main}>
      
        {!!weatherInfo && weatherInfo.map((i, index) => (
          <div className={styles.day} key={index}>
            <WeatherDay min={i.min}
              max={i.max}
              weatherType={i.weatherType}
              weatherkey={i.weatherkey}
              day={i.days} />
          </div>))}
      </div>
    </div>
  );
}

export default App;
