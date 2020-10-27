import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListChatButtonHeader = (props) => {
    return (
        <TouchableOpacity style={styles.headerContainer}>
            <Text style={styles.buttonText}>New chat</Text>
        </TouchableOpacity>
    )
}

export default ListChatButtonHeader

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 16,
        backgroundColor: 'rgb(0, 207, 126)',
        height: 44,
        margin: 16,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: '600'
    }
}) 