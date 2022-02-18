import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as HIDMobileLibrary from 'expo-hid-mobile-wrapper';

//let HIDMobile = require('expo-hid-mobile-wrapper');
export default function App() {
  //console.log(Constants.systemFonts);
  
  //console.log(HIDMobile.helloAsync());
  HIDMobileLibrary.helloAsync(
    {
      'a': 'a'
    }
  )
  .then(function (result) {
    console.log(result);
  });

  HIDMobileLibrary.testAsync()
  .then(function (result) {
    console.log(result);
  });
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
