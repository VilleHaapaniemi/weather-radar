import ForecastContainer from './ForecastContainer';
import WeatherCard from '../cards/WeatherCard';
import { City, CityOption } from '../../types/types';
import { getCityArrayByOption } from '../../utils/cityUtils';

interface CityWeatherContainerProps {
  selectedCity: CityOption;
}

const CityWeatherContainer: React.FC<CityWeatherContainerProps> = ({ selectedCity }) => {
  const cities: City[] = getCityArrayByOption(selectedCity);

  return (
    <>
      {cities.map((city, index) => (
        <article key={index}>
          <WeatherCard city={city} />
          <ForecastContainer city={city} />
        </article>
      ))}
    </>
  );
};

export default CityWeatherContainer;
