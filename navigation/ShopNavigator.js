import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import HeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';

const Stack = createStackNavigator();

function ProdcutsNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ProductsOverview"
                    component={ProductsOverviewScreen}
                    options={({ navigation }) => ({
                        title: "All Products",
                        headerTintColor: 'white',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                                <Item
                                    title='Cart'
                                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                                    onPress={() => {
                                        navigation.navigate("CartScreen")
                                    }}
                                />
                            </HeaderButtons>
                        ),
                        headerStyle: {
                            backgroundColor: Colors.primary
                        }
                    })}
                />
                <Stack.Screen
                    name="ProductDetailScreen"
                    component={ProductDetailScreen}
                    options={({ route }) => ({
                        title: route.params.productTitle,
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: Colors.primary,
                        }
                    })}
                />
                <Stack.Screen
                    name="CartScreen"
                    component={CartScreen}
                    options={({ route }) => ({
                        title: "Your Cart",
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: Colors.primary,
                        }
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ProdcutsNavigator;