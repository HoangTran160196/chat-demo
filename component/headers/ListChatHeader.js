import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListChatHeader = (props) => {
    const { title } = props
    return (
        <Text style={styles.headerContainer}>{title}</Text>
    )
}

export default ListChatHeader

const styles = StyleSheet.create({
    headerContainer: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 3
    }
}) 

function getType(type) {
    switch (type) {
        case'ListChatHeader':
            break
        case 'Chat':
            break
    }
}