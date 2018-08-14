import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom, Header, StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'
import LogoImage from './logo'
import CustomerTab from './CustomerTab'
import CookerTab from './CookerTab'
import CookerOrders from './CookerOrders'
import DriverOrders from './DriverOrders'
import DeliverlyMap from './DeliveryMap'
import LoginPage from './loginpage'
import RegisterPage from './registerpage'
import MapView from './MapView'

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    CustomerTab: {
      screen: CustomerTab,
    },
    CookerOrders: {
      screen: CookerTab,
    },
    DriverOrders: {
      screen: DriverOrders,
    },
    DeliverlyMap: {
      screen: DeliverlyMap,
    },
    Login: {
      screen: LoginPage
    },
    Register: {
      screen: RegisterPage
    },
    MapView: {
      screen: MapView
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return <RootStack />;
  }
}