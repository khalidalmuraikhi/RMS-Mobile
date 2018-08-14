import React from 'react';
import { Button, View, Text, FlatList, ImageBackground, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import * as aziz from 'native-base';// { Container, Header, Tab, Tabs, TabHeading, Icon, Text }

export default class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Welcome Mr. Admin',
            headerRight: (
                <Image
                    source={{uri: 'https://www.movilzona.es/app/uploads/2017/03/icono-adaptativo-Google-O.gif'}}
                    style={{ width: 50, height: 50 }}
                />
            ),   
        };
    };

    state = {
        data: []
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <aziz.Container>
                    <aziz.Header hasTabs style={{ height: 0 }} />

                    <aziz.Tabs>
                        {/* MEALS TAB */}
                        <aziz.Tab heading={<aziz.TabHeading><aziz.Icon name="pizza" /></aziz.TabHeading>}>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent' }}>
                                <ImageBackground style={{ flex: 1, justifyContent: 'center' }} source={require('./images/MealsBackground.jpg')}>
                                    <View style={{ paddingLeft: '38%' }}>
                                        <aziz.Button large rounded danger onPress={() => this.props.navigation.navigate("CustomerTab")}>
                                            <aziz.Text>Meals</aziz.Text>
                                        </aziz.Button>
                                    </View>
                                    <View style={{ height: 110, alignItems: 'center' }}>
                                        <aziz.Card style={{ width: '90%' }}>
                                            <aziz.CardItem>
                                                <aziz.Body>
                                                    <aziz.Text style={{ textAlign: 'center', color: 'black' }}>
                                                        You will see the meals page which the customer can see all the meals and order from there,
                                                        also he can see his orders history.
                                            </aziz.Text>
                                                </aziz.Body>
                                            </aziz.CardItem>
                                        </aziz.Card>
                                    </View>
                                </ImageBackground>
                            </View>
                        </aziz.Tab>

                        {/* CHEF TAB */}
                        <aziz.Tab heading={<aziz.TabHeading><aziz.Icon name="restaurant" /></aziz.TabHeading>}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                            <ImageBackground style={{ flex: 1, justifyContent: 'center' }} source={require('./images/ChefBackground.jpg')}>
                                <View style={{ paddingLeft: '38%' }}>
                                    <aziz.Button large rounded danger onPress={() => this.props.navigation.navigate("CookerOrders")} title="Chef" color="red">
                                        <aziz.Text>Chef</aziz.Text>
                                    </aziz.Button>
                                </View>
                                <View style={{ height: 110, alignItems: 'center' }}>
                                    <aziz.Card style={{ width: '90%' }}>
                                        <aziz.CardItem>
                                            <aziz.Body>
                                                <aziz.Text style={{ textAlign: 'center' }}>
                                                    You will see the Chef page which the chef can see all the incoming orders and send it to preparing page,
                                                    also he can send it to done page when the order is ready.
                                            </aziz.Text>
                                            </aziz.Body>
                                        </aziz.CardItem>
                                    </aziz.Card>
                                </View>
                                </ImageBackground>
                            </View>
                        </aziz.Tab>

                        {/* DRIVER TAB */}
                        <aziz.Tab heading={<aziz.TabHeading><aziz.Icon name="ios-car" /></aziz.TabHeading>}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                            <ImageBackground style={{ flex: 1, justifyContent: 'center' }} source={require('./images/DeliveryBackground.jpg')}>
                                <View style={{ paddingLeft: '38%' }}>
                                    <aziz.Button large rounded danger onPress={() => this.props.navigation.navigate("DriverOrders")} title="Driver" color="red">
                                        <aziz.Text>Driver</aziz.Text>
                                    </aziz.Button>
                                </View>
                                <View style={{ height: 110, alignItems: 'center' }}>
                                    <aziz.Card style={{ width: '90%' }}>
                                        <aziz.CardItem>
                                            <aziz.Body>
                                                <aziz.Text style={{ textAlign: 'center' }}>
                                                    You will see the Driver page which the driver can see all the orders that he will deliver to the customers,
                                                    also he can see the map to follow the customer's location.
                                            </aziz.Text>
                                            </aziz.Body>
                                        </aziz.CardItem>
                                    </aziz.Card>
                                </View>
                                </ImageBackground>
                            </View>
                        </aziz.Tab>

                    </aziz.Tabs>
                </aziz.Container>
            </View>
        );
    }
}