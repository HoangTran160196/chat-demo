import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProcessTag from './ProcessTag.js'
import { getStatusTheme } from '../../common/helper.js'

const IMAGE = {
    RECIPIENTS: require('../../assets/img/user.png'),
    DATE: require('../../assets/img/calendar-gray.png')
}

const BroadCastItem = props => {
    const { status, process, header, content, recipients, sentDate } = props
    const { backgroundColor } = getStatusTheme(status)
    return (
        <View style={styles.container}>
            <View style={[styles.flag, backgroundColor]}></View>
            <View style={styles.contentContainer}>

                <View style={styles.statusHeader}>
                    <ProcessTag status={status}/>
                    <View style={styles.processPercentage}>
                        <Text style={[styles.processPercentageText, styles.fontLato700Bold]}>{process}%</Text>
                    </View>
                </View>

                <Text style={styles.textHeader}>{header}</Text>
                <Text numberOfLines={2} style={styles.textContent}>{content}</Text>
                <View style={styles.separator}></View>

                <View style={styles.bottomContainer}>
                    <View style={styles.bottomContent}>
                        <Image style={styles.tinyIcon} source={IMAGE.RECIPIENTS}/>
                        <Text style={[styles.fontLato700Bold, styles.bottomText]}>Recipients: 
                            <Text style={styles.bottomRightText}> {recipients}</Text>
                        </Text>
                    </View>
                    <View style={styles.smallSeparator}></View>
                    <View style={styles.bottomContent}>
                        <Image style={styles.tinyIcon} source={IMAGE.DATE}/>
                        <Text style={[styles.fontLato700Bold, styles.bottomText]}>Sent date: 
                            <Text style={styles.bottomRightText}> {sentDate}</Text>
                        </Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default BroadCastItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    flag: {
        width: 3,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    contentContainer: {
        flexDirection: 'column',
        padding: 16,
        paddingLeft: 13,
    },
    statusHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    processPercentage: {
        paddingHorizontal: 8, 
        paddingVertical: 4,
        backgroundColor: '#EAEFF3',
        marginLeft: 4,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    processPercentageText: {
        color: '#5E5E5E',
    },
    textHeader: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 22,
        color: '#333333',
        marginTop: 8,
        marginBottom: 4
    },
    textContent: {
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#5E5E5E',
        marginBottom: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
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
    bottomText: {
        color: '#808080'
    },
    bottomRightText: {
        color: '#333333'
    },
    tinyIcon: {
        marginRight: 4
    },
    fontLato700Bold: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        fontWeight:'bold',
    }
})