/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/components/Home';
import LivingRoom from './src/components/livingRoom/LivingRoom';
import LoginPage from './src/components/login/LoginPage';
function App() {
  return (
   <View style={styles.container}>
   {/* <Home/> */}
   <LivingRoom/>
   {/* <LoginPage/> */}
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;
