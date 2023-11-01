import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {ToggleButton} from '../Buttons';
import Slider from '@react-native-community/slider';
import SVGComponent, {ColorPicker} from '../../assets/svg/SVGComponent';
import CostumSlider from './CostumSlider';
import SlidingUpPanel from 'rn-sliding-up-panel';
import SliderCard from './SliderCard';

const LivingRoom = () => {
  const mycolor = {
    yellow: '#FCAE39',
    violet: '#7054FF',
    lightBlue: '#6EADFC',
    sky: '#61D1EB',
    green: '#6FB86D',
    pink: '#FF427D',
    orange: '#FF4C4B',
    white: '#EFF0FB',
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const [color, setColor] = useState(mycolor.orange);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [value, setValue] = useState(0.5);
  const onSliderValueChange = sliderValue => {
    let newValue = Math.round(sliderValue * 100) / 100;
    setValue(newValue); // Update the 'value' state when the slider value changes
  };
  const showSlider = () => {};
  return (
    <ScrollView>
      <View style={styles.outerContiner}>
        {/* ----------------------------------------------------------- */}
        <View style={styles.topContiner}>
          <View style={[styles.sidecontiner]}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.blurText}>Living Room</Text>
              <Text style={styles.boldText}>Living {'\n'}Room</Text>
            </View>
            <View style={[{flex: 0.5, marginTop: 10}]}>
              <View>
                <Text style={styles.itemName}>Power</Text>
                <ColorPicker />
              </View>
              <View style={styles.toggleContainer}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            <View style={{flex: 0.5}}>
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
          <View style={[styles.sidecontiner, {alignItems: 'center'}]}>
            <Image source={require('../../assets/lamp.png')} />
            <SVGComponent
              color={!isEnabled ? mycolor.white : color}
              customOpacity={value}
            />
          </View>
        </View>

        {/* -------------------------------------------- ------------------------------*/}
        <View style={styles.middleContiner}>
          <Text style={styles.itemName}>Tone Glow</Text>
          <View style={styles.toneContiner}>
            <TouchableOpacity onPress={() => setColor('#FCAE39')}>
              <View style={styles.warmBox}>
                <Text style={styles.lightText}>Warm</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setColor('#61D1EB')}>
              <View style={styles.coldBox}>
                <Text>Cold</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.itemName}>Intensity</Text>
            <Text style={styles.itemName}>{value}</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <CostumSlider /> */}

            <View style={styles.sliderContainer}>
              <Slider
                style={{width: 350, height: 20}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="blue"
                maximumTrackTintColor="blue"
                onValueChange={onSliderValueChange}
                value={value}
                trackStyle={styles.sliderTrack}
              />
            </View>
          </View>
          <View></View>
        </View>

        {/* ----------------------------------slider card------------------------------------------------- */}
        <View style={styles.bottomContiner}>
          <Text style={styles.itemName}>Intensity</Text>
          {/* <SliderCard /> */}
          <View style={styles.sliderCardContainer}>
            <View style={{flex: 0.2}}>
              <TouchableOpacity
                onPress={() => this._panel.show()}
                style={{flex: 1, alignItems: 'center'}}>
                <View style={styles.line}></View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.4,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: 30,
                rowGap:10
              }}>
              <Text style={styles.itemName}>Color</Text>
              <Text>Pick your Color</Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.faintLine}></View>
            </View>
            {/* <Button title="Show panel" onPress={() => this._panel.show()} /> */}
            <SlidingUpPanel ref={c => (this._panel = c)}>
              <View style={styles.showContainer}>
                <TouchableOpacity onPress={() => this._panel.hide()}>
                  <View style={{alignItems: 'center'}}>
                    <View style={styles.line}></View>
                  </View>
                </TouchableOpacity>
                <View style={styles.headContainer}>
                  <View
                    style={{
                      flex: 0.4,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      marginLeft: 30,
                    }}>
                    <Text style={styles.itemName}>Color</Text>
                    <Text>Pick your Color</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={styles.faintLine}></View>
                  </View>
                </View>
                {/* ----------------------------------------------- */}
                <View style={styles.colorContainer}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity onPress={() => setColor('#FF4C4B')}>
                      <Image source={require('../../assets/images/1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setColor('#6EADFC')}>
                      <Image source={require('../../assets/images/2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setColor('#61D1EB')}>
                      <Image source={require('../../assets/images/3.png')} />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity onPress={() => setColor('#6FB86D')}>
                      <Image source={require('../../assets/images/4.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setColor('#FCAE39')}>
                      <Image source={require('../../assets/images/5.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setColor('#FF427D')}>
                      <Image source={require('../../assets/images/6.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  {/* <Text>hello</Text> */}
                </View>
              </View>
            </SlidingUpPanel>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LivingRoom;

const styles = StyleSheet.create({
  outerContiner: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  //-----------------------middle continer
  middleContiner: {
    flex: 0.3,
    padding: 15,
  },
  lightText: {
    color: '#fff',
  },
  toggleContainer: {
    flex: 1,
    alignItems: 'flex-start',
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
    borderBottomLeftRadius: 10,
  },
  coldBox: {
    width: 168,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  //-------------Top continer--------------------
  centerItem: {
    justifyContent: 'flex-start',
  },
  topContiner: {
    flex: 1,
    padding: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  sidecontiner: {
    flex: 0.5,
  },
  lampImage: {
    width: 150,
    height: 304,
    padding: 10,
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
    fontStyle: 'normal',
  },
  colorWheelImg: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  sliderContainer: {
    justifyContent: 'center',
  },
  sliderTrack: {
    height: 10, // Adjust the height of the slider track
    borderRadius: 5, // Adjust the border radius to control rounded corners
  },

  //---------------------------------------------bottom container
  bottomContiner: {
    flex: 0.4,
  },
  //-----------SliderCard------------------------------------
  sliderCardContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  //----------------------------show continer------------------------------------
  headContainer: {
    flex: 0.4,
  },
  showContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  lineContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  colorContainer: {
    flex: 0.5,
  },
  buttonContainer: {
    flex: 1,
  },

  itemName: {
    fontSize: 18,
    fontFamily: 'Noto Sans',
    color: '#464646',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  faintLine: {
    width: 335,
    height: 3,
    backgroundColor: '#E4E4E4',
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: '#464646',
    marginTop: 10,
  },
});
