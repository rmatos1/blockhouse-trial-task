import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ActionButton } from '../actionButton';

describe('ActionButton', () => {
  it('renders button with the correct text', () => {
    const buttonText = 'Click Me';

    const { getByText } = render(<ActionButton buttonText={buttonText} onPress={jest.fn()} />);

    const button = getByText(buttonText);

    expect(button).toBeTruthy();
  });

  it('calls onPress when button is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <ActionButton isDisabled={false} buttonText="Pressable" onPress={mockOnPress} />
    );

    const button = getByTestId('action-button');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
