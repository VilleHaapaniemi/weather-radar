import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CityWeatherContainer from '../src/components/containers/CityWeatherContainer';
import { CityOption } from '../src/types/types';
import cities from '../src/data/cities';

describe('City weather container', () => {
  it('Renders the CityWeatherContainer component', () => {
    render(<CityWeatherContainer selectedCity={CityOption.AllCities} />);
  });
  it('Renders the correct number of city articles when AllCities selected', () => {
    const { getAllByTestId } = render(<CityWeatherContainer selectedCity={CityOption.AllCities} />);
    const cityCount = cities.length;
    expect(getAllByTestId(/weather-article-/).length).toBe(cityCount);
  });
  it('Renders only one city article when specific city is selected', () => {
    const { getAllByTestId } = render(<CityWeatherContainer selectedCity={CityOption.Tampere} />);
    expect(getAllByTestId(/weather-article-/).length).toBe(1);
  });
});
