import styles from '../WeatherCard.module.css';

const WeatherCardLoadingSkeleton: React.FC = () => (
  <div className={styles.card}>
    <div className={styles.cityWeather}>
      <div>
        <h2>Loading...</h2>
        <span>Loading...</span>
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
      <div>
        <h3>Loading...</h3>
        <span className={styles.graySecondaryText}>Loading...</span>
      </div>
      <div className={styles.additionalWeatherData}>
        <span>{`Wind: - m/s`}</span>
        <span>{`Humidity: - %`}</span>
        <span>{`Precipitation (3 h): - mm`}</span>
      </div>
    </div>
  </div>
);

export default WeatherCardLoadingSkeleton;

const celsiusIconStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: '13pt',
  textAlign: 'center',
  transform: 'translate(90%, -20%)',
} as const;
