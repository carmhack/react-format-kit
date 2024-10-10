import { render, screen } from '@testing-library/react';
import FormatNumber from '../components/FormatNumber';

describe('[FormatNumber]', () => {
  const originalNavigator = { ...navigator };

  beforeAll(() => {
    Object.defineProperty(navigator, 'language', {
      value: 'it-IT',
      configurable: true,
    })
  });

  afterAll(() => {
    Object.defineProperty(navigator, 'language', {
      value: originalNavigator.language,
      configurable: true,
    });
  });
  
  test('renders number with en-US locale', () => {
    render(<FormatNumber value={10000} locale='en-US' />);

    const formattedElement = screen.getByText('10,000');
    expect(formattedElement).toBeInTheDocument();
  });

  test('renders number with it-IT locale', () => {
    render(<FormatNumber value={10000} locale='it-IT' />);

    const formattedElement = screen.getByText('10.000');
    expect(formattedElement).toBeInTheDocument();
  });

  
});