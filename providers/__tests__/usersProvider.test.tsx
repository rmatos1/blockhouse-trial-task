import { Text } from 'react-native';
import { render, act, screen, waitFor } from '@testing-library/react-native';
import { UsersProvider, UsersContext } from '../usersProvider';

const mockUser = {
  email: 'test@example.com',
  password: 'password123',
};

describe('UsersProvider', () => {
  test('renders children correctly', () => {
    const children = <Text>Test Children</Text>;
    render(<UsersProvider>{children}</UsersProvider>);
    expect(screen.getByText('Test Children')).toBeTruthy();
  });
});

describe('UsersContext', () => {
  test('addUser and authUser should work correctly', async () => {
    render(
      <UsersProvider>
        <UsersContext.Consumer>
          {(context) => {
            act(() => {
              context.addUser(mockUser);
            });

            waitFor(() => {
              const user = context.authUser(mockUser);
              expect(user).toEqual(mockUser);
            });
          }}
        </UsersContext.Consumer>
      </UsersProvider>
    );
  });
});
