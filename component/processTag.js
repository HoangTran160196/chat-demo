import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStatusTheme } from '../common/helper.js'


const ProcessTag = props => {
    const { status } = props
    const { backgroundColorTheme, icon } = getStatusTheme(status)
    return (
        <View style={[styles.container, backgroundColorTheme]}>
            <Ionicons name={icon} size={16} color='white' />
            <Text style={styles.text}>{status}</Text>
        </View>
    )
}

export default ProcessTag

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight:'700',
        marginLeft: 8
    }
})