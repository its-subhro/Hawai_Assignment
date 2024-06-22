import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

export default function Navbar() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/aloha.png')} // Replace with your image path
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    height: 75, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20, // Adjust font size as needed
    color: 'black', // Adjust text color as needed
  },
});
