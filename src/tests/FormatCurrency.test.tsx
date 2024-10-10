import { render, screen } from '@testing-library/react';
import FormatCurrency from '../components/FormatCurrency';

describe('[FormatCurrency]', () => {
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

  test('renders value in EUR with en-US locale', () => {
    render(<FormatCurrency value={10000} currency='EUR' locale='en-US' />);

    const formattedElement = screen.getByText('€10,000');
    expect(formattedElement).toBeInTheDocument();
  });

  test('renders value in EUR with default locale', () => {
    render(<FormatCurrency value={10000} currency='EUR' />);

    const formattedElement = screen.getByText('10.000 €');
    expect(formattedElement).toBeInTheDocument();
  });

  test('renders value with default currency', () => {
    render(<FormatCurrency value={10000} />);

    const formattedElement = screen.getByText('10.000 USD');
    expect(formattedElement).toBeInTheDocument();
  });
});