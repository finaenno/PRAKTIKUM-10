import { render, screen } from '@testing-library/react';
import Navbar from './';
import { SidebarProvider } from '../../context/SidebarContext';

test('Renders Navbar', () => {
  render(
    <SidebarProvider>
      <Navbar />
    </SidebarProvider>
  );
  expect(screen.getByText(/kevin sanjaya/i)).toBeInTheDocument();
  expect(screen.getByText(/teacher/i)).toBeInTheDocument();
});
