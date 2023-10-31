import { StyleSheet, Text, View,Switch } from 'react-native'
import React ,{useState}from 'react'


export const ToggleButton =(props)=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.toggleContainer}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      )
}

const Buttons = () => {
  return (
    <View>
      <Text>Buttons</Text>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    toggleContainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'

      },
})