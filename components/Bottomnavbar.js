import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home'; // Adjust the path as per your project structure
import Surfing from './Screens/Surfing'; // Adjust the path as per your project structure
import Hula from './Screens/Hula'; // Adjust the path as per your project structure
import Vulcano from './Screens/Vulcano'; // Adjust the path as per your project structure

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'black',
        labelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          marginBottom: 6, 
        },
      }}
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ color, size }) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = require('../assets/home.png');
          } else if (route.name === 'Surfing') {
            iconSource = require('../assets/surfing.png');
          } else if (route.name === 'Hula') {
            iconSource = require('../assets/hula.png');
          } else if (route.name === 'Vulcano') {
            iconSource = require('../assets/vulcano.png');
          }
          return <Image source={iconSource} style={[styles.tabIcon, { tintColor: color, width: 28, height: 28 }]} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Surfing" component={Surfing} options={{ headerShown: false }} />
      <Tab.Screen name="Hula" component={Hula} options={{ headerShown: false }} />
      <Tab.Screen name="Vulcano" component={Vulcano} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    resizeMode: 'contain', // Ensure icons fit within specified size
  },
});

export default BottomTabNavigator;
