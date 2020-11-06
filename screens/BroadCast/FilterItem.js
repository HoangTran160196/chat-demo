import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';

const IMAGE = {
    PLUS: require('../../assets/img/plus.svg'),
    ARROW_DOWN: require('../../assets/img/dashicons_arrow-down.svg')
}

export default function FilterItem(props) {
    const { content, selected, onPress } = props
    // console.log(selected)
    return (
        <TouchableOpacity 
            style={[styles.container, selected ? styles.containerSelected : styles.containerUnselected]}
            onPress={() => onPress()}    
        >
            <Text style={styles.content}>{content}</Text>
            <SvgUri source={selected ? IMAGE.ARROW_DOWN : IMAGE.PLUS} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'rgb(233, 239, 243)',
        paddingHorizontal: 12,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    containerSelected: {
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#828282'
    },
    containerUnselected: {
        backgroundColor: '#EAEFF3',
        borderWidth: 0,
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