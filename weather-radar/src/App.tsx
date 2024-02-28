import './App.css';
import CitiesDropdown from './components/CitiesDropdown';
import CityWeatherContainer from './components/containers/CityWeatherContainer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CitiesDropdown />
      <CityWeatherContainer />
    </>
  );
};

export default App;
