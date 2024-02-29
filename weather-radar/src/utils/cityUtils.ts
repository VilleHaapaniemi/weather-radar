import cities from '../data/cities';
import { City, CityOption } from '../types/types';

export const getCityArrayByOption = (option: CityOption): City[] => {
  if (option === CityOption.AllCities) {
    return cities; // Return all cities defined in data/cities.ts
  }

  // Function must return array even there is only one selected city
  const cityArray: City[] = [];
  const city = cities.find((city) => city.name === option); // Find the city object that matches the selected Enum option
  if (city) {
    cityArray.push(city);
  }
  return cityArray;
};
