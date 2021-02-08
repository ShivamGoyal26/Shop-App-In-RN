import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const Stack = createStackNavigator();

function ProdcutsNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ProductsOverview"
                    component={ProductsOverviewScreen}
                    options={{
                        title: "All Products",
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: Colors.primary
                        }
                    }}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ProdcutsNavigator;