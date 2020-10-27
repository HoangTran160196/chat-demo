import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Cell = (props) => {
    return (
    <TouchableOpacity 
        style={styles.cellContainer}
        onPress={props.onPress}
    >
        <Image
            style={styles.tinyLogo}
            source={{
                uri: props.uri,
            }}
        />
        
        <View style={styles.cellItem}>
            <View style={styles.firstCellItem}>
                <Text style={styles.firstText}>{props.name}</Text>
                <Text style={styles.secondText}>today</Text>
            </View>
            <View style={styles.secondCellItem}>
                <Text style={styles.secondText}>Hello you</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
)}

export default Cell

const styles = StyleSheet.create({
    cellContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
        // marginTop: 2
    },
    cellItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
    },
    firstCellItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    secondCellItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    badge: {
        backgroundColor: 'rgb(250, 62, 76)',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: 'white',
        fontWeight: '600'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    firstText: {
        marginLeft: 16,
        fontSize: 17,
        marginBottom: 3,
        fontWeight: '700'
    },
    secondText: {
        marginLeft: 16,
        color: 'gray',
        fontSize: 14
    }
});