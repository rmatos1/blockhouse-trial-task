import { render, fireEvent } from '@testing-library/react-native';
import { MsgModal } from '../MsgModal';

describe('MsgModal', () => {
  it('should render the modal with title and description', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <MsgModal onClose={onClose} title="Test Title" description="Test Description" />
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
  });

  it('should call onClose is pressed', () => {
    const onClose = jest.fn();
    const { getByText } = render(<MsgModal onClose={onClose} title="Test" />);

    fireEvent.press(getByText('Close'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
