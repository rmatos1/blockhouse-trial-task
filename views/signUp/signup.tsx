import { ScrollView, ActivityIndicator } from 'react-native';

import {
  StyledTitle,
  StyledText,
  FormContainer,
  CustomTextInput,
  PasswordInput,
  ActionButton,
  StyledLink,
  MAIN_COLOR,
  CenteredView,
} from '@/components';
import { useSignupHelper } from './signupHelper.hook';

export const Signup = () => {
  const {
    isDisabledButton,
    errors,
    getValues,
    onChangeInputText,
    onBlurInput,
    onSubmit,
    isProcessing,
    hasAddedUser,
    onPressGoToLogin,
  } = useSignupHelper();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, padding: 16 }}
      keyboardShouldPersistTaps="handled"
    >
      {isProcessing ? (
        <CenteredView>
          <ActivityIndicator size="large" color={MAIN_COLOR} />
          <StyledText style={{ marginTop: 8 }}>Processing your registration...</StyledText>
        </CenteredView>
      ) : hasAddedUser ? (
        <CenteredView>
          <StyledTitle style={{ marginBottom: 16 }}>User added successfully!</StyledTitle>
          <StyledLink onPress={onPressGoToLogin}>Return to Login</StyledLink>
        </CenteredView>
      ) : (
        <>
          <CenteredView>
            <StyledTitle style={{ marginVertical: 8 }}>Create your account</StyledTitle>

            <FormContainer>
              <CustomTextInput
                label="Email"
                value={getValues('email')}
                onChangeText={(text) => onChangeInputText({ text, inputName: 'email' })}
                error={errors?.email}
                onBlur={() => onBlurInput('email')}
                placeholder="Enter your email"
              />

              <PasswordInput
                label="Password"
                value={getValues('password')}
                onChangeText={(text) => onChangeInputText({ text, inputName: 'password' })}
                error={errors?.password}
                onBlur={() => onBlurInput('password')}
                placeholder="Enter your password"
              />

              <PasswordInput
                label="Confirm password"
                value={getValues('confirmPassword')}
                onChangeText={(text) => onChangeInputText({ text, inputName: 'confirmPassword' })}
                error={errors?.confirmPassword}
                onBlur={() => onBlurInput('confirmPassword')}
                placeholder="Confirm your password"
              />
            </FormContainer>
          </CenteredView>

          <ActionButton isDisabled={isDisabledButton} buttonText="Signup" onPress={onSubmit} />
        </>
      )}
    </ScrollView>
  );
};
