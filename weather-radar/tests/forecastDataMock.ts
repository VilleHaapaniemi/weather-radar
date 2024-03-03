import { ForecastData } from '../src/types/forecast';

export const mockForecastData: ForecastData = {
  cod: '200',
  message: 0.0037,
  cnt: 40,
  list: [
    {
      dt: 1617064400,
      main: {
        temp: 28.94,
        feels_like: 26.11,
        temp_min: 22.11,
        temp_max: 29.94,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 968,
        humidity: 78,
        temp_kf: 0.83,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.2,
        deg: 270,
        gust: 1.9,
      },
      visibility: 10000,
      pop: 0,
      rain: undefined,
      snow: undefined,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-05 12:00:00',
    },
  ],
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lat: 51.5074,
      lon: -0.1278,
    },
    country: 'GB',
    population: 9126673,
    timezone: 0,
    sunrise: 1617046340,
    sunset: 1617099583,
  },
};
