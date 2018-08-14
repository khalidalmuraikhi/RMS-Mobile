import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class LogoImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./images/Headers/home.png')}
          style={{width: 50, height: 50}}
        />
      </View>
    );
  }
}