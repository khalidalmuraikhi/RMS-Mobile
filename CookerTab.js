import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom, Header, StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'
import Meals from './Meals'
import MyOrders from './MyOrder'
import * as CookerOrders from './CookerOrders'

export default TabNavigator(
  {
    Orders: { screen: CookerOrders.CookerOrdersPaid },
    Preparing: { screen: CookerOrders.CookerOrdersInprogress },
    Done: { screen: CookerOrders.CookerOrdersDone  },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
      },
    }),

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#4050b5',
      },
      activeTintColor: 'white',
      inactiveTintColor: '#b3c7f9',
      labelStyle: {
        fontSize:24,
        paddingBottom: 8
      }
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);