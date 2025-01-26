import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigation } from '@react-navigation/native';

import { PASSWORD_MIN_LENGTH } from '@/constants';
import { UsersContext } from '@/providers';
import { AppRoutes } from '@/types';

export const useSignupHelper = () => {
  const { addUser } = useContext(UsersContext);
  const navigation = useNavigation();

  const schema = z
    .object({
      email: z.string().email('Enter a valid email'),
      password: z.string().min(PASSWORD_MIN_LENGTH, {
        message: `You entered a password with less than ${PASSWORD_MIN_LENGTH} characters.`,
      }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password and confirm password do not match',
      path: ['confirmPassword'],
    });

  const {
    setValue,
    formState: { errors, isValid },
    getValues,
    clearErrors,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [isProcessing, setIsPrrocessing] = useState(false);
  const [hasAddedUser, setHasAddedUser] = useState(false);

  const onBlurInput = async (inputName: string) => {
    const value = getValues(inputName);
    setValue(inputName, value, { shouldValidate: true });
  };

  const onChangeInputText = ({ text, inputName }: { text: string; inputName: string }) => {
    clearErrors(inputName);
    setValue(inputName, text, { shouldValidate: true });
  };

  const onSubmit = async () => {
    if (!isValid) {
      return;
    }

    setIsPrrocessing(true);

    const email = getValues('email');
    const password = getValues('password');

    addUser({ email, password });

    await new Promise((resolve) => setTimeout(resolve, 1300));

    setHasAddedUser(true);
    setIsPrrocessing(false);
  };

  const onPressGoToLogin = () => {
    navigation.navigate(AppRoutes.Login);
  };

  return {
    isDisabledButton: !isValid,
    getValues,
    errors,
    onChangeInputText,
    onBlurInput,
    onSubmit,
    isProcessing,
    hasAddedUser,
    onPressGoToLogin,
  };
};
