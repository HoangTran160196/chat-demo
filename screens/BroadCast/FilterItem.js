import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';

const IMAGE = {
    PLUS: require('../../assets/img/plus.svg')
}

const FilterItem = props => {
    const { content } = props
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.content}>{content}</Text>
            <SvgUri source={IMAGE.PLUS} />
        </TouchableOpacity>
    )
}

export default FilterItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'rgb(233, 239, 243)',
        paddingHorizontal: 12,
        borderRadius: 15,
        paddingVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
        backgroundColor: '#EAEFF3'
    },
    content: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        fontWeight:'bold',
        fontStyle: 'normal',
        color: '#333333',
        marginRight: 4,
    }
})