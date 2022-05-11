import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';

export default function AssetExample3() {
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
    padding: 5,
  },
  paragraph: {
    // margin: 24,
    color: '#000',
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#F7F8FD',
  },
  logo: {
    height: 80,
    width: 100,
  },
});
