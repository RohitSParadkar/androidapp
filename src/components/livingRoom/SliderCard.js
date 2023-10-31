import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { ToggleButton } from '../Buttons';

const SliderCard = () => {
    return (
        <View style={styles.container}>
            <View style={{flex:1,flexDirection:'row'}}>
            <Text>Sechedule</Text>
            <ToggleButton/>
            </View>
            <Button title='Show panel' onPress={() => this._panel.show()} />
            <SlidingUpPanel ref={c => this._panel = c}>
                <View style={styles.container}>
                    <Text>Here is the content inside panel</Text>
                    <Button title='Hide' onPress={() => this._panel.hide()} />
                </View>
            </SlidingUpPanel>
        </View>
    )
}

export default SliderCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
})