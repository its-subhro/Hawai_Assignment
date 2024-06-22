import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView >
      <ScrollView >
        <View style={styles.container}>
          <Image
            source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/Head.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Highlights</Text>
          <ScrollView horizontal={true}>
            {/* List of Cards */}
            <View style={styles.cardContainer}>
              {/* Card 1 */}
              <TouchableOpacity style={styles.card}>
                <Image
                  source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/surf.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.cardHeading}>Surfing</Text>
                <Text style={styles.cardSubHeading}>Best Hawaiian islands for surfing.</Text>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/arrow_forward.png')}
                    style={styles.arrowIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Card 2 */}
              <TouchableOpacity style={styles.card}>
                <Image
                  source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/dance.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.cardHeading}>Hula</Text>
                <Text style={styles.cardSubHeading}>Try it yourself.</Text>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/arrow_forward.png')}
                    style={styles.arrowIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Card 3 */}
              <TouchableOpacity style={styles.card}>
                <Image
                  source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/volcanos.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.cardHeading}>Vulcanoes</Text>
                <Text style={styles.cardSubHeading}>Volcanic conditions can change at any time.</Text>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/arrow_forward.png')}
                    style={styles.arrowIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 412,
    height: 600,
    marginBottom: 20,
    opacity: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: 304,
    height: 340,
    marginBottom: 20,
    marginRight: 20,
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
  
});

export default Home;
