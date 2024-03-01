import { useEffect, useState } from 'react';
import { City } from '../../types/types';
import ForecastCard from '../cards/ForecastCard';
import styles from './ForecastContainer.module.css';
import { ForecastData } from '../../types/forecast';
import WeatherService from '../../api/WeatherService';
import ForecastErrorSkeleton from '../cards/skeletons/ForecastErrorSkeleton';
import ForecastCardLoadingSkeleton from '../cards/skeletons/ForecastCardLoadingSkeleton';

interface ForecastContainerProps {
  city: City;
}

const ForecastContainer: React.FC<ForecastContainerProps> = ({ city }) => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      let timeoutId: NodeJS.Timeout | undefined;
      try {
        timeoutId = setTimeout(() => {
          setIsLoading(true); // Set loading state true only if loading takes over 0.5 seconds
        }, 500);

        const weatherService = new WeatherService();
        const data: ForecastData = await weatherService.getForecastByCoordinates(city.lat, city.lon, 5);
        setForecastData(data);
        setError(false);
      } catch (error) {
        console.error('Failed to fetch weather data', error);
        setError(true);
        setForecastData(null);
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        setIsLoading(false);
      }
    };
    fetchWeatherData();
  }, [city]);

  if (error) {
    return <ForecastErrorSkeleton />;
  }

  return (
    <div className={styles.container}>
      {isLoading || forecastData === null
        ? // Render 5 loading cards on initial render or after loading has taken over 0.5 seconds
          Array.from({ length: 5 }).map((_, index) => <ForecastCardLoadingSkeleton key={index} />)
        : // Render actual forecast cards once data is loaded
          forecastData?.list.map((forecast, index) => <ForecastCard key={index} forecast={forecast} />)}
    </div>
  );
};

export default ForecastContainer;
