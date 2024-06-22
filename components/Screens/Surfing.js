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

const Surfing = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/head2.png')}
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
                source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/maui.png')} // Replace with your image path
                style={styles.spotImage}
              />
            </View>
            <View style={styles.spotRow}>
              <Text style={styles.number}>2. </Text>
              <Text style={styles.spotName}>Kauai</Text>
              <Image
                source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/kauai.png')} // Replace with your image path
                style={styles.spotImage}
              />
            </View>
            <View style={styles.spotRow}>
              <Text style={styles.number}>3. </Text>
              <Text style={styles.spotName}>Honolulu</Text>
              <Image
                source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/honolulu.png')} // Replace with your image path
                style={styles.spotImage}
              />
            </View>
          
        </View>
        <View style={styles.secondList}>
          <Text style={styles.text}>Travel Guide</Text>
          <View style={styles.Contactcard}>
            <View style={styles.infoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.name}>Hadwin Malone</Text>
                <Text style={styles.subText}>Guide since 2012</Text>
              </View>
              <Image
                source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/profile.png')} // Replace with your image path
                style={styles.profileImage}
              />
            </View>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.fixedButton}>
        <Text style={styles.buttonText}>Book a trip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 'auto',
    height: 300,
    marginBottom: 20,
    opacity: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: 'black',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'semi-bold',
    margin: 20,
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 304,
    height: 340,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 10,
  },
  cardSubHeading: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#008080',
  },
  fixedButton: {
    position: 'absolute',
    bottom: 10,
    left: '5%',
    right: '5%',
    backgroundColor: '#008080',
    padding: 15,
    zIndex: 1000,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondList: {
    backgroundColor: '#E6F2F2',
    paddingTop: 20,
    paddingBottom: 20,
  },
  categoryContainer: {
    paddingHorizontal: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    height: 70,
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'semi-bold',
  },
  categoryIcon: {
    width: 20,
    height: 20,
    tintColor: '#008080',
  },
  Contactcard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    margin: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 60,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    fontSize: 16,
    color: 'black',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  contactButton: {
    borderColor: '#008080',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 150,
  },
  contactButtonText: {
    textAlign: 'center',
    color: '#008080',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card3: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    margin: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  spotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008080',
    marginRight: 5,
  },
  spotName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008080',
    flex: 1,
  },
  spotImage: {
    width: 100,
    height: 60,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default Surfing;
