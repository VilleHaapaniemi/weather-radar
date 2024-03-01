import { WeatherData } from '../types/weather';
import { ForecastData } from '../types/forecast';

class WeatherService {
  private apiKey: string | undefined = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/';

  async getWeatherByCoordinates(lat: number, lon: number): Promise<WeatherData> {
    if (!this.apiKey) {
      throw new Error('API key is undefined');
    }
    const url = `${this.baseUrl}weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response not OK');
    }
    const data: WeatherData = await response.json();
    return data;
  }

  async getForecastByCoordinates(lat: number, lon: number, count: number): Promise<ForecastData> {
    //  count parameter defines how many forecast results wanted to fetch

    if (!this.apiKey) {
      throw new Error('API key is undefined');
    }
    const url = `${this.baseUrl}forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&cnt=${count + 1}`; // Fetch one extra forecast
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response not OK');
    }
    const data: ForecastData = await response.json();
    data.list.shift(); // Remove the first forecast time from the list array. The initial forecast time is too soon for our needs.
    return data;
  }
}

export default WeatherService;
