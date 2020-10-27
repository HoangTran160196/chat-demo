import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { getStyleFromTheme } from '../../common/helper.js'

const ReceiverBubleChat = props => {
    const { theme, showImage } = props
    const { backgroundColor, justifyContent, marginRight, marginLeft } = getStyleFromTheme(theme)

    return (
        <View style={[styles.container, justifyContent, theme == 'SENDER' ? marginRight: marginLeft ]}>
            {/* {showImage && (
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: props.uri,
                    }}
                />
            )} */}
            <View style={[styles.textContainer, backgroundColor]}>
                <Text style={styles.text}>{props.content}</Text>
            </View>
        </View>
    )
}
export default ReceiverBubleChat

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textContainer: {
        minHeight: 30,
        maxWidth: 290,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 15,
        color: 'black'
    },
    tinyLogo: {
        width: 30,
        height: 30, 
        borderRadius: 15,
    }
})