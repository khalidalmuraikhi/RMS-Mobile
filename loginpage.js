import React, { Component } from 'react';
import { Alert, TextInput, View, Button, StyleSheet, TouchableOpacity, Text, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

export default class StudentReg extends Component {

    static navigationOptions = {
        title: 'Welcome To RMS',
        headerRight: (
            <Image
                source={require('./images/Headers/login.png')}
                style={{ width: 50, height: 50, paddingRight: 10 }}
            />
        ),
    };

    state = {
        Username: '', //Users Example:- Admin User: admin@admin.com  --  Customer User: khalid@customer.com  --  Chef User: aziz@chef.com  --  Driver User: noor@driver.com
        Password: ''  //All Users Password:- Password1!
    }

    login = async (json, action) => {
        try {
            var response = await fetch(
                'http://192.168.56.1:45457/Token',
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'POST',
                    body: 'grant_type=password&username=' + json.Username + '&password=' + json.Password
                }
            )
            console.log("login", response)
            const data = await response.json();

            await AsyncStorage.setItem('token', data.access_token);
            await AsyncStorage.setItem('userName', data.userName);

            action(data);
        }
        catch (e) {
            console.log("Error", e)
        }
    }

    redicrection = async () => {
        const value = AsyncStorage.getItem('userName');
        if (value !== null) {
            // We have data!!
            console.log(value._65);
        }

        let rAdmin = /^[a-z A-Z 0-9 . _ ]+@+admin+\.+[a-z A-Z]/

        console.log("this user is" + TOKEN)

        if (rAdmin.test(user)) {
            this.props.navigation.navigate("Home")
        }
    }

    handleLogin = () => {
        this.login(
            this.state,
            (data) => {
                if (data.access_token) {
                    let rexAdmin = /^[a-z A-Z 0-9 . _ ]+@+admin+\.+[a-z A-Z]/
                    let rexChef = /^[a-z A-Z 0-9 . _ ]+@+chef+\.+[a-z A-Z]/
                    let rexDriver = /^[a-z A-Z 0-9 . _ ]+@+driver+\.+[a-z A-Z]/

                    console.log("this user is" + data.userName)

                    if (rexAdmin.test(data.userName)) {
                        this.props.navigation.navigate("HomeScreen")
                    }

                    else if (rexChef.test(data.userName)) {
                        this.props.navigation.navigate("CookerOrders")
                    }
                    else if (rexDriver.test(data.userName)) {
                        this.props.navigation.navigate("DriverOrders")
                    }
                    else {
                        this.props.navigation.navigate("CustomerTab")
                    }
                }
                else {
                    Alert.alert("wrong user/password input ")
                }

            }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >
                    <View style={{ alignItems: 'center', marginBottom: 5 }} >
                        <Text style={{ fontSize: 40, color: 'black', paddingBottom: 65 }}>Login</Text>
                    </View>

                    <View>
                        {/* the entire form box */}
                        <View style={{ flexDirection: 'row' }}>
                            <Content>
                                <Form>
                                    <Item floatingLabel>
                                        <Label style={{ color: '#ff0000', fontWeight: 'bold' }}>Email</Label>
                                        <Input
                                            style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                            selectTextOnFocus={true}
                                            onFocus={this.ShowOnFocus}
                                            onChangeText={(Username) => this.setState({ Username })}
                                            value={this.state.Username}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={{ color: '#ff0000', fontWeight: 'bold' }}>Password</Label>
                                        <Input
                                            style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                            onChangeText={(Password) => this.setState({ Password })}
                                            value={this.state.Password}
                                            selectTextOnFocus={true}
                                            secureTextEntry={true}
                                        />
                                    </Item>
                                </Form>
                            </Content>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={this.handleLogin}>
                                <View style={styles.btnContainer}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, margin: 10 }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Register")}>
                                <View style={styles.btnContainer}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, margin: 10 }}>Register</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    textIn: {
        color: 'black',
        fontSize: 20,
        margin: 10
    },
    textInNotValid: {
        color: 'red',
        fontSize: 20,
        margin: 10
    },
    btnContainer: {
        backgroundColor: "#999999",
        borderRadius: 50,
        justifyContent: 'center',
        width: 250
    }
});