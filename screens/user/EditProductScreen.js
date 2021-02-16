import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/Products';

const EditProductScreen = ({ navigation, route }) => {

    const prodId = route.params.id;
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));
    const dispatch = useDispatch();

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

    const submitHandler = () => {
        if (editedProduct) {
            dispatch(productsActions.updateProduct(prodId, title, description, imageUrl));

        } else {
            dispatch(productsActions.createProduct(title, description, imageUrl, +price));
        }
        navigation.pop();
    };

    return (
        <ScrollView>

            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>

                <View style={styles.formControl}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput
                        style={styles.input}
                        value={imageUrl}
                        onChangeText={text => setImageUrl(text)}
                    />
                </View>

                {editedProduct ? null : <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input}
                        value={price}
                        onChangeText={text => setPrice(text)}
                    />
                </View>}

                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input}
                        value={description}
                        onChangeText={text => setDescription(text)}
                    />
                </View>

                <TouchableOpacity style={styles.save} onPress={submitHandler}>
                    <Text style={{ color: Colors.primary, fontSize: 20 }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    formControl: {
        width: '100%',
    },
    label: {
        marginVertical: 10,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 5,
    },
    save: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        fontSize: 20,
    }
});

export default EditProductScreen;