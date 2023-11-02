import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox, Icon, Button} from '@rneui/themed';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [check1, setCheck1] = useState(false);
  return (
    <View style={styles.loginContiner}>
      <View style={[styles.loginOuterContainer]}>
        {/* 'rgba(255,255,255, 0.17)' */}
        <View style={{flex: 0.5}}>
          <Text style={styles.itemName}>Login</Text>
          <Text>Glad you are back</Text>
        </View>
        <View style={{flex: 1.2}}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            autoFocus={true}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <View style={styles.centerContainer}>
            <Button
              color="secondary"
              containerStyle={{
                width: 100,
                marginBottom: 5,
              }}>
              Login
            </Button>
            <TouchableOpacity>
              <Text>Forgot password ?</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 2,
              columnGap: 15,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/logo/google.png')}
                style={styles.authImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/logo/facebook.png')}
                style={styles.authImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/logo/github.png')}
                style={styles.authImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  loginContiner: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  loginOuterContainer: {
    flex: 0.6,
    width: 350,
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  //-------------------------------
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 36,
    fontFamily: 'Noto Sans',
    color: '#464646',
    fontWeight: '600',
    fontStyle: 'normal',
  },
  authImg: {
    width: 40,
    height: 40,
  },
});
