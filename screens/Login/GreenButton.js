import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default function GreenButton(props) {
    const { title, onPress, style } = props
    return (
        <Button
            containerStyle={[style]}
            titleStyle={styles.buttonTitle}
            buttonStyle={[styles.buttonStyle, style]}
            title={title}
            onPress={() => onPress()}
        />
      
    )
}

const styles = StyleSheet.create({
    buttonTitle: {
        fontFamily: 'Lato_700Bold',
        fontWeight: '700',
        fontSize: 'normal',
        fontSize: 16,
        lineHeight: 22.4,
        color: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#1ACE77',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    }
})