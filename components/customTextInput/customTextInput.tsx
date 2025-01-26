import { useState } from 'react';
import { View, Text, TextInputProps } from 'react-native';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import { ERROR_COLOR, StyledInput } from '../styled';

export interface CustomTextInputProps extends TextInputProps {
  label: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  rightIcon?: React.ReactElement;
}

export const CustomTextInput = ({
  label,
  error,
  rightIcon,
  ...textInputProps
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
    textInputProps.onBlur?.();
  };

  return (
    <View style={{ gap: 4, position: 'relative' }}>
      <Text
        style={{
          color: !isFocused && error ? ERROR_COLOR : '#868686',
          fontSize: 12,
          textTransform: 'uppercase',
          paddingLeft: 8,
        }}
      >
        {label}
      </Text>

      <StyledInput
        {...textInputProps}
        $hasError={!isFocused && !!error}
        autoCapitalize="none"
        onBlur={onBlur}
        onFocus={onFocus}
      />

      {rightIcon && <View style={{ position: 'absolute', right: 16, top: 32 }}>{rightIcon}</View>}

      {!isFocused && error && (
        <Text style={{ color: ERROR_COLOR, fontSize: 12, paddingLeft: 8 }}>{error.message}</Text>
      )}
    </View>
  );
};
