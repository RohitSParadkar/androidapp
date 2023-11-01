import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, HStack, Center, NativeBaseProvider} from 'native-base';

const Example = () => {
  return (
    <HStack justifyContent="center" space={2}>
      <Avatar
        bg="green.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}>
        AJ
      </Avatar>
    </HStack>
  );
};
const ProfileAvatar = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};

export default ProfileAvatar;

const styles = StyleSheet.create({});
