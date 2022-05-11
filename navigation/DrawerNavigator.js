import React from 'react';
import {View, TouchableOpacity,Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();


function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../assets/Images/cowlogo.png')}
    />
  );
}





const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#47CD75',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Home"
        component={AppTabNavigator}
        options={{
          // title: 'Home',
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                padding: 0,
              }}>
              <TouchableOpacity>
                {/* <MaterialCommunityIcons
                  name="bell-badge-outline"
                  style={{
                    margin: 0,
                    // padding: 10,
                    fontSize: 25,
                    color: 'white',
                  }}
                /> */}
                <Image
                  style={{
                    margin: 0,
                    fontSize: 25,
                    color: 'white',
                    position: 'relative',
                  }}
                  source={require('../assets/Images/bell.png')}
                />
                <Image
                  style={{
                    margin: 0,
                    position: 'absolute',
                    left: 10,
                    top: 3,
                  }}
                  source={require('../assets/Images/bell2.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                padding: 0,
              }}>
              <TouchableOpacity>
                
                <Image
                  style={{
                    margin: 0,
                    fontSize: 25,
                    color: 'white',
                    position: 'relative',
                  }}
                  source={require('../assets/Images/bar.png')}
                />
               
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      {/* <Drawer.Screen name="Breed" component={AppTabNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
