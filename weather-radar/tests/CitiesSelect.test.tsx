import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import CitiesSelect from '../src/components/CitiesSelect';
import { CityOption } from '../src/types/types';
import '@testing-library/jest-dom';

describe('Cities dropdown menu', () => {
  it('Renders the CitiesSelect component', () => {
    render(<CitiesSelect onCityChange={() => {}} />);
  });
  it('Sets initial selectedCity state to AllCities', () => {
    const { getByRole } = render(<CitiesSelect onCityChange={() => {}} />);
    expect(getByRole('combobox')).toHaveValue(CityOption.AllCities);
  });
  it('Calls onCityChange with correct city when a city is selected', async () => {
    const mockOnCityChange = vi.fn();
    render(<CitiesSelect onCityChange={mockOnCityChange} />);
    userEvent.selectOptions(screen.getByRole('combobox'), CityOption.Tampere);
    await waitFor(() => expect(mockOnCityChange).toHaveBeenCalledWith(CityOption.Tampere));
  });
});
