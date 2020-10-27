import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
class SearchHeader extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: ''
        }
    }

    render() {
        const {value} = this.state

        return (
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Chats</Text>
                <View style={styles.searchBarContainer}>
                    <Ionicons style={styles.iconSearch} name='ios-search' size={24} color='rgb(134, 134, 134)' />
                    <TextInput 
                        style={styles.searchBar}
                        placeholder='Search'
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        display:'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginBottom: 10
    },    
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    searchBar: {
        height: 38,
        borderColor: 'gray',
        width: 308,
        padding: 10,
        fontWeight: '700',
        fontSize: 15
    },
    iconSearch: {
        marginLeft: 16
    }
})

export default SearchHeader
