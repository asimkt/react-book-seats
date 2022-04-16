import { render, screen } from '@testing-library/react';
import { Checkout } from '.';

test('renders search anywhere in the component', () => {
  render(<Checkout />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
