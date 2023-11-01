import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {ToggleButton} from '../Buttons';
import SVGComponent, {ColorPicker} from '../../assets/svg/SVGComponent';

const SliderCard = () => {

  return (
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
            }}>
            <Text style={styles.itemName}>Color</Text>
            <Text>Pick your Color</Text>
          </View>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
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
  );
};

export default SliderCard;

const styles = StyleSheet.create({
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
