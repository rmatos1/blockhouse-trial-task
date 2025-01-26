import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './routes';
import { UsersProvider } from './providers';

export default function App() {
  return (
    <UsersProvider>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <StatusBar />
        <Routes />
      </SafeAreaView>
    </UsersProvider>
  );
}
