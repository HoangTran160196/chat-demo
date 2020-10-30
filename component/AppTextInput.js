import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const AppTextInput = props => {
    const { style, placeholder, icon } = props
    return (
        <View style={[styles.appTextInputContainer, style]}>
            <TextInput 
                style={[styles.appTextInput]}
                placeholder={placeholder}    
            />
            {icon && (<View style={styles.icon}></View>)}
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    appTextInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'red',
    },
    appTextInput: {
        flex: 1,
        height: 40,
        // backgroundColor: 'orange',
        paddingVertical: 9,
        paddingHorizontal: 12,
    },
    icon: {
        width: 24,
        height: 24,
        backgroundColor: 'blue',
        marginRight: 16
    }
})



