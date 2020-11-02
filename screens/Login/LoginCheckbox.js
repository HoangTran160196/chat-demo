import React from 'react'
import { Input } from 'react-native-elements'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'

const LoginCheckbox = props => {
    const { title, checkedIcon, uncheckedIcon } = props
    return (
        <CheckBox
            center
            title={title}
            checkedIcon={<Image source={checkedIcon} />}
            uncheckedIcon={<Image source={uncheckedIcon} />}
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
            // checked={this.state.checked}
        />
    )
}

export default LoginCheckbox

const styles = StyleSheet.create({
    containerStyle: {
        // reset margin, padding default
        margin: 0,
        padding: 0,
        marginLeft: 0,
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 14,
        marginLeft: 5,
        marginRight: 0 // reset default margin right default
    }
})