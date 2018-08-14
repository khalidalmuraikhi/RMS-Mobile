import React from 'react';
import DB from './DB'
import { View, FlatList, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Right, Left, Icon, List, ListItem, Switch } from 'native-base';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import CountMeals from './CountMeals'


class Greeting extends React.Component {
    state = {
        orderItems: []
    }

    OrderItemDB = new DB('http://192.168.56.1:45457/api/OrderItems')

    componentDidMount() {
        this.find({  OrderId : this.props.Id})
    }


    find = async (parameters) => {
        await this.OrderItemDB.find(
            (data) => this.setState({ orderItems: data }),
            parameters
        )
    }

    render() {
        return (
            <View>
                {
                    this.state.orderItems.map((item) =>
                        item.Meal
                            ?
                            <Text> {item.Meal.Name}</Text>
                            :
                            <Text> </Text>
                    )
                }
            </View>
        );
    }
}


export class CookerOrdersPaid extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Chef Orders',
            headerRight: (
                <Image
                    source={require('./images/Headers/chef.png')}
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
        this.find({ query: "getPaid" })
    }

    Quary = (parameters) => {
        this.db.find(
            (data) => this.setState({}),
            parameters
        )
    }

    find = async (parameters) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
    }

    handleCooking = (val) => {
        console.log("val = " + val)
        this.find({
            query: "setCooking",
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
                        <Card>
                            <CardItem header>
                                <Text>{item.OrderId}, {item.Customer.Name}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Greeting Id={item.OrderId} />
                                    <Text>
                                        {item.OrderType}
                                    </Text>
                                    <Text>
                                        {item.OrderDate}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>{item.Status}</Text>
                                <Right>
                                    <Button iconRight light onPress={() => this.handleCooking(item.OrderId)}>
                                        <Text>Start Cooking</Text>
                                        <Icon name='arrow-forward' />
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    }
                />
            </View>
        );
    }
}

export class CookerOrdersInprogress extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Chef Orders',
            headerRight: (
                <Image
                    source={require('./images/Headers/chef.png')}
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
        this.find({ query: "getCooking" })
        console.log(this.state.orders)
    }

    find = async (parameters) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
    }

    handleDone = (val) => {
        console.log("val = " + val)
        this.find({
            query: "setDone",
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
                                    <Icon name="checkmark" />
                                </Left>
                                <Body>
                                    <Text>{item.OrderId}</Text>
                                    <Text note>{item.OrderType}</Text>
                                </Body>
                                <Right>
                                    <Button small success iconRight light onPress={() => this.handleDone(item.OrderId)}>
                                        <Text>Ready !</Text>
                                        <Icon name='arrow-forward' />
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

export class CookerOrdersDone extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Chef Orders',
            headerRight: (
                <Image
                    source={require('./images/Headers/chef.png')}
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
                                    <Icon name="checkmark" />
                                </Left>
                                <Body>
                                    <Text>{item.OrderId}</Text>
                                    <Text note>{item.Customer.Name}, {item.OrderType}</Text>
                                </Body>
                            </ListItem>
                        </List>
                    }
                />
            </View>
        );
    }
}