import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Screen1 extends React.Component {

    static navigationOptions = ({ navigation }) => {
      return {
          headerTitle: 'First Tab',
          headerRight: ( 
            <LogoImage />
          ),
      };
  };
  
  
  
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is navigation 2</Text>
          <Icon size={100} name="ios-time" color="#4F8EF7" />
          <Icon  size={100} name="logo-apple" color="#4F8EF7" />
          <Button onPress={() => this.props.navigation.goBack()}  title="Go Back" color="red" />  
        </View>
      );
    }
  }