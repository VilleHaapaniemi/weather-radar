import { useState } from 'react';
import { City } from '../types/types';
import cityOptions from '../data/cityOptions';
import styles from './CitiesDropdown.module.css';

const CitiesDropdown: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    // Handle the selection of all cities
    if (selectedValue === 'ALL_CITIES') {
      setSelectedCity({ name: 'All Cities', lat: 0, lon: 0 });
    } else {
      // Find the city object that matches the selected value
      const selectedCityObject = cityOptions.find((city) => city.name === selectedValue);
      setSelectedCity(selectedCityObject || null);
    }
  };

  return (
    <div className={styles.dropdown}>
      <select value={selectedCity?.name || ''} onChange={handleChange}>
        <option value="ALL_CITIES">Kaikki kaupungit</option>
        {cityOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitiesDropdown;
