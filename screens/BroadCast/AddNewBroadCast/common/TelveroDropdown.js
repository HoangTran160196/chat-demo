import React from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri'

const IMAGE = {
    CHECK: require('../../../../assets/img/checkIcon.svg')
}

function TelveroDropdownItem(props) {
    const { title, selected } = props
    return (
        <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropDownItemText}>{title}</Text>
            <SvgUri source={!selected ? IMAGE.CHECK : ''} />
        </TouchableOpacity>
    )
}
export default function TelveroDropdown(props) {
    const { list, show } = props
    return (
        show && (
            <ScrollView style={styles.container}>
                {list.map(item => <TelveroDropdownItem title={item.title} selected={item.selected}/>)}
            </ScrollView>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        borderWidth: 1,
        borderRadius: 4,
        borderTopWidth: 0,
        borderColor: '#E0E0E0',
        paddingHorizontal: 16,
        marginTop: -1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    dropdownItem: {
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    dropDownItemText: {
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#5E5E5E',
    }
})