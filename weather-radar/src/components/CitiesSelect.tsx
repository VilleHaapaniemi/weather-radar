import { useState } from 'react';
import { CityOption } from '../types/types';
import styles from './CitiesSelect.module.css';

interface CitiesSelectProps {
  onCityChange: (city: CityOption) => void;
}

const CitiesSelect: React.FC<CitiesSelectProps> = ({ onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState<CityOption>(CityOption.AllCities);
  const CityOptionArray = Object.values(CityOption); // Array from city select Enum values

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as CityOption;
    setSelectedCity(selectedValue);
    onCityChange(selectedValue);
  };

  return (
    <div className={styles.container}>
      <select value={selectedCity} onChange={handleChange}>
        {CityOptionArray.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitiesSelect;
