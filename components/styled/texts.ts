import styled from 'styled-components/native';

import { MAIN_COLOR } from './colors';

export const StyledTitle = styled.Text`
  font-size: 22px;
  color: #353535;
  font-family: 'Roboto';
  font-weight: bold;
`;

export const StyledText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #757575;
  font-family: 'Roboto';
`;

export const StyledLink = styled.Text`
  font-size: 16px;
  font-family: 'Roboto';
  padding: 5px 0;
  color: ${MAIN_COLOR};
  text-decoration: underline;
`;
