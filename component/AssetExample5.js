import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';

export default function AssetExample5() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/pic5.png')}
      />

      <Text style={styles.paragraph}>Market</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  paragraph: {
    padding: 10,

    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Calibri',
    fontStyle: 'normal',
  },
  logo: {
    height: 130,
    width: 130,
  },
});
