import React, { Component,Text } from 'react';
import * as DB from './DB'

export class CountMeals extends Component {

    state = {
        OrderItems: []
    }

    OrderItemDB = new DB('http://192.168.56.1:45457/api/OrderItem')

    componentDidMount() {
        this.getOrderItem({ OrderId: 3})
    }

    getOrderItem = async (parameters) => {
        await this.OrderItemDB.find(
            (data) => this.setState({ OrderItems: data }),
            parameters
        )
    }

    render() {
        return (
            <Text>{this.props.Id}</Text>
        );
    }
}