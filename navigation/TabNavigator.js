import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeStackScreen,BreedStackScreen,StatsStackScreen,ProfileStackScreen } from './StackNavigator';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';



const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: 'rgba(251, 251, 251, 0.25)',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#47CD75',
          height: 62,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 14,
          fontFamily: 'Calibri',
          fontStyle: 'normal',
          
          
        },
      
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,

          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            // <MaterialCo name="home" color={color} size={size} />
            <Image
              color={color}
              // size={size}
              
              style={{width: 43, height: 36}}
              source={require('../assets/Images/cowlogo.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Breed"
        component={BreedStackScreen}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,

          tabBarLabel: 'Breeds',
          tabBarIcon: ({color, size, focused}) => (
            // <Entypo name="folder" color={color} size={size} />
            <Image
              color={color}
              size={size}
              // style={{width: 50, height: 50}}
              source={require('../assets/Images/breed.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Stats',
          tabBarIcon: ({color, size, focused}) => (
            // <MaterialIcons name="explore" color={color} size={size} />
            <Image
              color={color}
              size={size}
              // style={{width: 50, height: 50}}
              source={require('../assets/Images/stats.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome5Icon name="user-circle" color={color} size={size} />
            // <Image
            //   color={color}
            //   size={size}
            //   // style={{width: 50, height: 50}}
            //   style={{position: 'relative'}}
            //   source={require('../assets/Images/profile2.png')}
            // />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome5Icon 
            style={{fontWeight:'100'}}
            name="user-circle" color={color} size={size} />

            
            // <Image
            //   color={color}
            //   size={size}
            //   style={{position: 'absolute'}}
            //   // style={{width: 50, height: 50}}
            //   source={require('../assets/Images/profile.png')}
            // />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
