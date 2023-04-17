import { NativeBaseProvider, StatusBar} from 'native-base';
import {Auth} from './src/screens/Auth';
import { Loading } from './src/components/Loading'
import { THEME } from './src/styles/theme'; 
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ?  <Auth /> : <Loading/>} 
    </NativeBaseProvider>
  );
} 
