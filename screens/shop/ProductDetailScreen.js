import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/Cart';
import Toast from 'react-native-simple-toast';

import Colors from '../../constants/Colors';


const ProductDetailScreen = props => {
    const productId = props.route.params.productId;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={{
                    padding: 10,
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    borderRadius: 10,
                }} onPress={() => {
                    dispatch(cartActions.addToCart(selectedProduct));
                    Toast.show('Add To Cart Successful!');
                }}>
                    <Text style={{ color: Colors.primary, fontSize: 20 }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.price} >Price: ${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description} >{selectedProduct.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        borderRadius: 20,
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center',
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        color: 'grey',
    },
    imageContainer: {
        padding: 10,
    },
});

export default ProductDetailScreen;