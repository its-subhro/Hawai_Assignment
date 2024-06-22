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
import styles from '../Stylesheets/Home.style'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/Head.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Highlights</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              {/* Card 1 */}
              <TouchableOpacity style={styles.card}>
                <Image
                  source={require('../../assets/surf.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.cardHeading}>Surfing</Text>
                <Text style={styles.cardSubHeading}>
                  Best Hawaiian islands for surfing.
                </Text>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require('../../assets/arrow_forward.png')}
                    style={styles.arrowIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Card 2 */}
              <TouchableOpacity style={styles.card}>
                <Image
                  source={require('../../assets/dance.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.cardHeading}>Hula</Text>
                <Text style={styles.cardSubHeading}>Try it yourself.</Text>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require('../../assets/arrow_forward.png')}
                    style={styles.arrowIcon}
                  />
                </View>
              </TouchableOpacity>

              {/* Card 3 */}
              <TouchableOpacity style={styles.card}>
                <Image
                  source={require('../../assets/volcanos.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.cardHeading}>Vulcanoes</Text>
                <Text style={styles.cardSubHeading}>
                  Volcanic conditions can change at any time.
                </Text>
                <View style={styles.arrowContainer}>
                  <Image
                    source={require('../../assets/arrow_forward.png')}
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
            {['Adventure', 'Culinary', 'Eco-tourism', 'Family', 'Sport'].map(
              (category, index) => (
                <TouchableOpacity key={index} style={styles.categoryRow}>
                  <Text style={styles.categoryText}>{category}</Text>
                  <Image
                    source={require('../../assets/arrow_forward.png')}
                    style={styles.categoryIcon}
                  />
                </TouchableOpacity>
              ),
            )}
          </View>
          <Text style={styles.text}>Travel Guide</Text>
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 8,
              marginBottom: 10,
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

export default Home;
