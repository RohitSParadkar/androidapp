import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React ,{useState}from 'react'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
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

export const MusicCard = () => {
  const[playButton,setPlayButton] = useState('play')
  return (
    <View style={[styles.musicCardContainer, styles.musicCardBGColor]}>
      <View style={styles.container}>
        <Image
          style={[styles.img, styles.muscicNoteImg]}
          source={require('../assets/musical-note.png')}
        />
        <View >
          <Text style={styles.itemName}>Music</Text>
          <Text>Give little bit</Text>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity >
        <Image
          style={styles.img}
          source={require('../assets/left-arrow.png')}
        />
        </TouchableOpacity>

        {playButton=='play'&&<TouchableOpacity onPress={()=>{setPlayButton('pause')}} >
        <Image
          style={styles.img}
          source={require('../assets/pause.png')}
        />
        </TouchableOpacity>}
       {playButton=='pause'&& <TouchableOpacity onPress={()=>{setPlayButton('play')}}>
        <Image
          style={styles.img}
          source={require('../assets/play.png')}
        />
        </TouchableOpacity>}
        <TouchableOpacity>
        <Image
          style={styles.img}
          source={require('../assets/right-arrow.png')}
        />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const AddItem = (props) => {
  return (
    <TouchableOpacity style={{flex:1} } onPress={props.handleAddItem}>
      <View style={styles.addItem}>

        <View style={styles.addItemContainer}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/plus.png')}
          />
          <Text>Add New Device</Text>
        </View>

      </View>
    </TouchableOpacity>

  )
}


export default Cards

const styles = StyleSheet.create({
  //----------------------addItem---------------
  addItem: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 335,
    height: 70,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  addItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
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
    color: 'black'
  },
  lightText: {
    color: 'white'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  //--------------------------music card-------------------------
  musicCardContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 335,
    height: 100,
    borderRadius: 10,
  },
  musicCardBGColor: {
    backgroundColor: '#fff'
  },
  img: {
    width: 25,
    height: 25,
  },
  muscicNoteImg: {
    margin: 20,
    width: 50,
    height: 50,
  },
  itemName: {
    fontSize: 16,
    fontFamily: 'Noto Sans',
    color: '#464646',
    fontSize: 18,
    fontWeight: '700',
  },
})