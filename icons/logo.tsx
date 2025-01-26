import { Path, Svg } from 'react-native-svg';

import { MAIN_COLOR } from '@/components';
import { IconProps } from '@/types';

export const Logo = ({ size = 22, color = MAIN_COLOR }: IconProps) => (
  <Svg width={size} height={size + 3} viewBox="0 0 22 25" fill="none">
    <Path
      d="M11.1743 0.430176L21.6989 6.50656V18.6593L11.1743 24.7357L0.649648 18.6593V6.50656L11.1743 0.430176Z"
      fill={color}
    />
  </Svg>
);
