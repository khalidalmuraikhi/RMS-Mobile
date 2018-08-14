import React from 'react';
import DB from './DB'
import { View, FlatList, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Icon } from 'native-base';


export default class DriverOrders extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Driver orders',
            headerRight: (
                <Image
                    source={require('./images/Headers/delivery.png')}
                    style={{ width: 50, height: 50 }}
                />
            ),
        };
    };

    state = {
        orders: []
    }

    db = new DB('http://192.168.56.1:45457/api/Orders')

    componentDidMount() {
        this.find({ query: "getDone" })
    }

    find = async (parameters) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
    }

    handleDeliverd= (val) => {
        console.log("val = "  + val)
        this.find({
            query: "setDeliverd",
            id: val
        })
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    style={{ width: '100%' }}
                    data={this.state.orders}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>

                        <List>
                            <ListItem icon>
                                <Left>
                                    <Icon name="ios-car" />
                                </Left>
                                <Body style={{ flexDirection: 'row', paddingTop: 12 }}>
                                    <Text>{item.OrderId}</Text>
                                    <Text note>{item.Customer.Name}</Text>
                                </Body>
                                <Right>
                                    <Button transparent warning small onPress={() => this.props.navigation.navigate("MapView")}>
                                        <Text>View Map</Text>
                                    </Button>
                                    <Button rounded success small onPress={() => this.handleDeliverd(item.OrderId)}>
                                        <Text>Deliverd</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        </List>
                    }
                />
            </View>
        );
    }
}