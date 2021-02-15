import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/Cart';
import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        props.navigation.navigate("ProductDetailScreen", {
            productId: id,
            productTitle: title
        });
    };

    return <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={
            itemData => <ProductItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onSelect={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title,);
                }}

            >
                <TouchableOpacity onPress={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title,);
                }}>
                    <Ionicons
                        name='information-circle-outline'
                        color={Colors.primary}
                        size={28}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                    Toast.show('Add To Cart Successful!');
                }}>
                    <Ionicons
                        name='cart-outline'
                        color={Colors.primary}
                        size={28}
                    />
                </TouchableOpacity>
            </ProductItem>
        }
    />;
};

const styles = StyleSheet.create({

})

export default ProductsOverviewScreen;