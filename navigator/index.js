import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOne from '../screens/ScreenOne.js'
import ScreenTwo from '../screens/ScreenTwo.js'
import ScreenThree from '../screens/ScreenThree.js'
import ScreenFour from '../screens/ScreenFour.js'
import Setting from '../screens/Setting.js'
import { GiftedChatExample } from '../screens/GiftedChatExample.js'
import SwitchPhoneNumber from '../screens/SwitchPhoneNumber.js'
import { Button, View, TextInput, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../component/headers/ListChatNavigation/SearchHeader.js'
// import Basic from '../screens/SwipeList.js'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();



function configureRootTabOptions(navigation, route) {
    console.log('configureRootTabOptions - navigation', navigation)
    console.log('configureRootTabOptions - route', route.name)
    return {
        headerTitle: props => {
            console.log('configureRootTabOptions - props', props)
            return (
                null//<SearchHeader />
            )
        },
        headerStyle: {
            height: 116,
            backgroundColor: 'rgb(0, 62, 94)'
        }
    }
}

function configureGiftedChatExampleOptions(navigation) {
    return {
        headerTitle: 'Chat',
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
        },
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons style={{marginLeft: 16}} name='ios-list-box' size={24} color='white' />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons style={{marginRight: 16}} name='ios-information-circle-outline' size={24} color='white' />
            </TouchableOpacity>
        )
    }
}

function configureSettingsOptions(navigation) {
    return {
        headerTitle: 'Settings',
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
        }
    }
}

function configureSwitchPhoneNumberOptions(navigation) {
    return {
        headerTitle: 'Switch Phone Number',
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
        }
    }
}

function configureScreenOptions() {
    return {
        headerStyle: {
            backgroundColor: 'rgb(0, 62, 94)'
        }
    }
}

function configureRootTabScreenOption(route) {
    return {
        tabBarIcon: ({focused, size, color}) => {
            let iconName;
            switch (route.name) {
                case 'Chats':
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                    break;
                case 'Broadcast':
                    iconName = focused ? 'ios-list-box' : 'ios-list'
                    break;
                case 'Setting':
                    iconName = focused ? 'ios-settings' : 'md-settings'
                    break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        }
    }
}   

function configureRootNavOneOptions(navigation, route) {
    return {
        headerRight: () => name === 'ScreenOne' && (
            <View style={{paddingRight: 8}}>
                <Button 
                    color="#fff"
                    title="Add"
                    onPress={() => navigation.navigate("ScreenThree")}
                />
            </View>
        ), 
        title: route.params && route.params.name
    }
}

function RootNavOne() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                headerStyle: {
                    // backgroundColor: "#f4511e"
                    backgroundColor: 'red'
                }
            }}
        >
            
            <Stack.Screen 
                name='ScreenOne'
                component={ScreenOne} 
                options={({ route, navigation }) => configureRootNavOneOptions(navigation, route)}  
            />
         
        </Stack.Navigator>
    )
}

function RootNavTwo() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='BroadCast' component={ScreenThree} />
        </Stack.Navigator>
    )
}

function RootNavSetting() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Setting' component={Setting} />
        </Stack.Navigator>
    )
}

function RenderRootTab() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => configureRootTabScreenOption(route)
            }
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Chats" component={RootNavOne} options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name="Broadcast" component={RootNavTwo} />
            <Tab.Screen name="Setting" component={RootNavSetting} options={({navigation, route}) => configureSettingsOptions(navigation, route)}/>
        </Tab.Navigator>
    )
}

export default class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={configureScreenOptions()}
                >
                    <Stack.Screen 
                        name="Chats"
                        component={RenderRootTab}
                        options={({navigation, route}) => configureRootTabOptions(navigation, route)}
                    />
                    <Stack.Screen 
                        name="GiftedChatExample"
                        component={GiftedChatExample} 
                        options={({ navigation, route }) => configureGiftedChatExampleOptions(navigation)}
                    />
                    <Stack.Screen 
                        name="SwitchPhoneNumber"
                        component={SwitchPhoneNumber} 
                        options={({ navigation, route }) => configureSwitchPhoneNumberOptions(navigation)}
                    />
                </Stack.Navigator>  
            </NavigationContainer>
        )
    }
}
