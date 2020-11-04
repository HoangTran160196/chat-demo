import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';

export default function BroadCastTextInform(props) {
    const { title, value, icon } = props
    return (
        <View style={styles.container}>
            <SvgUri style={styles.tinyIcon} source={icon} />
            <Text style={[styles.fontLato700Bold, styles.title]}>{title}: 
                <Text style={styles.value}> {value}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#808080'
    },
    value: {
        color: '#333333'
    },
    tinyIcon: {
        marginRight: 4
    },
    fontLato700Bold: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        fontWeight:'bold',
    }
})