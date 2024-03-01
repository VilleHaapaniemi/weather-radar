import { useState } from 'react';
import { CityOption } from '../types/types';
import styles from './CitiesDropdown.module.css';

interface CitiesDropdownProps {
  onCityChange: (city: CityOption) => void;
}

const CitiesDropdown: React.FC<CitiesDropdownProps> = ({ onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState<CityOption>(CityOption.AllCities);
  const CityOptionArray = Object.values(CityOption); // Array from city select Enum values

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as CityOption;
    setSelectedCity(selectedValue);
    onCityChange(selectedValue);
  };

  return (
    <div className={styles.dropdown}>
      <select value={selectedCity} onChange={handleChange}>
        {CityOptionArray.map((city, index) => (
          <option key={index} value={city}>
            <p>{city}</p>
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitiesDropdown;
