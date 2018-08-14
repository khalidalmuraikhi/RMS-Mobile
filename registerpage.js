import React, { Component } from 'react';
import { Alert, TextInput, View, Button, StyleSheet, TouchableOpacity, Text, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

export default class RegisterPage extends Component {

    static navigationOptions = {
        title: 'Register',
        headerRight: (
            <Image
                source={require('./images/Headers/register.png')}
                style={{ width: 50, height: 50, paddingRight: 10 }}
            />
        ),
    };

    state = {
        Email: '',
        Password: '',
        ConfirmPassword: ''
    }

    register = async (json, action) => {
        try {
            var response = await fetch(
                'http://192.168.56.1:45457/api/Account/Register', {
                    method: 'POST',
                    body: JSON.stringify(json),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            )
            console.log("register", response)
            action()
        }
        catch (e) {
            console.log("Error", e)
        }
    }

    handleRegister = () => {
        if (this.state.Password != this.state.ConfirmPassword) {
            alert("the password doesnt match")
        }
        else {
            this.register(
                this.state,
                () => this.props.navigation.navigate("Login")
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >
                    <View style={{ alignItems: 'center', marginBottom: 5 }} >
                        <Text style={{ color: 'black', fontSize: 40, paddingBottom: 65 }}>Register</Text>
                    </View>
                    <View>
                        {/* the entire form box */}
                        <View style={{ flexDirection: 'row' }}>
                            <Content>
                                <Form>
                                    <Item floatingLabel>
                                        <Label style={{ color: '#ff0000' }}>Email</Label>
                                        <Input
                                            style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                            selectTextOnFocus={true}
                                            onChangeText={(Email) => this.setState({ Email })}
                                            value={this.state.Email}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={{ color: '#ff0000' }}>Password</Label>
                                        <Input
                                            style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                            onChangeText={(Password) => this.setState({ Password })}
                                            value={this.state.Password}
                                            selectTextOnFocus={true}
                                            secureTextEntry={true}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={{ color: '#ff0000' }}> Confirm Password</Label>
                                        <Input
                                            style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                            onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })}
                                            value={this.state.ConfirmPassword}
                                            selectTextOnFocus={true}
                                            secureTextEntry={true}
                                        />
                                    </Item>
                                </Form>
                            </Content>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={this.handleRegister}>
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