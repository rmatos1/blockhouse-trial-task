import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { CustomTextInput, CustomTextInputProps } from '../CustomTextInput';

const ERROR_MESSAGE = 'This field is required';

const setup = (props?: Partial<CustomTextInputProps>) => {
  const defaultProps: CustomTextInputProps = {
    label: 'Email',
    onBlur: jest.fn(),
    onFocus: jest.fn(),
    ...props,
  };

  return render(<CustomTextInput {...defaultProps} />);
};

describe('CustomTextInput', () => {
  it('renders the input with the correct label', () => {
    const { getByText } = setup();

    expect(getByText('Email')).toBeTruthy();
  });

  it('displays error message when an error exists', () => {
    const { getByText } = setup({
      error: { message: ERROR_MESSAGE },
    });

    expect(getByText(ERROR_MESSAGE)).toBeTruthy();
  });

  it('does not display error message when the input is focused', () => {
    const { getByPlaceholderText, queryByText } = render(
      <CustomTextInput label="Email" error={{ message: ERROR_MESSAGE }} placeholder="Enter email" />
    );

    const input = getByPlaceholderText('Enter email');

    fireEvent(input, 'focus');

    expect(queryByText(ERROR_MESSAGE)).toBeNull();

    fireEvent(input, 'blur');

    expect(queryByText(ERROR_MESSAGE)).not.toBeNull();
  });

  it('renders right icon', () => {
    const RightIcon = () => <Text>Icon</Text>;
    const { getByText } = setup({
      rightIcon: <RightIcon />,
    });

    expect(getByText('Icon')).toBeTruthy();
  });
});
