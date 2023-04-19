import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/SplashScreen';
import Login from './screens/Login';
import WriteReview from './screens/WriteReview';
import ReviewProduct from './screens/ReviewProduct';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="WriteReview" component={WriteReview}/>
        <Stack.Screen name="ReviewProduct" component={ReviewProduct}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
