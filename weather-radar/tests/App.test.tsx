import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../src/App';

describe('App', () => {
  it('Renders the App component', () => {
    render(<App />);
  });
});
