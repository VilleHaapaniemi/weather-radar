import { WeatherData } from '../types/weather';

class WeatherService {
  private apiKey: string | undefined = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/';

  async getWeatherByCoordinates(lat: number, lon: number): Promise<WeatherData> {
    console.log(this.apiKey);
    if (!this.apiKey) {
      throw new Error('API key is undefined');
    }
    const url = `${this.baseUrl}weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data: WeatherData = await response.json();
    return data;
  }
}

export default WeatherService;
