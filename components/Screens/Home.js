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

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/Head.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Highlights</Text>
          <ScrollView horizontal={true}>
            <View style={styles.cardContainer}>
              {/* Card 1 */}
              <TouchableOpacity style={styles.card}>
                <Image
                  source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/surf.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.cardHeading}>Surfing</Text>
                <Text style={styles.cardSubHeading}>
                  Best Hawaiian islands for surfing.
                </Text>
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
                <Text style={styles.cardSubHeading}>
                  Volcanic conditions can change at any time.
                </Text>
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
        <View style={styles.secondList}>
          <Text style={styles.text}>Categories</Text>
          <View style={styles.categoryContainer}>
            {['Adventure', 'Culinary', 'Eco-tourism', 'Family', 'Sport'].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryRow}>
                <Text style={styles.categoryText}>{category}</Text>
                <Image
                  source={require('/Users/subhrojyotisen/Desktop/Myfirstproject/assets/arrow_forward.png')}
                  style={styles.categoryIcon}
                />
              </TouchableOpacity>
            ))}
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
    width: '100%',
    height: 600,
    marginBottom: 20,
    opacity: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
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
    shadowOffset: { width: 0, height: 2 },
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
});

export default Home;
