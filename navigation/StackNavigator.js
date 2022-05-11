import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View ,TouchableOpacity } from 'react-native';
import HomeScreen from '../src/screens/HomeScreen';
import BreedScreen from '../src/screens/BreedScreen';
import StatsScreen from '../src/screens/StatsScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#47CD75',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',

          headerTitleStyle: {
            fontWeight: 'normal',
          },

          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                padding: 0,
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="menu"
                  style={{
                    margin: 0,
                    // padding: 10,
                    fontSize: 25,
                    color: 'white',
                  }}
                />
              </TouchableOpacity>
            </View>
          ),

          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                padding: 0,
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bell-badge-outline"
                  style={{
                    margin: 0,
                    // padding: 10,
                    fontSize: 25,
                    color: 'white',
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const BreedStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#47CD75',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerShown: false
      }}>
      <Stack.Screen name="Breeds" component={BreedScreen} />
    </Stack.Navigator>
  );
};

const StatsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#47CD75',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerShown: false,
      }}>
      <Stack.Screen name="Stats" component={StatsScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#47CD75',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export  {HomeStackScreen,BreedStackScreen,StatsStackScreen,ProfileStackScreen} ;

 
