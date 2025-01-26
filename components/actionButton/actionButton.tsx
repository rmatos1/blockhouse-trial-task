import styled from 'styled-components/native';

import { UNDERLAY_MAIN_COLOR, DISABLED_BG_COLOR, MAIN_COLOR } from '../styled';

const StyledButton = styled.TouchableHighlight<{ $isDisabled?: boolean }>`
  background-color: ${(props) => (props.$isDisabled ? '#e5e5e5' : MAIN_COLOR)};
  width: 100%;
  height: 48px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  elevation: ${(props) => (props.$isDisabled ? 0 : 2)};
  shadow-color: ${(props) => (props.$isDisabled ? 'transparent' : '#000')};
  shadow-offset: ${(props) => (props.$isDisabled ? '0px 0px' : '0px 2px')};
  shadow-opacity: ${(props) => (props.$isDisabled ? 0 : 0.15)};
  shadow-radius: ${(props) => (props.$isDisabled ? 0 : 5)}px;
`;

const ButtonText = styled.Text<{ $isDisabled?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: ${(props) => (props.$isDisabled ? '#a6a6a6' : '#fff')};
`;

interface ActionButtonProps {
  isDisabled?: boolean;
  buttonText: string;
  onPress: () => void;
}

export const ActionButton = ({ isDisabled, buttonText, onPress }: ActionButtonProps) => (
  <StyledButton
    testID="action-button"
    $isDisabled={isDisabled}
    underlayColor={isDisabled ? DISABLED_BG_COLOR : UNDERLAY_MAIN_COLOR}
    onPress={onPress}
  >
    <ButtonText $isDisabled={isDisabled}>{buttonText}</ButtonText>
  </StyledButton>
);
