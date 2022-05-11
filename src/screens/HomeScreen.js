import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import AssetExample from '../../component/AssetExample';
import AssetExample1 from '../../component/AssetExample1';
import AssetExample2 from '../../component/AssetExample2';
import AssetExample3 from '../../component/AssetsExample3';
import AssetExample4 from '../../component/AssetExample4';
import AssetExample5 from '../../component/AssetExample5';
import AssetExample6 from '../../component/AssetExample6';
import AssetExample7 from '../../component/AssetExample7';

import {FloatingAction} from 'react-native-floating-action';

// const actions = [
//   {
//     text: 'Language',
//     icon: require('../../assets/Images/Vector.png'),
//     name: 'bt_language',
//     position: 1,
//   },
// ];

const clickHandler = () => {
  alert('Floating Button Clicked');
};

function HomeScreen() {
  return (
    <View
      style={{
        padding: 15,
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: '#D2FFE2',
          }}>
          <Text style={style.heading}> Cows</Text>
          <TouchableOpacity style={style.button}>
            <Text style={style.heading}>See all</Text>
          </TouchableOpacity>
        </View>

        <View>
          <ScrollView horizontal={true}>
            <View style={{marginRight: 20}}>
              <Card style={style.card1}>
                <AssetExample2 />
              </Card>
            </View>
            <View style={{marginRight: 20}}>
              <Card style={style.card1}>
                <AssetExample />
              </Card>
            </View>
            <View style={{marginRight: 20}}>
              <Card style={style.card1}>
                <AssetExample1 />
              </Card>
            </View>
            <View>
              <Card style={style.card1}>
                <AssetExample1 />
              </Card>
            </View>
          </ScrollView>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={style.heading}> Explore</Text>

          <View>
            <ScrollView horizontal={true}>
              <View style={{marginRight: 20}}>
                <Card style={style.card2}>
                  <AssetExample4 />
                </Card>
              </View>
              <View style={{marginRight: 20}}>
                <Card style={style.card2}>
                  <AssetExample5 />
                </Card>
              </View>
              <View style={{marginRight: 20}}>
                <Card style={style.card2}>
                  <AssetExample5 />
                </Card>
              </View>
              <View>
                <Card style={style.card2}>
                  <AssetExample5 />
                </Card>
              </View>
            </ScrollView>

            <ScrollView horizontal={true}>
              <View style={{marginRight: 20}}>
                <Card style={style.card2}>
                  <AssetExample6 />
                </Card>
              </View>
              <View style={{marginRight: 20}}>
                <Card style={style.card2}>
                  <AssetExample7 />
                </Card>
              </View>
              <View style={{marginRight: 20}}>
                <Card style={style.card2}>
                  <AssetExample7 />
                </Card>
              </View>
              <View>
                <Card style={style.card2}>
                  <AssetExample7 />
                </Card>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={style.heading}> </Text>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={clickHandler}
                style={style.touchableOpacityStyle}>
                <Image
                  source={require('../../assets/Images/flot2.png')}
                  style={style.floatingButtonStyle}
                />
                <Image
                  source={require('../../assets/Images/flot.png')}
                  style={style.floatingButtonStyle2}
                />
              </TouchableOpacity>
            </View>



        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    right: -290,
    fontSize: 20,
    fontWeight: '700',

    color: '#000',
  },

  card1: {
    height: 131,
    width: 116,
    backgroundColor: '#F7F8FD',
    color: '#F7F8FD',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  card2: {
    height: 172,
    width: 154,
    backgroundColor: '#F7F8FD',
    color: '#F7F8FD',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Calibri',
    fontStyle: 'normal',
  },

  heading: {
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    color: '#000',
  },
  floating: {
    position: 'absolute',
    top: 100,
    color: '#000',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    color: '#47CD75',
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    position: 'absolute',
    top:40,
    left:40
  },
  floatingButtonStyle2: {
    resizeMode: 'contain',
    position: 'relative',
    top:34,
    left:34
  },
});

export default HomeScreen;
