import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExampleList from './ExampleList';

describe('ExampleList', () => {
  test('renders loading', async () => {
    render(
      <MemoryRouter initialEntries={['/example']}>
        <ExampleList />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.queryAllByTestId(/loader/)).toHaveLength(5);
    });
    await waitFor(() => {
      expect(screen.queryAllByTestId(/loader/)).toHaveLength(0);
    });
    await waitFor(() => {
      expect(screen.queryAllByTestId(/list-item/)).toHaveLength(5);
    });
  });
});
