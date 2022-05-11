
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';

export default function AssetExample2() {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.paragraph}>Add New</Text> */}
      <Image
        style={styles.logo}
        source={require('../assets/Images/plus.png')}
      />
      <Image
        style={styles.logo1}
        source={require('../assets/Images/Vector1.png')}
      />
      <Text style={styles.paragraph}>Add New</Text>

      {/* <Text style={styles.paragraph}>Add New</Text> */}
      {/* <Text style={styles.paragraph}>Add New</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  paragraph: {
    // margin: 24,
    paddingTop: 60,

    color: '#000',
    // marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    width:100,
    height:100,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    
  },
  logo: {
    
    position: 'absolute',
    // paddingTop:10
    top:45
  },
  logo1: {
      top:20,
    // height: 50,
    // width: 50,
    top:32,

    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
  },
});