import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {DrawerItem} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
// import {AuthContext} from '../../Navigation/AuthProvider';

const DrawerContent = props => {

// const { logout } = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://i.pinimg.com/originals/02/05/9f/02059f3e1a767b077acd60f44e335748.jpg'
                        }}
                        size={50}
                    />
                    <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                        <Title style={styles.title}>Caroline Forbes</Title>
                        <Caption style={styles.caption}>caroline@gmail.com</Caption>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                    </View>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                        <Caption style={styles.caption}>Followers</Caption>
                    </View>
                </View>
            </View>

            <Drawer.Section>
                <DrawerItem
                    icon={() => (
                        <Ionicons
                            name="md-basket-outline"
                            color={Colors.primary}
                            size={26}
                        />
                    )}
                    label="Shop"
                    onPress={() => {
                        props.navigation.navigate('MainScreen')
                    }}
                />
                {/* </Drawer.section> */}

                <DrawerItem
                    icon={() => (
                        <Ionicons
                            name="filter-sharp"
                            color={Colors.primary}
                            size={26}
                        />
                    )}
                    label="Orders"
                    onPress={() => {
                        props.navigation.navigate('Orders')
                    }}
                />

                <DrawerItem
                    icon={() => (
                        <Feather
                            name="edit"
                            color={Colors.primary}
                            size={26}
                        />
                    )}
                    label="Admin"
                    onPress={() => {
                        props.navigation.navigate('Admin')
                    }}
                />

            </Drawer.Section>

            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    icon={() => (
                        <Icon
                            name="exit-to-app"
                            color='grey'
                            size={26}
                            onPress={() => {
                                // logout()
                            }}
                        />
                    )}
                    label="Sign Out"
                />
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        // flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContent