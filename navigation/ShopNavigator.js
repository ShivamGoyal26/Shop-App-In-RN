import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { Platform, View, TouchableOpacity, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import DrawerContent from '../screens/shop/DrawerContent';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import HeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';


const Stack = createStackNavigator();
const ordersStack = createStackNavigator();
const MainNavigator = createDrawerNavigator();
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
                    headerRight: () => (
                        <View style={{ marginRight: 10 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("EditProductScreen", {});
                            }}>
                                <AntDesign name="pluscircleo" size={23} color='white' />
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
            <userStack.Screen
                name="EditProductScreen"
                component={EditProductScreen}
                options={({ navigation, route }) => ({
                    headerRight: () => (
                        <View style={{ marginRight: 10 }}>
                            <TouchableOpacity onPress={() => {

                                // navigation.pop();
                                Alert.alert("This Doesn't work!")
                            }}>
                                <AntDesign name="save" size={23} color='white' />
                            </TouchableOpacity>
                        </View>
                    ),
                    title: route.params.id ? "Edit Product" : 'Add Product',
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

const CustomDrawer = () =>

    <MainNavigator.Navigator
        drawerContent={DrawerContent}
        drawerContentOptions={{
            activeTintColor: Colors.accentColor,
        }}>

        <MainNavigator.Screen
            name="MainScreen"
            component={ProdcutsNavigator} />

        <MainNavigator.Screen
            name="Orders"
            component={ordersNavigator}
            options={{
                drawerIcon: () => <Ionicons name="filter-sharp" size={20} color={Colors.primary} />,
                activeTintColor: Colors.primary,
            }} />

        <MainNavigator.Screen
            name="Admin"
            component={userNavigator}
            options={{
                drawerIcon: () => <Feather name="edit" size={20} color={Colors.primary} />,
                activeTintColor: Colors.primary,
            }} />


    </MainNavigator.Navigator>



// const MainDrawer = () => {
//     const { logout } = useContext(AuthContext);
//     return (

//         <Drawer.Navigator
//             initialRouteName="Home"
//             drawerContentOptions={{
//                 activeTintColor: Colors.primary,
//             }}

//         >
//             <Drawer.Screen
//                 name="Shop"
//                 component={ProdcutsNavigator}
//                 options={{
//                     drawerIcon: () => <Ionicons name="md-basket-outline" size={20} color={Colors.primary} />,
//                     activeTintColor: Colors.primary,
//                 }}
//             />
//             <Drawer.Screen
//                 name="Orders"
//                 component={ordersNavigator}
//                 options={{
//                     drawerIcon: () => <Ionicons name="filter-sharp" size={20} color={Colors.primary} />,
//                     activeTintColor: Colors.primary,
//                 }}
//             />
//             <Drawer.Screen
//                 name="Admin"
//                 component={userNavigator}
//                 options={{
//                     drawerIcon: () => <Feather name="edit" size={20} color={Colors.primary} />,
//                     activeTintColor: Colors.primary,
//                 }}
//             />
//         </Drawer.Navigator>
//     );
// }

// export default MainDrawer;

export default CustomDrawer;