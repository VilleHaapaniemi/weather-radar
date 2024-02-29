import { useEffect, useState } from 'react';
import WeatherService from '../../api/WeatherService';
import styles from './ForecastCard.module.css';
import { ForecastData } from '../../types/forecast';

const ForecastCard: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const numberOfResults = 5;
      try {
        const weatherService = new WeatherService();
        const data: ForecastData = await weatherService.getForecastByCoordinates(61.4991, 23.7871, numberOfResults);
        setForecastData(data);
        // setError null
      } catch (error) {
        console.error('Failed to fetch weather data', error);
        // setError
        setForecastData(null);
      }
    };
    fetchForecastData();
  }, []);

  console.log(forecastData);

  return (
    <article className={styles.card}>
      <span className={styles.timeText}>15:00</span>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Image" />
      <span className={styles.temperatureText}>-1 C</span>
      <div className={styles.additionalWeatherData}>
        <span>5.2 m/s</span>
        <span>20 %</span>
        <span>1 mm</span>
      </div>
    </article>
  );
};

export default ForecastCard;
