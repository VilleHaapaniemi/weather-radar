import ForecastCard from '../cards/ForecastCard';
import styles from './ForecastContainer.module.css';

const ForecastContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
};

export default ForecastContainer;
