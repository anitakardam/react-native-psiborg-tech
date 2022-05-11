import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';


export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/cow1.png')}
      />

      
      <Text style={styles.paragraph}>Breed 1</Text>
      <Text style={styles.paragraph}>20</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
  },
  paragraph: {
    
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Calibri',
    fontStyle: 'normal',
  },
  logo: {
    height: 95,
    width: 96,
  },
});