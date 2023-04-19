import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/SplashScreen';
import Login from './screens/Login';
import WriteReview from './screens/WriteReview';
import ReviewProduct from './screens/ReviewProduct';
import Register from './screens/Register';
import Notification from './screens/Notification';
import NotificationOffer from './screens/NotificationOffer';
import NotificationActivity from './screens/NotificationActivity';
import NotificationFeed from './screens/NotificationFeed';
import Explore from './screens/Explore';

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
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="NotificationOffer" component={NotificationOffer}/>
        <Stack.Screen name="NotificationActivity" component={NotificationActivity}/>
        <Stack.Screen name="NotificationFeed" component={NotificationFeed}/>
        <Stack.Screen name="Explore" component={Explore}/>
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
