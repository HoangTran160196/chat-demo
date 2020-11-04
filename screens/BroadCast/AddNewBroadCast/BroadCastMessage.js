import React from 'react'
import { View, StyleSheet } from 'react-native'
import TelveroTextInput from './common/TelveroTextInput.js'
export default function BroadCastMessage(props) {
    const { style } = props
    return (
        <View style={[styles.containerStyle, style]}>
            <TelveroTextInput 
                label='Message'
                placeholder='Enter message'
                placeholderTextColor='#B0B0B0'
                inputContainer={styles.inputContainer}
                inputStyle={styles.inputStyle}
                numberOfLines={8}
                multiline={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
    },
    inputContainer: {
        height: 160,
    },
    inputStyle: {
        paddingTop: 8,
        height: 160,
        justifyContent:'flex-start',
    }
})