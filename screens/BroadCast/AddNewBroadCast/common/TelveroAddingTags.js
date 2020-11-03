import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';

const IMAGE = {
    ADDING: require('../../../../assets/img/addingTags.svg')
}

function TelveroTags(props) {
    const { tag } = props
    return (
            <Text style={{color: 'red'}}>{tag}</Text>
        
    )
}

export default function TelveroAddingTags(props) {
    const { label, containerStyle } = props
    const [listTags, addingTag] = useState([])
    const handleRenderFilterItem = (item) => ( <TelveroTags tag={item.data}/> )
    let id = 0
    return (
        <View style={containerStyle}>
            <Text style={styles.label}>{label}</Text>
            <View>
                <FlatList 
                    numColumns = {0}
                    // columnWrapperStyle={{paddingVertical: 4}}
                    showsHorizontalScrollIndicator={false}
                    data={listTags}
                    renderItem={({item}) => handleRenderFilterItem(item)}
                />
                <TouchableOpacity
                    onPress={() => addingTag([...listTags, {id: id++, data: 'Hoang'}])}
                >
                    <SvgUri style={styles.tinyIcon} source={IMAGE.ADDING} />
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
    tinyIcon: {
        marginTop: 5
    }
})