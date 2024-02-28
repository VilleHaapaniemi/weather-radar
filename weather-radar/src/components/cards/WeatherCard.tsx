import styles from './WeatherCard.module.css';

const WeatherCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cityWeather}>
        <div>
          <h2>Espoo</h2>
          <span>Scattered clouds</span>
        </div>
        <div className={styles.temperature}>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Image" />
          <p>0 C</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <div>
          <h3>May 2nd</h3>
          <span className={styles.graySecondaryText}>11:53</span>
        </div>
        <div className={styles.additionalWeatherData}>
          <span>Wind</span>
          <span>Humidity</span>
          <span>Precipitation</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
