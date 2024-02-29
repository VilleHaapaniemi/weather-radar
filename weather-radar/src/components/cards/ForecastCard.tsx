import styles from './ForecastCard.module.css';
import { Forecast } from '../../types/forecast';

interface ForecastCardProps {
  forecast: Forecast;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const formatTime = (dateString: string) => {
    // Parse only hours and minutes from date string
    return dateString.substring(11, 16);
  };

  return (
    <article className={styles.card}>
      <span className={styles.timeText}>{formatTime(forecast.dt_txt)}</span>
      <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Weather Image" />
      <div style={{ position: 'relative', display: 'inline-block', marginRight: '0.5em' }}>
        <p style={celsiusIconStyle}>°C</p>
        <span className={styles.temperatureText}>{Math.round(forecast.main.temp)}</span>
      </div>
      <div className={styles.additionalWeatherData}>
        <span>{`${forecast.wind.speed} m/s`}</span>
        <span>{`${forecast.main.humidity} %`}</span>
        <span>{`${forecast.rain?.three_hours ?? 0} mm`}</span>
      </div>
    </article>
  );
};

export default ForecastCard;

const celsiusIconStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: '8pt',
  transform: 'translate(100%, -100%)',
} as const;
