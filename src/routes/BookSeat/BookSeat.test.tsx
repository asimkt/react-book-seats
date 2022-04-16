import { render, screen } from '@testing-library/react';
import { BookSeat } from '.';

test('renders search anywhere in the component', () => {
  render(<BookSeat />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
