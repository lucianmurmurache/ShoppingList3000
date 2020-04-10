import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput
                placeholder='Add Item...'
                style={styles.input}
                onChangeText={onChange}
                value={text}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    addItem(text);
                    setText('');
                }}
            >
                <Text style={styles.btnText}>
                    <Ionicons
                        name='ios-add-circle-outline'
                        size={32}
                    />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 20,
    },
    btn: {
        margin: 5,
        padding: 9,
        backgroundColor: '#c2bad8',
    },
    btnText: {
        fontSize: 20,
        color: '#483D8B',
        textAlign: 'center',
    },
});

export default AddItem;
