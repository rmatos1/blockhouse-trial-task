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
  test('authUser finds and returns user', async () => {
    let contextValue;

    render(
      <UsersProvider>
        <UsersContext.Consumer>
          {(context) => {
            contextValue = context;
            return null;
          }}
        </UsersContext.Consumer>
      </UsersProvider>
    );

    act(() => {
      contextValue.addUser(mockUser);
    });

    await waitFor(() => {
      const user = contextValue.authUser(mockUser);
      expect(user).toEqual(mockUser);
    });
  });
});
