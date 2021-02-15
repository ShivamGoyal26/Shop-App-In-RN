import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CartItem from './CartItem';
import Colors from '../../constants/Colors';

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                setShowDetails(prevState => !prevState);
            }}>
                <Text style={styles.showDetail}>{showDetails ? "Hide Details" : "Show Details"}</Text>
            </TouchableOpacity>
            {showDetails && <View style={styles.detailItems}>
                {props.items.map(cartItem => <CartItem
                    key={cartItem.productId}
                    quantity={cartItem.quantity}
                    amount={cartItem.sum}
                    title={cartItem.productTitle}
                />)}
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
        alignItems: 'center'
    },

    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    totalAmount: {
        fontSize: 16,
    },
    date: {
        fontSize: 16,
        color: '#888',
    },
    showDetail: {
        color: Colors.primary,
        fontSize: 16,
    },
    detailItems: {
        width: '100%',
    }
});

export default OrderItem;