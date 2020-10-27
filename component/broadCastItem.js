import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProcessTag from '../component/processTag.js'
import { getStatusTheme } from '../common/helper.js'


const BroadcastItem = props => {
    const { status, process, header, content, recipients, sentDate } = props
    const { backgroundColorTheme } = getStatusTheme(status)
    return (
        <View style={styles.container}>
            <View style={[styles.flag, backgroundColorTheme]}></View>
            <View style={styles.contentContainer}>

                <View style={styles.statusHeader}>
                    <ProcessTag status={status}/>
                    <View style={styles.processPercentage}>
                        <Text>{process}%</Text>
                    </View>
                </View>

                <Text style={styles.textHeader}>{header}</Text>
                <Text numberOfLines={2} style={styles.textContent}>{content}</Text>
                <View style={styles.separator}></View>

                <View style={styles.bottomContainer}>
                    <View style={styles.bottomContent}>
                        <Ionicons style={styles.tinyIcon} name='ios-information-circle-outline' size={24} color='grey' />
                        <Text>Recipients: {recipients}</Text>
                    </View>
                    <View style={styles.smallSeparator}></View>
                    <View style={styles.bottomContent}>
                        <Ionicons style={styles.tinyIcon} name='ios-information-circle-outline' size={24} color='grey' />
                        <Text>Sent date: {sentDate}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default BroadcastItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
    },
    flag: {
        width: 3,
        backgroundColor: 'red',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    contentContainer: {
        flexDirection: 'column',
        padding: 16
    },
    statusHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    processPercentage: {
        padding: 8,
        backgroundColor: 'rgb(233, 239, 243)',
        marginLeft: 8,
        borderRadius: 5
    },
    textHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 8
    },
    textContent: {
        fontSize: 14,
        color: 'rgb(134, 134, 134)',
    },
    separator: {
        height: 1,
        backgroundColor: 'rgb(237, 237, 237)',
        marginTop: 16,
        marginBottom: 8
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallSeparator: {
        height: 16,
        width: 1,
        backgroundColor: 'grey',
        marginHorizontal: 16,
    },
    bottomContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tinyIcon: {
        marginRight: 4
    }
})