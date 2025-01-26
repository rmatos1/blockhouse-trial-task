import { useState } from 'react';
import { TouchableHighlight } from 'react-native';

import { CustomTextInput, CustomTextInputProps } from '../customTextInput';
import { Eye, EyeSlashed } from '@/icons';

export const PasswordInput = ({ label, error, ...textInputProps }: CustomTextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <CustomTextInput
      {...textInputProps}
      label={label}
      error={error}
      secureTextEntry={!isPasswordVisible}
      rightIcon={
        <TouchableHighlight
          onPress={() => setIsPasswordVisible((prev) => !prev)}
          underlayColor="#f5f5f5"
        >
          {isPasswordVisible ? <EyeSlashed /> : <Eye />}
        </TouchableHighlight>
      }
    />
  );
};
