import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FilterItem from '../component/filterItem.js'
import BroadcastItem from '../component/broadCastItem.js'

export default class ScreenTwo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            filter: ['All Status', 'Sent Date', 'Deliveries Rate'],
            broadCast: [
                {
                    status: 'Schedule',
                    process: 0,
                    header: 'Orion promotion 2020', 
                    content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim. Lorem consequat eiusmod aute dolor',
                    recipients: 10,
                    sentDate: '12.31.2020'
                },
                {
                    status: 'In Process',
                    process: 70,
                    header: 'Orion promotion 2020', 
                    content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
                    recipients: 10,
                    sentDate: '12.31.2020'
                },
                {
                    status: 'Complete',
                    process: 100,
                    header: 'Orion promotion 2020', 
                    content: 'Lorem consequat eiusmod aute dolor occaecat est pariatur anim.',
                    recipients: 10,
                    sentDate: '12.31.2020'
                }
            ]
        }
    }

    handleRenderFilterItem(item) {
        return (
            <FilterItem content={item}/>
        )
    }

    handleRenderBroadcastItem(item) {
        const {status, process, header, content, recipients, sentDate} = item
        return (
            <BroadcastItem 
                process={process}
                header={header}
                content={content}
                recipients={recipients}
                sentDate={sentDate}
                status={status}
            />
        )
    }

    render() {
        const { filter, broadCast } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.filterList}>
                    <FlatList 
                        horizontal={true}
                        data={filter}
                        renderItem={({item}) => this.handleRenderFilterItem(item)}
                    />
                </View>
                <View style={styles.broadCast}>
                    <FlatList 
                        data={broadCast}
                        renderItem={({item}) => this.handleRenderBroadcastItem(item)}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1
    },
    filterList: {
        paddingVertical: 8,
        backgroundColor: 'white',
        paddingLeft: 16,
    },
    broadCast: {
        flex: 1,
        backgroundColor: 'rgb(233, 239, 243)'
    }
})