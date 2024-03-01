import { useEffect, useState } from 'react';
import WeatherService from '../../api/WeatherService';
import { WeatherData } from '../../types/weather';
import styles from './WeatherCard.module.css';
import { City } from '../../types/types';
import { formatHoursAndMinutes, formatMonthAndDayWithOrdinal } from '../../utils/timeUtils';
import { firstLetterToUppercase } from '../../utils/utils';

interface WeatherCardProps {
  city: City;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherService = new WeatherService();
        const data: WeatherData = await weatherService.getWeatherByCoordinates(city.lat, city.lon);
        setWeatherData(data);
        // setError null
      } catch (error) {
        console.error('Failed to fetch weather data', error);
        // setError
        setWeatherData(null);
      }
    };
    fetchWeatherData();
  }, [city]);

  if (weatherData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cityWeather}>
        <div>
          <h2>{weatherData.name}</h2>
          <span>{firstLetterToUppercase(weatherData.weather[0].description)}</span>
        </div>
        <div className={styles.temperature}>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Image" />
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <p style={celsiusIconStyle}>°C</p>
            <p>{Math.round(weatherData.main.temp)}</p>
          </div>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <div>
          <h3>{formatMonthAndDayWithOrdinal(weatherData.dt)}</h3>
          <span className={styles.graySecondaryText}>{formatHoursAndMinutes(weatherData.dt)}</span>
        </div>
        <div className={styles.additionalWeatherData}>
          <span>{`Wind: ${weatherData.wind.speed} m/s`}</span>
          <span>{`Humidity: ${weatherData.main.humidity} %`}</span>
          <span>{`Precipitation (3 h): ${weatherData.rain?.three_hour ?? 0} mm`}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

const celsiusIconStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: '13pt',
  textAlign: 'center',
  transform: 'translate(90%, -20%)',
} as const;
