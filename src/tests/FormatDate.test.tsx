import { render, screen } from '@testing-library/react';
import FormatDate from '../components/FormatDate';

describe('FormatDate component', () => {
  test('renders the date in ISO format', () => {
    const testDate = new Date('1991-10-09T10:00:00Z');
    render(<FormatDate date={testDate} format="iso" />);
    const isoDate = screen.getByText(testDate.toISOString());
    expect(isoDate).toBeInTheDocument();
  });

  test('renders the date in human-readable format', () => {
    const testDate = new Date('1991-10-09T10:00:00Z');
    render(<FormatDate date={testDate} format="human" locale="en-US" />);
    
    const formattedDateElement = screen.getByRole('time');
    const expectedDate = "October 9, 1991";
    expect(formattedDateElement).toHaveTextContent(expectedDate);
  });

  test('renders the date in long human-readable format', () => {
    const testDate = new Date('1991-10-09T10:00:00Z');
    render(<FormatDate date={testDate} format="human-long" locale="en-US" />);
    
    const formattedDateElement = screen.getByRole('time');
    const expectedDate = "Wednesday, October 9, 1991";
    expect(formattedDateElement.textContent).toBe(expectedDate);
  });

  test('renders the date in numeric format', () => {
    const testDate = new Date('1991-10-09T10:00:00Z');
    render(<FormatDate date={testDate} format="numeric" locale="en-US" />);
    
    const formattedDateElement = screen.getByRole('time');
    const expectedDate = "10/09/1991";
    expect(formattedDateElement.textContent).toBe(expectedDate);
  });
});
