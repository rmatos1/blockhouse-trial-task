import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PasswordInput } from '../passwordInput';

jest.mock('@/icons', () => ({
  Eye: () => <div testID="eye-icon">Eye</div>,
  EyeSlashed: () => <div testID="eye-slashed-icon">EyeSlashed</div>,
}));

describe('PasswordInput', () => {
  const mockProps = {
    label: 'Password',
    placeholder: 'Enter your password',
  };

  it('hides password by default', () => {
    const { getByPlaceholderText } = render(<PasswordInput {...mockProps} />);
    const input = getByPlaceholderText('Enter your password');

    expect(input.props.secureTextEntry).toBe(true);
  });

  it('toggles password visibility when pressed', () => {
    const { getByTestId, getByPlaceholderText } = render(<PasswordInput {...mockProps} />);
    const input = getByPlaceholderText('Enter your password');
    const iconButton = getByTestId('eye-icon');

    expect(input.props.secureTextEntry).toBe(true);

    fireEvent.press(iconButton);
    expect(input.props.secureTextEntry).toBe(false);
  });

  it('renders the correct icon based on password visibility', () => {
    const { getByTestId } = render(<PasswordInput {...mockProps} />);

    expect(getByTestId('eye-icon')).toBeTruthy();
    expect(() => getByTestId('eye-slashed-icon')).toThrow();

    fireEvent.press(getByTestId('eye-icon'));

    expect(getByTestId('eye-slashed-icon')).toBeTruthy();
    expect(() => getByTestId('eye-icon')).toThrow();
  });
});
