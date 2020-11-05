import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import TelveroValidateError from './common/TelveroValidateError.js'
import { Button } from 'react-native-elements'

export default function BroadCastDropdown(props) {
    const {
        label,
        style,
        placeholder,
        enable = true,
        onPress,
        hasError,
        textError,
        title,
        icon,
        isRequired
    } = props
    return (
        <View style={[styles.container, style]}>
            {console.log(title)}
            <Text style={styles.label}>{label}
                {isRequired && <Text style={styles.required}> *</Text>}
            </Text>
            <Button
                icon={
                    <SvgUri style={styles.tinyIcon} source={icon} />
                }
                iconRight={true}
                title={title ? title : placeholder}
                onPress={() => onPress()}
                buttonStyle={[styles.buttonContainer, hasError && styles.error]}
                titleStyle={[styles.textStlye, title ? styles.title : styles.placeholder]}
                disabledStyle={styles.disabledStyle}
                disabled={!enable}
            />
            {hasError && <TelveroValidateError textError={textError}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    buttonContainer: {
        backgroundColor: '#fff',
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        flexDirection: 'row',
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#333333',
        marginBottom: 3
    },
    textStlye: {
        fontFamily: 'Lato_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#B0B0B0'
    },
    placeholder: {
        color: '#B0B0B0'
    },
    title: {
        color: '#333333'
    },
    picker: {
        backgroundColor: '#fff',
        height: 150,
    },
    pickerItem: {
        height: 150
    },
    error: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#FF4D49',
        borderRadius: 4  
    },
    disabledStyle: {
        backgroundColor: 'transparent'
    },
    required: {
        color: '#FF4D49'
    }
})