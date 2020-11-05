import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri'
const {width} = Dimensions.get('window');
const IMAGE = {
    BACKGROUND: require('../../../../assets/img/arrowErrorContainer.svg')
}

export default function TelveroValidateError(props) {
    const { textError } = props
    return (
        <View source={IMAGE.BACKGROUND} style={styles.errorContainer}>
            <SvgUri source={IMAGE.BACKGROUND} style={styles.arrowImage}/>
            <Text style={styles.content}>{textError}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        backgroundColor: '#FF4D49',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        minHeight: 26,
        resizeMode: 'center', 
        flexWrap: 'wrap',
        paddingTop: 2,
        paddingBottom: 4,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginTop: 6,
    },
    arrowImage: {
        position: 'absolute',
        width: 10,
        height: 10,
        top: -3,
        left: 4
    },
    content: {
        fontFamily: 'Lato_400Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#fff'
    }
})