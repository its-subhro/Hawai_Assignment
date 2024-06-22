import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Navbar from './components/Navbar';
import BottomTabNavigator from './components/Bottomnavbar';

enableScreens();

const Stack = createStackNavigator();

function MainScreen() {
  return (
    <>
      <Navbar />
      <BottomTabNavigator />
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ headerShown: false }} 
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
