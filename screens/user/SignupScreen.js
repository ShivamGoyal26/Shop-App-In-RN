import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { AuthContext } from '../../Navigation/AuthProvider';
import FormInput from '../../components/UI/FormInput';
import FormButton from '../../components/UI/FormButton';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/actions/User';

export default function SignupScreen({ navigation }) {

    const dispatch = useDispatch();

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();

    var lastSeen = hours + ':' + min + ' hour';
    var currentDate = date + '/' + month + '/' + year;

    const { register } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function addUser() {
        const unsubscribe = firestore()
            .collection('Users').doc(email)
            .set({
                name: name,
                createdAt: currentDate,
                email: email,
                lastSeen: lastSeen,
            });

        return () => unsubscribe();

    }

    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Register to Shop</Title>
            <FormInput
                labelName='Name'
                value={name}
                autoCapitalize='none'
                onChangeText={nameData => setName(nameData)}
            />

            <FormInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={userEmail => setEmail(userEmail)}
            />
            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={userPassword => setPassword(userPassword)}
            />
            <FormButton
                title='Signup'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress={async () => {
                    await register(email, password);
                    addUser();

                }}
            />
            <FormButton
                title='Already Registered? Login here'
                modeValue='text'
                uppercase={false}
                labelStyle={styles.navButtonText}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        marginBottom: 10,
        color: 'black'
    },
    loginButtonLabel: {
        fontSize: 22
    },
    navButtonText: {
        fontSize: 18
    },
    navButton: {
        marginTop: 10
    }
});