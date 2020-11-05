import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';

export default function BroadCastButton(props) {
    const { title, iconChecked, iconUnchecked, containerStyle, isButtonPressed, onPress } = props
    return (
        <Button
            icon={
                <SvgUri style={styles.tinyIcon} source={isButtonPressed ? iconChecked : iconUnchecked} />
            }
            iconRight={true}
            title={title}
            onPress={() => onPress()}
            containerStyle={[styles.containerStyle, containerStyle]}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#EAEFF3',
        margin: 0,
        height: 48,
        justifyContent: 'center',
        borderRadius: 4
    },
    buttonStyle: {
        paddingHorizontal: 16,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        padding: 0,
        height: 48,
    },
    titleStyle: {
        fontFamily: 'Lato_400Regular',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#333333'
    }
})