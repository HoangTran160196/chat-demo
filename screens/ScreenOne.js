import React from 'react';
import { FlatList, StyleSheet, SectionList, Text, View, TouchableOpacity } from 'react-native';
import Cell from '../component/cellListChat/cell.js/'
import { getUsersFromApi } from '../services/api.js'
import ListChatHeader from '../component/headers/ListChatHeader.js'
import ListChatButtonHeader from '../component/headers/ListChatButtonHeader.js'
import { SwipeListView } from 'react-native-swipe-list-view';
import ListChatSwipeListView from '../component/cellListChat/listChatSwipeListView.js'
export default class ScreenOne extends React.Component {
    static navigationOptions = {
        title: "Screen One",
        headerTintColor: 'teal'
    }
    constructor(props) {
        super()
        this.state = {
            data: [],
        }
        
    }

    componentDidMount() {
        this.getUsers()
    }

    async getUsers() {
        const users = await getUsersFromApi()
        if (users) {
            this.setState({ data: [ 
                {title: "header", data: []},
                {title: 'All Chats', data: users} 
            ]})
        }
    }
    
    handleOnPress(name) {
        this.props.navigation.push("GiftedChatExample")
    }

    handleRenderItem(item) {
        return (
            <Cell 
                style={styles.item}
                num={item.phone}
                name={item.name.first}
                uri={item.picture.large}
                onPress={() => this.handleOnPress(item.name.first)}
            />
        )
    }

    handleRenderHeader({ section: { title } }) {
        return (
            title === 'header' ? <ListChatButtonHeader /> : <ListChatHeader title={title}/>
        )
    }

    renderHiddenItem(data, rowMap) {
        console.log(`hidden item ${rowMap}`)
        return (
            <ListChatSwipeListView 
                onClose={this.onCloseRow}
            />
        )
    }
    
    renderSeparatorComponent() {
        if (Platform.OS !== 'android') {
            return (({ highlighted }) => (
                <View
                    style={[
                        styles.separator,
                        highlighted && { marginLeft: 0 }
                    ]}
                />
                )
            )
        }
    }

    onCloseRow() {
        // console.log(rowMap, data)
    }

    render() {
        // console.log(this.state.data)
        return (
            <SwipeListView
                ItemSeparatorComponent={this.renderSeparatorComponent()}
                useSectionList
                style={styles.sectionList}
                sections={this.state.data}
                keyExtractor={(item, index) => {
                    return item.index }}
                stickySectionHeadersEnabled={false}  
                renderItem={({item}) => this.handleRenderItem(item)}
                renderHiddenItem={this.renderHiddenItem}
                renderSectionHeader={({ section: { title } }) => this.handleRenderHeader({ section: { title } })}
                disableRightSwipe={true}
                rightOpenValue={-164}
            />
        )
    }
}

const styles = StyleSheet.create({
    sectionList: {
        backgroundColor: 'rgb(233, 239, 243)',
        flex: 1,
    },
    item: {
       fontSize: 18
    },
    separator: {
        backgroundColor: 'rgb(233, 239, 243)',
        height: 2
    }
});