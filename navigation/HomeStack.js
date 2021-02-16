import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ShopNavigator';
import { AuthContext } from './AuthProvider';



const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

function ChatApp() {
    const { logout } = useContext(AuthContext);
    return (
        <ChatAppStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6646ee',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontSize: 22,
                },
            }}
        >
            <ChatAppStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
        </ChatAppStack.Navigator>
    );
}

export default function HomeStack() {
    return (
        <ModalStack.Navigator mode='modal' headerMode='none'>
            <ModalStack.Screen name='ChatApp' component={ChatApp} />
        </ModalStack.Navigator>
    );
}