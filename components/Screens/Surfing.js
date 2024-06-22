import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from '../Stylesheets/Surfing.style'

const Surfing = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/head2.png')}
            style={styles.image}
          />
          <Text style={styles.text2}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
          
            <Text style={styles.text}>Top spots</Text>
            <View style={styles.spotRow}>
              <Text style={styles.number}>1. </Text>
              <Text style={styles.spotName}>Maui</Text>
              <Image
                source={require('../../assets/maui.png')} // Replace with your image path
                style={styles.spotImage}
              />
            </View>
            <View style={styles.spotRow}>
              <Text style={styles.number}>2. </Text>
              <Text style={styles.spotName}>Kauai</Text>
              <Image
                source={require('../../assets/kauai.png')} // Replace with your image path
                style={styles.spotImage}
              />
            </View>
            <View style={styles.spotRow}>
              <Text style={styles.number}>3. </Text>
              <Text style={styles.spotName}>Honolulu</Text>
              <Image
                source={require('../../assets/honolulu.png')} // Replace with your image path
                style={styles.spotImage}
              />
            </View>
          
        </View>
        <View style={styles.secondList}>
          <Text style={styles.text}>Travel Guide</Text>
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 8,
              marginBottom: 55,
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 15,
                
              }}>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Hadwin Malone
                </Text>
                <Text style={{}}>Guide since 2012</Text>
              </View>
              <Image
                source={require('../../assets/man.png')}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </View>
            <View style={{

            }}>
              <Text style={{
                fontSize: 16,
                color: '#008080',
                borderColor: '#008080',
                fontWeight: 'bold',
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                textAlign: 'center',
                marginTop: 10,
                width: 150,
                marginLeft: 25,
              }}>Contact Us</Text>
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.fixedButton}>
        <Text style={styles.buttonText}>Book a trip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default Surfing;
