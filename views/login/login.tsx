import { ScrollView, ActivityIndicator } from 'react-native';

import { Logo } from '@/icons';
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
import { MsgModal } from '@/modals';
import { useLoginHelper } from './loginHelper.hook';

export const Login = () => {
  const {
    isDisabledButton,
    errors,
    getValues,
    onChangeInputText,
    onBlurInput,
    onSubmit,
    isProcessing,
    showModal,
    modalContent,
    onCloseModal,
    onPressGoToSignup,
  } = useLoginHelper();

  return (
    <>
      {showModal && (
        <MsgModal
          title={modalContent.title}
          description={modalContent.description}
          onClose={onCloseModal}
        />
      )}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 16 }}
        keyboardShouldPersistTaps="handled"
      >
        {isProcessing ? (
          <CenteredView>
            <ActivityIndicator size="large" color={MAIN_COLOR} />
            <StyledText style={{ marginTop: 8 }}>Processing your authentication...</StyledText>
          </CenteredView>
        ) : (
          <>
            <CenteredView>
              <Logo size={32} />
              <StyledTitle style={{ marginVertical: 8 }}>Access your account</StyledTitle>

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

                <ActionButton isDisabled={isDisabledButton} buttonText="Login" onPress={onSubmit} />
              </FormContainer>

              <StyledLink>Forgot my password</StyledLink>
            </CenteredView>

            <StyledText style={{ textAlign: 'center' }}>
              Not registered yet?{' '}
              <StyledLink onPress={onPressGoToSignup}>Create your account here</StyledLink>
            </StyledText>
          </>
        )}
      </ScrollView>
    </>
  );
};
