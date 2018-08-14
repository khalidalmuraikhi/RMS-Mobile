import React from 'react';
import { View, FlatList, AsyncStorage, Alert, Image } from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import DB from './DB'
import ImagesJS from './Images'

export default class MyOrder extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Your Current Order',
            headerRight: (
                <Image
                    source={require('./images/Headers/chef.png')}
                    style={{ width: 50, height: 50 }}
                />
            ),
        };
    };

    state = {
        order: null,
        OrderItems: [],
        data: []
    }

    db = new DB('http://192.168.56.1:45457/api/Orders')
    dbUser = new DB('http://192.168.56.1:45457/api/User')

    componentDidMount() {
        this.findCurrentUser()
        this.findOrderItem()
        console.log(this.state.OrderItems)
    }

    findCurrentUser = async (parameters) => {
        await this.dbUser.find(
            (data) => this.setState({ order: data }),
            {
                query: "order"
            }
        )
    }

    Quary = (parameters) => {
        this.dbUser.find(
            (data) => this.setState({}),
            parameters
        )
    }


    findOrderItem = async (parameters) => {
        await this.dbUser.find(
            (data) => this.setState({ OrderItems: data }),
            {
                query: "orderitems"
            }
        )
    }

    handleCheckout = () => {
        console.log("im checking out ")
        this.Quary({
            query: "checkout"
        })
    }

    handleEmptyCart = () => {
        console.log("im emypying cart ")
        this.Quary({
            query: "emptycart"
        })
    }

    handleLogout = () => {
        AsyncStorage.getItem('token', (err, item) => console.log(item));
        AsyncStorage.getItem('userName', (err, item) => console.log(item));
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    style={{ width: '100%' }}
                    data={this.state.OrderItems}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <List>
                            
                            <ListItem avatar>
                                <Left>
                                    {item.Meal.Category.Name
                                        ?
                                        <Thumbnail source={ImagesJS[item.Meal.Category.Name.split(" ")[0]]} />
                                        :
                                        <Thumbnail source={require('./images/default-thumbnail.jpg')} />
                                    }
                                </Left>
                                <Body>
                                    <Text>{item.Quantity} {item.Meal.Name}</Text>
                                    <Text note>{item.Meal.Description}</Text>
                                </Body>
                                <Right>
                                    <Text note>{item.Status}</Text>
                                </Right>
                            </ListItem>
                        </List>
                    }
                />
                <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                    <Button rounded success onPress={() => this.handleCheckout()}>
                        <Text>Checkout</Text>
                    </Button>
                </View>
            </View>
        );
    }
}