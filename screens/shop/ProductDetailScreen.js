import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const ProductDetailScreen = props => {
    const productId = props.route.params.productId;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    return (
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ProductDetailScreen;