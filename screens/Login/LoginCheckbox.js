import React from 'react'
import { StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import SvgUri from 'react-native-svg-uri'

const LoginCheckbox = props => {
    const { title, checkedIcon, uncheckedIcon } = props
    return (
        <CheckBox
            center
            title={title}
            checkedIcon={<SvgUri source={checkedIcon}/>}
            uncheckedIcon={<SvgUri source={uncheckedIcon} />}
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