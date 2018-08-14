// import React from 'react';
// import { StyleSheet, Text, View,Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
// import { TabNavigator, TabBarBottom, Header, StackNavigator } from 'react-navigation'; // Version can be specified in package.json
// import Icon from 'react-native-vector-icons/Ionicons';
// import firstTab from './firstTab'
// import HomeScreen from './HomeScreen'
// import Settings from './Setting'
// import Settings2 from './Setting2'
// import LogoImage from './logo'




// const HomeStack = StackNavigator({
//   Home: { screen: HomeScreen },
//   FirstTab: { screen: firstTab },
// },
// {
//   navigationOptions:{
//     headerStyle: { backgroundColor: 'lightgreen'},
//     headerTintColor: 'white',
//     headerTitleStyle:{
//       fontSize: 16
//     }
//   }
// },
// );

// const SettingsStack = StackNavigator({
//   Settings: { screen: Settings },
//   Settings2: { screen: Settings2 },
// },
// {
//   navigationOptions:{
//     headerStyle: { backgroundColor: 'lightgreen'},
//     headerTintColor: 'white',
//     headerTitleStyle:{
//       fontSize: 16
//     }
//   }
// },);

// export default TabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Settings: { screen: SettingsStack },
    
//   },
//   {

//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//       },

//     }),

//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       style: {
//         backgroundColor: 'lightblue',
        
//       },
//       activeTintColor: 'red',
//       inactiveTintColor: 'blue',
//       labelStyle: {
//         fontSize:24,
//       }
//     },
//     animationEnabled: true,
//     swipeEnabled: true,
//   }
// );