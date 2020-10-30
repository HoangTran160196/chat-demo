import React from 'react';
import { FlatList, StyleSheet, SectionList, Text, View, TouchableOpacity } from 'react-native';
import Cell from '../component/cellListChat/cell.js/'
import { getUsersFromApi } from '../services/api.js'
import ListChatHeader from '../component/headers/ListChatHeader.js'
import ListChatButtonHeader from '../component/headers/ListChatButtonHeader.js'
import { SwipeListView } from 'react-native-swipe-list-view';
import ListChatSwipeListView from '../component/cellListChat/listChatSwipeListView.js'
import { Modal, TouchableHighlight, Dimensions } from 'react-native'


let {width, height} = Dimensions.get('window');

export default class ScreenOne extends React.Component {
    static navigationOptions = {
        title: "Screen One",
        headerTintColor: 'teal'
    }
    constructor(props) {
        super()
        this.state = {
            data: [],
            modalVisible: false
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

    handleArchiveAction() {
        console.log(width, height)
        this.setState({modalVisible: !this.state.modalVisible})
    }

    handleDeleteAction(rowMap, rowKey) {
        let {data} = this.state
        data[1].data = data[1].data.filter((user) => user.name.first !== rowKey)
        this.setState({ data })
    }

    renderHiddenItem(data, rowMap) {
        return (
            <ListChatSwipeListView 
                archiveAction={() => this.handleArchiveAction()}
                deleteAction={() => this.handleDeleteAction(rowMap, data.item.name.first)}
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

    render() {
        return (
            <View style={styles.sectionList}>

            
                <SwipeListView
                    ItemSeparatorComponent={this.renderSeparatorComponent()}
                    useSectionList
                    style={styles.sectionList}
                    sections={this.state.data}
                    renderItem={({item}) => this.handleRenderItem(item)}
                    renderHiddenItem={(data, rowMap) => this.renderHiddenItem(data, rowMap)}
                    renderSectionHeader={({ section: { title } }) => this.handleRenderHeader({ section: { title } })}
                    keyExtractor={(item) => {
                        return item.name.first }}
                    stickySectionHeadersEnabled={false}  
                    disableRightSwipe={true}
                    rightOpenValue={-164}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => this.setState({modalVisible: !this.state.modalVisible})}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>

            </View>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    modalView: {
        // margin: 20,
        backgroundColor: "black",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: height - 44,
        width,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});