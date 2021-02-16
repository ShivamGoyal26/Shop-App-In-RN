import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/Products';

const UserProductsScreen = props => {

    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    return <FlatList
        data={userProducts}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
                props.navigation.navigate("EditProductScreen", { id: itemData.item.id });
            }}
        >
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("EditProductScreen", { id: itemData.item.id });
            }}>
                <Ionicons
                    name='ios-pencil'
                    color={Colors.primary}
                    size={28}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                dispatch(productsActions.deleteProduct(itemData.item.id))
            }}>
                <AntDesign
                    name='delete'
                    color={Colors.primary}
                    size={28}
                />
            </TouchableOpacity>
        </ProductItem>
        }
    />
}

export default UserProductsScreen; 
