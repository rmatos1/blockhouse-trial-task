import { Modal } from 'react-native';
import {
  Overlay,
  ModalContainer,
  ModalBody,
  ActionButton,
  StyledTitle,
  StyledText,
} from '@/components';

interface MsgModalProps {
  onClose: () => void;
  title?: string;
  description?: string;
}

export const MsgModal = ({ onClose, title, description }: MsgModalProps) => {
  return (
    <Modal animationType="fade" visible transparent onRequestClose={onClose}>
      <Overlay onPress={onClose} activeOpacity={0.75} />

      <ModalContainer>
        <ModalBody>
          {title && <StyledTitle>{title}</StyledTitle>}

          {description && <StyledText style={{ textAlign: 'center' }}>{description}</StyledText>}

          <ActionButton onPress={onClose} buttonText="Close" />
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};
