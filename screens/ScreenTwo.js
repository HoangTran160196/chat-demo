import React from 'react';
import { View, Button, Text, StyleSheet, SectionList, Alert } from 'react-native';
import BubleChat from '../component/bubleChat/bubleChat.js'
import ListChatHeader from '../component/headers/ListChatHeader.js'
import ChatNote from '../component/chatNote.js';
import InputMessageArea from '../component/inputMessageArea.js'

export default class ScreenTwo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [
                {title: '4:00 PM , Monday, 11.24.2020', data: [
                    {id: 1, type: 'receiver', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis blandit hendrerit. Suspendisse consectetur ac arcu imperdiet iaculis. Fusce sit amet dolor condimentum, placerat diam vitae, consequat eros.'},
                    // {id: 2, type: 'receiver', content: 'Dolore consectetur magna tempor proident proident mollit excepteur nostrud mollit aliqua anim deserunt. Nulla ad mollit sunt est velit commodo Lorem voluptate. Qui laborum esse exercitation aute.'},
                    
                    // {id: 5, type: 'sender', content: 'Quis velit enim proident culpa anim aliquip.'},
                    // {id: 6, type: 'sender', content: 'Eu id eu qui elit duis in eu officia sunt.'},
                    
                ]},
                {title: '2:00 AM , Today', data: [
                    {id: 3, type: 'sender', content: 'a'},
                    {id: 4, type: 'receiver', content: 'Occaecat labore culpa magna mollit amet irure enim pariatur anim.'},
                    // {id: 7, type: 'receiver', content: 'Officia laboris irure veniam occaecat veniam.'},
                    // {id: 8, type: 'receiver', content: 'Officia laboris irure veniam occaecat veniam.'},
                    // {id: 9, type: 'sender', content: 'Officia laboris irure veniam occaecat veniam.'},
                    // {id: 10, type: 'note', content: 'Officia laboris irure veniam occaecat veniam.'},
                ]}
            ],
        }
    }

    handleRenderItem(item) {
        let component;
        switch (item.type) {
            case 'receiver':
                component = (
                    <BubleChat
                        uri='https://randomuser.me/api/portraits/men/99.jpg'
                        content={item.content}
                        theme={item.type.toUpperCase()}
                        showImage={true}
                    />
                )
                break
            case 'sender':
                component = (
                    <BubleChat
                        uri='https://randomuser.me/api/portraits/men/99.jpg'
                        content={item.content}
                        theme={item.type.toUpperCase()}
                        showImage={false}
                    />
                )
                break
            case 'note': 
                component = (
                    <ChatNote />
                )
        }
        return component
    }

    handleRenderHeader({ section: { title } }) {
        return (
            <ListChatHeader title={title}/>
        )
    }

    handleSendMessage() {
        const message = {
            id: 11,
            type: 'sender',
            content: 'What??'
        }
        const length = this.state.data.length
        const { data } = this.state
        data[length-1].data.push(message)
        this.setState({data})
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.data}
                    keyExtractor={(item) => {
                        return item.id }}
                    renderItem={({item}) => this.handleRenderItem(item)}
                    renderHiddenItem={this.renderHiddenItem}
                    renderSectionHeader={({ section: { title } }) => this.handleRenderHeader({ section: { title } })}
                    
                />

                <InputMessageArea sendMessage={() => this.handleSendMessage()}/>
                {/* <View style={styles.inputContainer}></View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        height: 50,
        backgroundColor: 'yellow'
    }
})