import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const AppPickerButton = props => {
    const {text} = props
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{text}</Text>
            <View style={styles.icon}></View>
        </TouchableOpacity>
    )
}

export default AppPickerButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 12,        
    },
    icon: {
        width: 24,
        height: 24,
        backgroundColor: 'blue'
    }
})