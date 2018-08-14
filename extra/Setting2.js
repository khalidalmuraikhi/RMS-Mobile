import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Setting2 extends React.Component {

    static navigationOptions = ({ navigation }) => {
      return {
          headerTitle: 'Settings tab',
          headerRight: ( 
            <LogoImage />
          ),
      };
  };
  
  
  
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is navigation 4</Text>
          <Icon size={100} name="ios-time" color="#4F8EF7" />
          <Icon  size={100} name="logo-apple" color="#4F8EF7" />
          <Button onPress={() => this.props.navigation.goBack()}  title="Go back" color="red" /> 
        </View>
      );
    }
  }