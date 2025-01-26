import styled from 'styled-components/native';

import { ERROR_COLOR } from './colors';

export const FormContainer = styled.View`
  gap: 20px;
  width: 100%;
  margin: 16px 0;
`;

export const StyledInput = styled.TextInput<{ $hasError?: boolean }>`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${(props) => (props.$hasError ? ERROR_COLOR : '#686868')};
  border: ${(props) => (props.$hasError ? `1px solid ${ERROR_COLOR}` : '1px solid #b0b3c7')};
  width: 100%;
  border-radius: 15px;
  height: 48px;
  padding: 0 15px;
`;
