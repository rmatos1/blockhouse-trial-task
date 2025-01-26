import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigation } from '@react-navigation/native';

import { PASSWORD_MIN_LENGTH } from '@/constants';
import { UsersContext } from '@/providers';
import { AppRoutes } from '@/types';

export const useLoginHelper = () => {
  const { authUser } = useContext(UsersContext);
  const navigation = useNavigation();

  const {
    setValue,
    formState: { errors, isValid },
    getValues,
    clearErrors,
  } = useForm({
    resolver: zodResolver(
      z.object({
        email: z.string().email('Enter a valid email'),
        password: z.string().min(PASSWORD_MIN_LENGTH, {
          message: `You entered a password with less than ${PASSWORD_MIN_LENGTH} characters.`,
        }),
      })
    ),
  });

  const [isProcessing, setIsPrrocessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
  });

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

    const result = authUser({ email, password });

    await new Promise((resolve) => setTimeout(resolve, 1300));

    if (!result) {
      setModalContent({
        title: 'Authentication Error',
        description: 'Check the entered email and password and try again.',
      });
    } else {
      setModalContent({
        title: 'Success',
        description: 'You have successfully logged in',
      });
    }

    setShowModal(true);
    setIsPrrocessing(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onPressGoToSignup = () => {
    navigation.navigate(AppRoutes.Signup);
  };

  return {
    isDisabledButton: !isValid,
    getValues,
    errors,
    onChangeInputText,
    onBlurInput,
    onSubmit,
    isProcessing,
    showModal,
    modalContent,
    onCloseModal,
    onPressGoToSignup,
  };
};
