import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import { Provider as PaperProvider } from 'react-native-paper';


import Register from './.expo/Register';
import Home from './.expo/Home';
import WalkersList from './.expo/WalkersList';
import WalkerDetails from './.expo/WalkerDetails';
import Reservation from './.expo/Reservation';
import ReservationConfirmation from './.expo/ReservationConfirmation';
import MyReservations from './.expo/MyReservations';
import VetsList from './.expo/VetsList';
import Login from './.expo/Login';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Solicitar permiso para notificaciones
    async function requestPermissions() {
      await Notifications.requestPermissionsAsync();
    }
    requestPermissions();

    // Manejar la recepción de notificaciones
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificación recibida:', notification);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WalkersList" component={WalkersList} />
        <Stack.Screen name="WalkerDetails" component={WalkerDetails} />
        <Stack.Screen name="Reservation" component={Reservation} />
        <Stack.Screen name="ReservationConfirmation" component={ReservationConfirmation} />
      </Stack.Navigator>
      <Stack.Screen name="MyReservations" component={MyReservations} />
        <Stack.Screen name="VetsList" component={VetsList} />
    </NavigationContainer>
  );
}
