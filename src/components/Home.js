import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Cards from './Cards'
import { GreenCard, BlueCard, IconCard, Weathercard } from './Cards'
import TransperantCards from './TransperantCards'
import { SectionGrid } from 'react-native-super-grid';
import GridView from './GridView'
import Filter from './Filter'
import { TouchableOpacity } from 'react-native-web'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Image
            style={styles.navimg}
            source={require('../assets/navbar.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <View>
          <Text style={styles.h2Text}>Hello Rohit</Text>
          <Text style={styles.h3Text}>Welcome to Home</Text>
        </View>
        <View>
          <Image
            style={styles.img}
            source={require('../assets/boy.png')}
          />
        </View>
      </View>
      <View style={styles.topSection}>
        <Weathercard />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.h3Text}>Your Rooms</Text>
        <GridView />
      </View>
      <View style={styles.bottomSection}>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundImage:'linear-gradient(180deg, #292C31 0%, #000 30.09%, #000 57.35%, #292929 100%)',
    backgroundColor: '#242C3B'
  },
  nav: {
    flex: 0.1
  },
  text: {
    color: 'white'
  },

  icon: {
    width: 50,
    height: 50
  },
  heading: {
    flex: 0.2,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  },
  topSection: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundImage: 'linear-gradient(101deg, #97C4D2 11.98%, #DD96D6 119.18%)',
  },
  middleSection: {
    flex: 1,
  },
  bottomSection: {
    flex: 0.2
  },
  h2Text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 35
  },
  h3Text: {
    color: 'white',
    fontSize: 15
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: '50%'
  },
  navimg: {
    width: 40,
    height: 40,
    marginTop: 15,
    marginLeft: 15

  }
})