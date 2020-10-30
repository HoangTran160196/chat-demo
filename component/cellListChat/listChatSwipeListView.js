import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListChatSwipeListView = (props) => {
    return (
        <View style={styles.rowBack}>
            <TouchableOpacity
                onPress={props.archiveAction}
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
            >
                <Ionicons style={styles.rightButtonsIcon} name='ios-information-circle' size={22} color='white' />
                <Text style={styles.backTextWhite}>Archive</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={props.deleteAction}
            >
                <Ionicons style={styles.rightButtonsIcon} name='ios-information-circle' size={22} color='white' />
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListChatSwipeListView

const styles = StyleSheet.create({
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 80,
        borderRadius: 5,
        marginRight: 2
    },
    backRightBtnLeft: {
        backgroundColor: 'rgb(128, 128, 128)',
        right: 80,
        marginRight: 4
    },
    backRightBtnRight: {
        backgroundColor: 'rgb(255,63,78)',
        right: 0,
    },
    backTextWhite: {
        color: 'white'
    },
    rightButtonsIcon: {
        marginBottom: 4
    }
}) 