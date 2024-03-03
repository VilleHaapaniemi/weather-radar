import { WeatherData } from '../src/types/weather';

export const mockWeatherData: WeatherData = {
  coord: {
    lon: 12.4924,
    lat: 41.8902,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 22.15,
    feels_like: 21.15,
    temp_min: 20.15,
    temp_max: 24.15,
    pressure: 1012,
    humidity: 50,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 200,
    gust: 4.8,
  },
  clouds: {
    all: 0,
  },
  rain: undefined,
  snow: undefined,
  dt: 1617062400,
  sys: {
    type: 1,
    id: 1234,
    country: 'US',
    sunrise: 1617054322,
    sunset: 1617095049,
  },
  timezone: -14400,
  id: 12345,
  name: 'Test City',
  cod: 200,
};
