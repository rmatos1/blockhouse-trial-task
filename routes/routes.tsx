import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Signup } from '@/views';
import { AppRoutes } from '@/types';

const { Navigator, Screen } = createNativeStackNavigator();

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fefefe',
  },
};

export const Routes = () => {
  return (
    <NavigationContainer theme={lightTheme}>
      <Navigator screenOptions={{ animation: 'none' }} initialRouteName={AppRoutes.Login}>
        <Screen name={AppRoutes.Login} component={Login} options={{ headerShown: false }} />

        <Screen name={AppRoutes.Signup} component={Signup} />
      </Navigator>
    </NavigationContainer>
  );
};
