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
function App() {
  return (
   <View style={styles.container}>
   <Home/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;
