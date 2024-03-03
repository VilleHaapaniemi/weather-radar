import styles from './ForecastErrorSkeleton.module.css';

const ForecastErrorSkeleton: React.FC = () => {
  return (
    <div className={styles.errorCard} data-testid="error-forecast-skeleton">
      <p>Failed to fetch city Forecast data</p>
    </div>
  );
};

export default ForecastErrorSkeleton;
