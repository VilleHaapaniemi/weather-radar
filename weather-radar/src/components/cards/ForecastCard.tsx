import styles from './ForecastCard.module.css';

const ForecastCard: React.FC = () => {
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
