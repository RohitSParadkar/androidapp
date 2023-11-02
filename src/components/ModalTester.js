import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Input} from '@rneui/themed';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Light', value: 'Light'},
  {label: 'Tv', value: 'Tv'},
  {label: 'AC', value: 'AC'},
  {label: 'Fridge', value: 'Fridge'},
  {label: 'Fan', value: 'Fan'},
  {label: 'Curtains', value: 'Curtains'},
  {label: 'Washing Machine', value: 'Washing Machine'},
  {label: 'Google Home', value: 'Google Home'},
];
function ModalTester(props) {
  const [selectvalue, seSelecttValue] = useState(null);
  const [deviceId,setDeviceId] = useState('')
  const [deviceName,setDeviceName] = useState('')
  const [text, onChangeText] = React.useState('');
  const handleCancle = ()=>{
    props.toggleModal
  }
  // console.warn(deviceName)
  return (
    <View>
      <Modal isVisible={props.isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.headContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: 30,
                marginTop: 15,
              }}>
              <Text style={styles.itemName}>Add Device</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.faintLine}></View>
            </View>
          </View>
          {/* ------------------------------------------- */}
          <View style={styles.modalMidContainer}>
            <View style={{flex: 1}}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="Select device type"
                searchPlaceholder="Search..."
                value={selectvalue}
                onChange={item => {
                  seSelecttValue(item.value);
                }}
              />
            </View>
            <View style={{flex: 1,margin:4}}>
              <Text style={styles.inputLabel}>Device Name:</Text>
              <Input placeholder="Device Name" 
               onChangeText={setDeviceName}
               value={deviceName}/>
            </View>
            <View style={{flex: 1,margin:4}}>
              <Text
               style={styles.inputLabel}
              >Device Id:</Text>
              <Input placeholder="Device Id" 
               onChangeText={setDeviceId}
               value={deviceId}/>
            </View>
          </View>
          <View style={styles.modalBtnContainer}>
            <Button
              color="secondary"
              containerStyle={{
                width: 100,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={props.toggleModal}>
              Cancel
            </Button>
            <Button
              color="secondary"
              containerStyle={{
                width: 100,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={props.toggleModal}>
              Submit
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#F2F2F2',
    height: 400,
    // flex:1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  inputLabel:{
    fontSize: 18,
    fontFamily: 'Noto Sans',
    color: '#464646',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  headContainer: {
    flex: 0.3,
  },
  itemName: {
    fontSize: 18,
    fontFamily: 'Noto Sans',
    color: '#464646',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  modalBtnContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalMidContainer: {
    flex: 1,
    padding: 10,
  },
  faintLine: {
    width: 335,
    height: 3,
    backgroundColor: '#E4E4E4',
  },
  //----------------------dropdown
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor:''
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
