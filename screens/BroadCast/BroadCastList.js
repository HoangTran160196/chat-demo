import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FilterItem from './FilterItem.js'
import BroadCastItem from './BroadCastItem.js'

export default function BroadCastList() {
    const [filterList, updateFilterList] = useState([
        {key: '1', data: 'All Status'},
        {key: '2', data: 'Sent Date'},
        {key: '3', data: 'Deliveries Rate'}
    ])

    const [broadCastList, updateBroadCastList] = useState([
        {
            id: "1",
            status: 'Schedule',
            process: 0,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim. Lorem consequat eiusmod aute dolor',
            recipients: 10,
            sentDate: '12.31.2020'
        },
        {
            id: "2",
            status: 'In Process',
            process: 70,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        },
        {
            id: "3",
            status: 'Complete',
            process: 100,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        },
        {
            id: "4",
            status: 'In Process',
            process: 70,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        },
        {
            id: "5",
            status: 'Complete',
            process: 100,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        },{
            id: "6",
            status: 'In Process',
            process: 70,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        },
        {
            id: "7",
            status: 'Complete',
            process: 100,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        },{
            id: "8",
            status: 'In Process',
            process: 70,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        },
        {
            id: "9",
            status: 'Complete',
            process: 100,
            header: 'Orion promotion 2020', 
            content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
            recipients: 10,
            sentDate: '12.31.2020'
        }
    ])

    const handleRenderFilterItem = (item) => {
        return (
            <FilterItem content={item.data}/>
        )
    }

    const handleRenderBroadcastItem = (item) => {
        const {id,status, process, header, content, recipients, sentDate} = item
        return (
            <BroadCastItem
                id={id}
                process={process}
                header={header}
                content={content}
                recipients={recipients}
                sentDate={sentDate}
                status={status}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.filterList}>
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={filterList}
                    renderItem={({item}) => handleRenderFilterItem(item)}
                />
            </View>
            <View style={styles.broadCast}>
                <FlatList 
                    data={broadCastList}
                    renderItem={({item}) => handleRenderBroadcastItem(item)}
                    showsVerticalScrollIndicator ={false}
                />
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1
    },
    filterList: {
        paddingVertical: 8,
        backgroundColor: '#fff',
        paddingLeft: 16,
    },
    broadCast: {
        flex: 1,
        backgroundColor: 'rgb(233, 239, 243)',
        paddingHorizontal: 16,
    }
})