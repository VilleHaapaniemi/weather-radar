import ForecastContainer from './ForecastContainer';
import WeatherCard from '../cards/WeatherCard';

const CityWeatherContainer: React.FC = () => {
  return (
    <article>
      <WeatherCard />
      <ForecastContainer />
    </article>
  );
};

export default CityWeatherContainer;
