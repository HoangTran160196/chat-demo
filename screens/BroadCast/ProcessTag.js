import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getStatusTheme } from '../../common/helper.js'
import SvgUri from 'react-native-svg-uri';

export default function ProcessTag(props){
    const { status } = props
    const { borderColor, icon , color} = getStatusTheme(status)
    return (
        <View style={[styles.container, borderColor]}>
            <SvgUri style={styles.tinyIcon} width="16" height="16" source={icon} />
            <Text style={[styles.text, color]}>{status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderWidth: 1,
    },
    text: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        fontWeight:'bold',
        marginLeft: 4,
    },
    tinyIcon: {
        width: 16,
        height: 16,
    }
})