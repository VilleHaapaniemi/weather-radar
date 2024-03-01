import styles from '../WeatherCard.module.css';

const WeatherCardErrorSkeleton: React.FC = () => (
  <div className={styles.card}>
    <div className={styles.cityWeather}>
      <div>
        <h2>Error</h2>
        <span>Failed to fetch city weather data</span>
      </div>
      <div className={styles.temperature}>
        <div style={{ width: '70px', height: '70px', backgroundColor: 'transparent' }}></div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <p style={celsiusIconStyle}>°C</p>
          <p>-</p>
        </div>
      </div>
    </div>
    <div className={styles.additionalInfo}>
      <div></div>
      <div className={styles.additionalWeatherData}>
        <span>{`Wind: - m/s`}</span>
        <span>{`Humidity: - %`}</span>
        <span>{`Precipitation (3 h): - mm`}</span>
      </div>
    </div>
  </div>
);

export default WeatherCardErrorSkeleton;

const celsiusIconStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: '1rem',
  textAlign: 'center',
  transform: 'translate(90%, -20%)',
} as const;
