import React from 'react';
import { Button, View, Text, FlatList, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

export default class DeliverlyMap extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'DeliverlyMap',
            headerRight: (
                <Image
                    source={require('./images/Headers/delivery.png')}
                    style={{ width: 50, height: 50 }}
                />
            ),
        };
    };

    state = {
        data: []
    }

    async componentWillMount() {
        return await fetch('http://192.168.56.1:45457/api/Meals')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)

                this.setState({
                    data: responseJson
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Flat list X </Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text> {item.Name} </Text>
                    }
                />
            </View>
        );
    }
}