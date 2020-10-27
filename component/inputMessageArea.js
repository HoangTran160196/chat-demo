import React from 'react'
import {TextInput, TouchableOpacity, Text, View, KeyboardAvoidingView, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputMessageArea = props => {
    return (
     
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.inputMessage}
                    placeholder='Type a message'
                    blurOnSubmit={false} 
                />
                <Ionicons style={styles.icon} name='ios-information-circle' size={20} color='rgb(58, 58, 58)' />
            </View>

            <TouchableOpacity style={[styles.button, styles.buttonOption]}>
                <Text>...</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonSend]} onPress={props.sendMessage}>
                <Text>...</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputMessageArea

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // padding: 8,
        paddingHorizontal: 8,
        alignItems: 'center',
    },  
    textInputContainer: {
        backgroundColor: 'rgb(232, 232, 232)',
        height: 40,
        flex: 1,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputMessage: {
        height: 44,
        paddingLeft: 8,
    },
    icon: {
        marginRight: 8
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOption: {
        marginHorizontal: 8,
        backgroundColor: 'rgb(232, 232, 232)',
    },
    buttonSend: {
        backgroundColor: 'rgb(0, 207, 126)'
    }
})