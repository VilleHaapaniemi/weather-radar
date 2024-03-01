import styles from '../ForecastCard.module.css';

const ForecastCardLoadingSkeleton: React.FC = () => {
  return (
    <article className={styles.card}>
      <span className={styles.timeText} style={{ fontSize: '10pt' }}>
        Loading
      </span>
      <div style={{ height: '50px', width: '50px' }}></div>
      <div style={{ position: 'relative', display: 'inline-block', marginRight: '0.5em' }}>
        <p style={celsiusIconStyle}>°C</p>
        <span className={styles.temperatureText}>-</span>
      </div>
      <div className={styles.additionalWeatherData}>
        <span>{`- m/s`}</span>
        <span>{`- %`}</span>
        <span>{`- mm`}</span>
      </div>
    </article>
  );
};

export default ForecastCardLoadingSkeleton;

const celsiusIconStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: '8pt',
  transform: 'translate(100%, -100%)',
} as const;
