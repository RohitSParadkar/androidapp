import React,{useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import Cards, {AddItem, MusicCard } from '../components/Cards';
import GridView from './GridView';
import ProfileAvatar from './ProfileAvatar';
import ModalTester from './ModalTester';

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.heading}>
            <View>
              <Text style={styles.h3Text}>Hi, Rohit</Text>
            </View>
            <View>

              <Image
                style={styles.img}
                source={require('../assets/boy.png')}
              />
              {/* <ProfileAvatar/> */}
            </View>
          </View>
          <View style={styles.topSection}>
            <View>
              <TouchableOpacity>
                <Text style={[styles.tabText,{color:'#464646'}]}>Living Room</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text  style={[styles.tabText,{color:'#BDBDBD'}]}>Dinning</Text>
              </TouchableOpacity>

            </View>
            <View>
              <TouchableOpacity>
                <Text  style={[styles.tabText,{color:'#BDBDBD'}]}>Kitchen</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.middleSection}>
            <GridView />
          </View>
          <View style={styles.bottomSection}>
           <MusicCard/>
           <AddItem handleAddItem={toggleModal}/>
           <ModalTester toggleModal={toggleModal} isModalVisible={isModalVisible}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginTop: 5
  },
  nav: {
    flex: 0.1
  },
  tabText:{
    fontSize: 18,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontStyle: 'normal',
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
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
  },
  topSection: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around'
    // backgroundImage: 'linear-gradient(101deg, #97C4D2 11.98%, #DD96D6 119.18%)',
  },
  middleSection: {
    flex: 1,
    paddingLeft: 4,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  bottomSection: {
    flex: 0.2,
    justifyContent:'center',
    alignItems:'center'
  },
  h2Text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 35
  },
  h3Text: {
    color: '#464646',
    fontFamily: 'Noto Sans',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 7
  },
  navimg: {
    width: 40,
    height: 40,
    marginTop: 15,
    marginLeft: 15

  }
})