import { useState } from 'react';
import './App.css';
import CitiesDropdown from './components/CitiesDropdown';
import CityWeatherContainer from './components/containers/CityWeatherContainer';
import Header from './components/Header';
import { CityOption } from './types/types';

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityOption>(CityOption.AllCities);

  const handleCityChange = (selectedCity: CityOption) => {
    setSelectedCity(selectedCity);
  };

  return (
    <>
      <Header />
      <CitiesDropdown onCityChange={handleCityChange} />
      <CityWeatherContainer selectedCity={selectedCity} />
    </>
  );
};

export default App;
