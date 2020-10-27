import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FilterItem = props => {
    const { content } = props
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

export default FilterItem

const styles = StyleSheet.create({
    container: {
        height: 30,
        backgroundColor: 'rgb(233, 239, 243)',
        paddingHorizontal: 16,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    content: {
    }
})