import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatNote = props => {
    const { name, time, content } = props 
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.separator}></View>
                <View style={styles.noteContainer}>
                    <View style={styles.noteHeader}>
                        <Ionicons style={styles.noteHeaderIcon} name='ios-list' size={20} color='rgb(114, 98, 65)' />
                        <Text style={styles.noteHeaderItem}>{ name }</Text>
                        <View style={styles.smallSeparator}></View>
                        <Text style={styles.noteHeaderItem}>{ time }</Text>
                    </View>
                    <Text style={styles.noteMessage}>{ content }</Text>
                </View>
            </View>
        </View>
    )
}

export default ChatNote

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 16,
        marginRight: 16
    },
    content: {
        width: 300,
        backgroundColor: 'rgb(255, 236, 180)',
        borderRadius: 5,
        flexDirection: 'row',
    },
    separator: {
        width : 5,
        backgroundColor: 'rgb(255, 224, 135)',
        marginRight: 16,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    noteContainer: {
        paddingVertical: 16,
        paddingRight: 32,
        flexDirection: 'column',
    },
    noteHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    noteHeaderIcon: {
        marginRight: 8
    },
    noteHeaderItem: {
        color: 'rgb(117, 101, 68)',
        fontWeight: 'bold'
    },  
    smallSeparator: {
        width: 1,
        height: 12,
        backgroundColor: 'rgb(248, 218, 151)',
        marginHorizontal: 5
    },
    noteMessage: {
        color: 'rgb(124, 114, 87)'
    }
})