import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { Platform, View, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Fontisto';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import HeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';


const Stack = createStackNavigator();
const ordersStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const userStack = createStackNavigator();

const userNavigator = () => {
    return (
        <ordersStack.Navigator>
            <userStack.Screen
                name="UserProducts"
                component={UserProductsScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.toggleDrawer();
                            }}>
                                <Ionicons name="menu-outline" size={23} color='white' />
                            </TouchableOpacity>
                        </View>
                    ),
                    title: "Your Products",
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    }
                })}
            />
        </ordersStack.Navigator>
    );
}

const ordersNavigator = () => {
    return (
        <ordersStack.Navigator>
            <ordersStack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.toggleDrawer();
                            }}>
                                <Ionicons name="menu-outline" size={23} color='white' />
                            </TouchableOpacity>
                        </View>
                    ),
                    title: "Orders",
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    }
                })}
            />
        </ordersStack.Navigator>
    );
}

function ProdcutsNavigator() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="ProductsOverview"
                component={ProductsOverviewScreen}
                options={({ navigation }) => ({
                    title: "All Products",
                    headerTintColor: 'white',
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.toggleDrawer();
                            }}>
                                <Ionicons name="menu-outline" size={23} color='white' />
                            </TouchableOpacity>
                        </View>
                    ),
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
    );
}

const MainDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContentOptions={{
                    activeTintColor: Colors.primary,
                }}

            >
                <Drawer.Screen
                    name="Shop"
                    component={ProdcutsNavigator}
                    options={{
                        drawerIcon: () => <Ionicons name="md-basket-outline" size={20} color={Colors.primary} />,
                        activeTintColor: Colors.primary,
                    }}
                />
                <Drawer.Screen
                    name="Orders"
                    component={ordersNavigator}
                    options={{
                        drawerIcon: () => <Ionicons name="filter-sharp" size={20} color={Colors.primary} />,
                        activeTintColor: Colors.primary,
                    }}
                />
                 <Drawer.Screen
                    name="Admin"
                    component={userNavigator}
                    options={{
                        drawerIcon: () => <Ionicons name="today-outline" size={20} color={Colors.primary} />,
                        activeTintColor: Colors.primary,
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainDrawer;