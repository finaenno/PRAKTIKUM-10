import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Renders Navbar', () => {
  render(<Navbar />);
  expect(screen.getByText(/kevin sanjaya/i)).toBeInTheDocument();
  expect(screen.getByText(/teacher/i)).toBeInTheDocument();
});
