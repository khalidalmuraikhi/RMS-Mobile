import React from 'react';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import { StyleSheet, View, Image } from 'react-native';


export default class ViewMap extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Location',
      headerRight: (
        <Image
            source={require('./images/Headers/MapHeader.png')}
            style={{ width: 50, height: 50 }}
        />
    ),
    };
  };


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 25.360522,
            longitude: 51.480106,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker
          coordinate={{
            latitude: 25.360522,
            longitude: 51.480106,
          }}
          />
          </MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});