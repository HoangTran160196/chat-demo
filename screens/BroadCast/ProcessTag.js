import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getStatusTheme } from '../../common/helper.js'

const IMAGE_STATE = {
    COMPLETE: require('../../assets/img/completed.png'),
    IN_PROGRESS: require('../../assets/img/inProgress.png'),
    CALENDAR: require('../../assets/img/calendar.png'),
}

const ProcessTag = props => {
    const { status } = props
    const { borderColor, icon , color} = getStatusTheme(status)
    return (
        <View style={[styles.container, borderColor]}>
            <Image style={styles.tinyIcon} source={icon}/>
            <Text style={[styles.text, color]}>{status}</Text>
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