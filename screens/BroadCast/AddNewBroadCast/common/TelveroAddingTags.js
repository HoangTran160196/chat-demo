import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';

const IMAGE = {
    ADDING: require('../../../../assets/img/addingTags.svg')
}

function TelveroTags(props) {
    const { tag } = props
    return (
        <View style={styles.tagIconContainer}>
            <Text style={styles.tagContent}>{tag}</Text>
        </View>
    )
}

export default function TelveroAddingTags(props) {
    const { label, containerStyle } = props
    const [listTags, addingTag] = useState([
        {id: 1, data: 'TMA'},
        {id: 2, data: 'Telvero'},
        {id: 3, data: 'hoang'},
        {id: 4, data: 'Vip Customer'},
        {id: 5, data: 'Third party'},
        {id: 6, data: 'hoang'},
        {id: 7, data: 'hoang'},
    ])

    return (
        <View style={containerStyle}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.tagMainContainer}>
                { listTags.map(tag => <TelveroTags tag={tag.data}/>)}
                <TouchableOpacity
                    onPress={() => addingTag([...listTags, {id: id++, data: 'Hoang'}])}
                >
                    <SvgUri source={IMAGE.ADDING} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#333333',
        marginBottom: 3
    },
    tagMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    // tag icon
    tagIconContainer: {
        height: 30,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#E0E0E0',
        marginRight: 8,
        marginTop: 8
    },
    tagContent: {
        fontFamily: 'Lato_400Regular',
        fontSize: 14,
        lineHeight: 20,
        color: '#5E5E5E'
    }
})