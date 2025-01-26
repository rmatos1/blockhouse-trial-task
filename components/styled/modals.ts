import styled from 'styled-components/native';

export const Overlay = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.View`
  background-color: #fff;
  elevation: 5;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.3;
  shadow-radius: 12.5px;
  width: 90%;
  align-items: center;
  border-radius: 25px;
  padding: 25px 15px;
  shadow-color: #000;
  gap: 20px;
`;
