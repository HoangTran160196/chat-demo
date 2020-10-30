import React from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions } from 'react-native';

let {width} = Dimensions.get('window');

import Ionicons from 'react-native-vector-icons/Ionicons';
class SearchHeader extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: ''
        }
    }

    handleOnChangeText(value) {
        this.setState({value})
    }

    render() {
        const {value} = this.state
        const {name} = this.props
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.searchBarContainer}>
                    <Ionicons style={styles.iconSearch} name='ios-search' size={24} color='rgb(134, 134, 134)' />
                    <TextInput 
                        style={styles.searchBar}
                        placeholder='Search'
                        onChangeText={text => this.handleOnChangeText(text)}
                        value={value}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        width: width - 32,
        backgroundColor: 'rgb(0, 62, 94)',
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'center'
    },    
    searchBarContainer: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    searchBar: {
        height: 38,
        borderColor: 'gray',
        padding: 10,
        fontWeight: '700',
        fontSize: 15,
    },
    iconSearch: {
        marginLeft: 16
    }
})

export default SearchHeader
