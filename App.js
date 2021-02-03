import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Profile from './screen/Profile'
export default function App() {
  return (
    <View style={styles.container}>
      <Profile name="Monica" phone="040443455" email="monica@gmail.com" />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
