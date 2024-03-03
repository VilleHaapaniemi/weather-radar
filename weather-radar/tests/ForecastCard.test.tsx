import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { mockForecastData } from './forecastDataMock';
import ForecastContainer from '../src/components/containers/ForecastContainer';
import '@testing-library/jest-dom';
import React from 'react';

// Generic mock setup
const mockForecastService = {
  getForecastByCoordinates: vi.fn().mockResolvedValue(mockForecastData),
};
vi.mock('../src/api/WeatherService', () => ({
  default: vi.fn().mockImplementation(() => mockForecastService),
}));

describe('Forecast container', () => {
  it('Renders the ForecastCard component', async () => {
    render(<ForecastContainer city={{ name: 'test', lat: 0, lon: 0 }} />);
    await waitFor(() => {
      expect(screen.getByTestId('forecast-card')).toBeInTheDocument();
    });
  });
  it('Renders forecast temperature data when fetched successfully', async () => {
    render(<ForecastContainer city={{ name: 'test', lat: 0, lon: 0 }} />);
    await waitFor(() => expect(screen.getByTestId('forecast-temperature')).toHaveTextContent('29'));
  });
  it('Renders error skeleton when fetch fails', async () => {
    const mockConsoleError = vi.fn((message) => {
      expect(message).toContain('Failed to fetch weather data');
    });
    const originalConsoleError = console.error;
    console.error = mockConsoleError; // Replace normal console.error which will occur on this test with mock function
    mockForecastService.getForecastByCoordinates = vi.fn().mockRejectedValue(new Error('Failed to fetch weather data'));
    render(<ForecastContainer city={{ name: 'test', lat: 0, lon: 0 }} />);
    await waitFor(() => {
      expect(screen.getByTestId('error-forecast-skeleton')).toBeInTheDocument();
    });
    console.error = originalConsoleError;
  });
});
