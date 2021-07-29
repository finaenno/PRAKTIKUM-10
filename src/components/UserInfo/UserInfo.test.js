import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';

test('Render UserInfo', () => {
  render(
    <UserInfo
      avatarUrl="http://placekitten.com/g/200/200"
      name="Kevin Sanjaya"
      role="Teacher"
    />
  );
  expect(screen.getByText(/kevin sanjaya/i)).toBeInTheDocument();
  expect(screen.getByText(/teacher/i)).toBeInTheDocument();
});
