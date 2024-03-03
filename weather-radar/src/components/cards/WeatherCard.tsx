import { useEffect, useState } from 'react';
import WeatherService from '../../api/WeatherService';
import { WeatherData } from '../../types/weather';
import styles from './WeatherCard.module.css';
import { City } from '../../types/types';
import { formatUnixHoursAndMinutes, formatUnixMonthAndDayWithOrdinal } from '../../utils/timeUtils';
import { firstLetterToUppercase } from '../../utils/utils';
import WeatherCardLoadingSkeleton from './skeletons/WeatherCardLoadingSkeleton';
import WeatherCardErrorSkeleton from './skeletons/WeatherCardErrorSkeleton';

interface WeatherCardProps {
  city: City;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      let timeoutId: NodeJS.Timeout | undefined;
      try {
        timeoutId = setTimeout(() => {
          setIsLoading(true); // Set loading state true only if loading takes over 0.5 seconds
        }, 500);

        const weatherService = new WeatherService();
        const data: WeatherData = await weatherService.getWeatherByCoordinates(city.lat, city.lon);
        setWeatherData(data);
        setError(false);
      } catch (error) {
        console.error('Failed to fetch weather data', error);
        setError(true);
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
    return <WeatherCardErrorSkeleton />;
  }
  if (isLoading || weatherData === null) {
    return <WeatherCardLoadingSkeleton />; // Render loading skeleton on initial render or after loading has taken over 0.5 seconds
  }

  return (
    <div className={styles.card} data-testid="weather-card">
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
          <h3>{formatUnixMonthAndDayWithOrdinal(weatherData.dt)}</h3>
          <span className={styles.graySecondaryText}>{formatUnixHoursAndMinutes(weatherData.dt)}</span>
        </div>
        <div className={styles.additionalWeatherData}>
          <span>{`Wind: ${weatherData.wind.speed} m/s`}</span>
          <span>{`Humidity: ${weatherData.main.humidity} %`}</span>
          <span>{`Precipitation (3 h): ${weatherData.rain?.['3h'] ?? weatherData.snow?.['3h'] ?? 0} mm`}</span>
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
  fontSize: '1rem',
  textAlign: 'center',
  transform: 'translate(90%, -20%)',
} as const;
