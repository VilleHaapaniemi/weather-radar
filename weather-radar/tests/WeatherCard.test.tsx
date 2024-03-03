import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import WeatherCard from '../src/components/cards/WeatherCard';
import { mockWeatherData } from './weatherDataMock';
import '@testing-library/jest-dom';
import React from 'react';

// Generic mock setup
const mockWeatherService = {
  getWeatherByCoordinates: vi.fn().mockResolvedValue(mockWeatherData),
};
vi.mock('../src/api/WeatherService', () => ({
  default: vi.fn().mockImplementation(() => mockWeatherService),
}));

describe('Weather card', () => {
  it('Renders the WeatherCard component', async () => {
    render(<WeatherCard city={{ name: 'Test', lat: 0, lon: 0 }} />);
    await waitFor(() => {
      expect(screen.getByTestId('weather-card')).toBeInTheDocument();
    });
  });
  it('Renders weather city name when fetched successfully', async () => {
    render(<WeatherCard city={{ name: 'Test', lat: 0, lon: 0 }} />);
    await waitFor(() => expect(screen.getByText('Test City')).toBeInTheDocument());
  });
  it('Renders error skeleton when fetch fails', async () => {
    const mockConsoleError = vi.fn((message) => {
      expect(message).toContain('Failed to fetch weather data');
    });
    const originalConsoleError = console.error;
    console.error = mockConsoleError; // Replace normal console.error which will occur on this test with mock function
    mockWeatherService.getWeatherByCoordinates = vi.fn().mockRejectedValue(new Error('Failed to fetch weather data'));
    render(<WeatherCard city={{ name: 'Test', lat: 0, lon: 0 }} />);
    await waitFor(() => {
      expect(screen.getByTestId('error-weather-skeleton')).toBeInTheDocument();
    });
    console.error = originalConsoleError;
  });
});
