import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function AssetExample7() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/pic7.png')}
      />
      <Text style={styles.paragraph}>Ownership Transfer</Text>
      
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
