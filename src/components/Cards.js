import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Cards = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#61DE70', '#0DA6C2']}
        style={styles.linearGradient}
      >
        <Text>Vertical Gradient</Text>
      </LinearGradient>
    </View>
  )
}

export const Weathercard = () => {
  return (
    <View style={styles.continer}>
      <View style={styles.weatherCard}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#61DE70', '#0DA6C2']}
          style={styles.linearGradient}
        >
          <View >
            <View style={styles.weatherUpper}>
              <Image
                style={styles.img}
                source={require('../assets/suncloud.png')}
              />
              <View>
                <View style={styles.itemCenter}>
                  <Text style={{ color: 'white', fontSize: 24 }}>Mostly Clody </Text>
                  <Text style={[styles.subtitle]}>Mumbai India</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 20 }}>27</Text>
              </View>
            </View >
            <View style={styles.weatherInfo}>
              <View >
                <View style={styles.itemCenter}>
                  <Text style={styles.lightText}>27</Text>
                  <Text style={styles.subtitle}>Sensible</Text>
                </View>
              </View>
              <View>
                <View style={styles.itemCenter}>
                  <Text style={styles.lightText}>4%</Text>
                  <Text style={styles.subtitle}>Precipitaion</Text>
                </View>
              </View>
              <View>
                <View style={styles.itemCenter}>
                  <Text style={styles.lightText}>66%</Text>
                  <Text style={styles.subtitle}>Humidity</Text>
                </View>
              </View>
              <View>
                <View style={styles.itemCenter}>
                  <Text style={styles.lightText}>16 km/h</Text>
                  <Text style={styles.subtitle}>Wind</Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  )
}



export default Cards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  weatherCard: {
    width: 300,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    border: '1 solid #FFF',
    backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
    blurRadius: 1
  },
  weatherUpper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,

  },
  itemCenter: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  weatherInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
  subtitle: {
    color: 'white'
  },
  lightText: {
    color: 'white'
},
img: {
  width: 80,
  height: 80,
  borderRadius:50
},
})