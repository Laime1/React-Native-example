import React, { useState }from 'react';
import { Text,  StyleSheet, View, Image,} from 'react-native';

export default function Home() {
  return (
    <View >
      <Text>Home</Text>
      <Image
      source={require('../assets/user.png')}/>
    </View>
  );
}
const styles = StyleSheet.create({});