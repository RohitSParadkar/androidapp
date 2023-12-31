import React, { useState } from "react";
import Slider from '@react-native-community/slider';
import { StyleSheet, View, Text } from "react-native";

const CostumSlider = () => {
    const [value, setValue] = useState(50);
    const onSliderValueChange = (sliderValue) => {
        setValue(sliderValue); // Update the 'value' state when the slider value changes
    };
    return (
        <View style={styles.sliderContainer}>
            <Slider
                style={{ width: 300, height:20}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="blue"
                maximumTrackTintColor="blue"
                onValueChange={onSliderValueChange}
                trackStyle={styles.sliderTrack}
            />
            <Text>Intensity : {value}</Text>
        </View>
    )
}

export default CostumSlider

const styles = StyleSheet.create({
    sliderContainer: {
        justifyContent: "center",
    },
    sliderTrack: {
        height: 10,  // Adjust the height of the slider track
        borderRadius: 5, // Adjust the border radius to control rounded corners
    }
})