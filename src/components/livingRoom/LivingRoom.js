import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, } from 'react-native'
import React, { useState } from 'react'
import { ToggleButton } from '../Buttons'
import Slider from '@react-native-community/slider';
import SVGComponent, { ColorPicker } from '../../assets/svg/SVGComponent'
import CostumSlider from './CostumSlider'
import SlidingUpPanel from 'rn-sliding-up-panel';
import SliderCard from './SliderCard'


const LivingRoom = () => {
    const mycolor = { yellow: "#FCAE39", violet: "#7054FF", lightBlue: '#6EADFC', sky: '#61D1EB', green: '#6FB86D', pink: '#FF427D', orange: '#FF4C4B', white: '#EFF0FB' };
    const [isEnabled, setIsEnabled] = useState(false);
    const [color, setColor] = useState(mycolor.orange);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [value, setValue] = useState(0.5);
    const onSliderValueChange = (sliderValue) => {
        let newValue = Math.round(sliderValue * 100) / 100
        setValue(newValue); // Update the 'value' state when the slider value changes
    };

    return (
        <View style={styles.outerContiner}>
            {/* ----------------------------------------------------------- */}
            <View style={styles.topContiner}>
                <View style={[styles.sidecontiner]}>
                    <View style={{ flex: 1, alignItems: 'center' }}>

                        <Text style={styles.blurText}>Living Room</Text>
                        <Text style={styles.boldText}>Living {'\n'}Room</Text>
                    </View>
                    <View style={[{ flex: 0.5, marginTop: 10 }]}>
                        <View >
                            <Text style={styles.itemName}>Power</Text>
                        </View>
                        <View style={styles.toggleContainer}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />

                        </View>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={styles.itemName}>Color</Text>
                        <TouchableOpacity>
                            <Image
                                style={styles.colorWheelImg}
                                source={require('../../assets/colorWheel.png')}
                            />
                        </TouchableOpacity>
                        <ColorPicker color={mycolor.orange} />
                    </View>
                </View>
                <View style={[styles.sidecontiner, { alignItems: 'center' }]}>
                    <Image
                        source={require('../../assets/lamp.png')}
                    />
                    <SVGComponent color={!isEnabled ? mycolor.white : color} customOpacity={value}/>
                </View>
            </View>

            {/* -------------------------------------------- ------------------------------*/}
            <View style={styles.middleContiner}>
                <Text style={styles.itemName}>Tone Glow</Text>
                <View style={styles.toneContiner}>
                    <TouchableOpacity>
                        <View style={styles.warmBox}><Text style={styles.lightText}>Warm</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.coldBox}><Text>Cold</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <CostumSlider /> */}
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={{ width: 300, height: 20 }}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="blue"
                            maximumTrackTintColor="blue"
                            onValueChange={onSliderValueChange}
                            value={value}
                            trackStyle={styles.sliderTrack}
                        />
                        <Text>Intensity : {value}</Text>
                    </View>
                </View>
                <View>

                </View>
            </View>

            {/* ----------------------------------------------------------------------------------- */}
            <View style={styles.bottomContiner}>
                <Text style={styles.itemName}>Intensity</Text>
                <SliderCard />
            </View>
        </View>
    )
}

export default LivingRoom

const styles = StyleSheet.create({
    outerContiner: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    //-----------------------middle continer
    middleContiner: {
        flex: 0.3,
        padding: 15,
    },
    lightText: {
        color: '#fff'
    },
    toggleContainer: {
        flex: 1,
        alignItems: 'flex-start'

    },
    toneContiner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    warmBox: {
        width: 168,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#464646',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    coldBox: {
        width: 168,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10

    },
    //-------------Top continer--------------------
    centerItem: {
        justifyContent: 'flex-start'
    },
    topContiner: {
        flex: 1,
        padding: 15,
        marginTop: 20,
        flexDirection: 'row'
    },
    sidecontiner: {
        flex: 0.5,
    },
    lampImage: {
        width: 150,
        height: 304,
        padding: 10
    },
    blurText: {
        fontSize: 56,
        fontFamily: 'Noto Sans',
        color: '#BDBDBD',
        fontWeight: '700',
        opacity: 0.2,
        position: 'absolute', // Position the text absolutely
        top: 0,
    },
    boldText: {
        fontSize: 32,
        marginTop: 30,
        fontFamily: 'Noto Sans',
        color: '#464646',
        fontWeight: '700',
        fontStyle: 'normal',
        position: 'relative',
    },
    itemName: {
        fontSize: 18,
        fontFamily: 'Noto Sans',
        color: '#464646',
        fontWeight: '700',
        fontStyle: 'normal'
    },
    colorWheelImg: {
        width: 40,
        height: 40,
        marginTop: 10,
    },
    sliderContainer: {
        justifyContent: "center",
    },
    sliderTrack: {
        height: 10,  // Adjust the height of the slider track
        borderRadius: 5, // Adjust the border radius to control rounded corners
    },

    //---------------------------------------------bottom container
    bottomContiner: {
        flex: 0.40
    }
      //-----------SliderCard------------------------------------
})