import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';



export default function AssetExample1() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/cow2.png')}
      />
      <Text style={styles.paragraph}>Breed 2</Text>
      <Text style={styles.paragraph}>10</Text>
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
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Calibri',
    fontStyle: 'normal',
  },
  logo: {
    height: 92,
    width: 96,
  },
});
