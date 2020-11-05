import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { ListItem } from '../component/listItem.js';
import { Icon } from 'react-native-elements';

let { width, height } = Dimensions.get('window');

const data = [
    {
        id: "1",
        name: "June Cha",
        email: "june.cha@gmail.com",
        position: "Sales Manager",
        photo: require('../assets/img/settings/avatar.png')
    }
]

const dataSettings = [
    {
        id: 1,
        name: "Account and Security",
        iconName: require('../assets/img/settings/accountandsecurity.png')
    },
    {
        id: 2,
        name: "Opt in",
        iconName: require('../assets/img/settings/optin.png')
    },
    {
        id: 3,
        name: "Auto-Responder",
        iconName: require('../assets/img/settings/autoresponder.png')
    },
    {
        id: 4,
        name: "Alerts and Notifications",
        iconName: require('../assets/img/settings/alertsandnotifications.png')
    },
    {
        id: 5,
        name: "Frequently Asked Questions",
        iconName: require('../assets/img/settings/frequentlyaskedquestions.png')
    },
    {
        id: 6,
        name: "About This App",
        iconName: require('../assets/img/settings/aboutthisapp.png')
    },
    {
        id: 7,
        name: "Switch Phone Number",
        iconName: require('../assets/img/settings/switchphonenumber.png')
    },
    {
        id: 8,
        name: "Log Out",
        iconName: require('../assets/img/settings/logout.png')
    }
]

const onPressHandler = function (navigation, id) {
    console.log('11onPressHandler', id);
    switch (id) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            navigation.push("SwitchPhoneNumber");
            break;
        case 8:
            break;
    }
}

const Setting = (props) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    const { photo } = item;
                    return (<ListItem
                        item={item}
                        containerStyle={
                            {
                                height: 80,
                                paddingTop: 16,
                                paddingRight: 17,
                                paddingBottom: 16,
                                paddingLeft: 17,
                                marginBottom: 8,
                                backgroundColor: '#fff',
                                borderBottomWidth: 1,
                                borderColor: '#F2F2F2'
                            }
                        }
                        mainLogo={{
                            mainLogoComponent: <Image source={item.photo} />,
                            mainLogoMarginRight: 12
                        }}
                        onPressHandler={() => onPressHandler(props.navigation, item.id)}
                        type={'navigation'}>
                        <Text style={{ fontWeight: "bold", flex: 1, fontSize: 18, color: '#333333', textAlignVertical: 'center', }}>{item.name}</Text>
                        <Text style={{ flex: 1, color: '#808080' }}>{item.position}</Text>
                    </ListItem>)
                }}
                keyExtractor={(item) => item.id}
            />

            <FlatList
                data={dataSettings}
                renderItem={({ item, index }) =>
                    <ListItem
                        item={item}
                        containerStyle={
                            {
                                height: 56,
                                paddingTop: 16,
                                paddingRight: 17,
                                paddingBottom: 16,
                                paddingLeft: 17,
                                marginBottom: index === 5 ? 8 : 0,
                                backgroundColor: '#fff',
                                borderBottomWidth: 1,
                                borderColor: '#F2F2F2'
                            }
                        }
                        mainLogo={{
                            mainLogoComponent: <Image source={item.iconName} style={{ height: '100%', width: '100%' }} />,
                            mainLogoMarginRight: 12
                        }}
                        onPressHandler={() => onPressHandler(props.navigation, item.id)}
                        type={'navigation'}>
                        <Text style={{ flex: 1, fontSize: 16 }}>{item.name}</Text>
                    </ListItem>}
                keyExtractor={(item) => item.id}
            />
        </View >
    );
}

export default Setting;