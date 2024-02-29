import { useEffect, useState } from 'react';
import { City } from '../../types/types';
import ForecastCard from '../cards/ForecastCard';
import styles from './ForecastContainer.module.css';
import { ForecastData } from '../../types/forecast';
import WeatherService from '../../api/WeatherService';

interface ForecastContainerProps {
  city: City;
}

const ForecastContainer: React.FC<ForecastContainerProps> = ({ city }) => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherService = new WeatherService();
        const data: ForecastData = await weatherService.getForecastByCoordinates(city.lat, city.lon, 5);
        setForecastData(data);
        // setError null
      } catch (error) {
        console.error('Failed to fetch weather data', error);
        // setError
        setForecastData(null);
      }
    };
    fetchWeatherData();
  }, [city]);

  return (
    <div className={styles.container}>
      {forecastData?.list.map((forecast, index) => (
        <ForecastCard key={index} forecast={forecast} />
      ))}
    </div>
  );
};

export default ForecastContainer;
