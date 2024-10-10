import { render, screen } from '@testing-library/react';
import FormatPercentage from '../components/FormatPercentage';

describe('[FormatPercentage]', () => {
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

  test('renders percentage with default locale', () => {
    render(<FormatPercentage value={22.75} />);

    const formattedElement = screen.getByText('2.275%');
    expect(formattedElement).toBeInTheDocument();
  });

  test('renders percentage with en-US locale', () => {
    render(<FormatPercentage value={22.75} locale='en-US' />);

    const formattedElement = screen.getByText('2,275%');
    expect(formattedElement).toBeInTheDocument();
  });
});