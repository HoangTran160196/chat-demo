import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOne from '../screens/ScreenOne.js'
import ScreenTwo from '../screens/ScreenTwo.js'
import ScreenThree from '../screens/ScreenThree.js'
import ScreenFour from '../screens/ScreenFour.js'
import ScrollViewWithKeyBoard from '../screens/ScrollViewWithKeyBoard.js'
import { GiftedChatExample } from '../screens/GiftedChatExample.js'
import { Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../component/headers/ListChatNavigation/SearchHeader.js'
import TestComponent from '../screens/TestComponent.js'
import Login from '../screens/Login/Login.js'
import BroadCastList from '../screens/BroadCast/BroadCastList.js'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const SCREEN = {
    CHATS: 'CHATS',
    BROADCAST: 'BROADCAST'
}

function configureRootTabOptions(navigation, route) {
    return {
        headerShown: true
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
            switch (route.name.toUpperCase()) {
                case SCREEN.CHATS:
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                    break;
                case SCREEN.BROADCAST:
                    iconName = focused ? 'ios-list-box' : 'ios-list'
                    break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        }
    }
}   

function configureRootNavOneOptions(navigation, route) {
    return {
        headerRight: () => route.name.toUpperCase() === SCREEN.CHATS && (
            <TouchableOpacity 
                style={{marginTop: -48, marginRight: 16}}
                color="#fff"
                title="Add"
                onPress={() => navigation.navigate("ScreenThree")}
            >
                <Text style={{fontWeight:'600', fontSize: 18, color: 'white'}}>Add</Text>
            </TouchableOpacity>
        ), 
        headerTitle: props => {
            console.log(props)
            return (
                <SearchHeader name={route.name}/>
            )
        },
        headerStyle: {
            height: 116,
            backgroundColor: 'rgb(0, 62, 94)',
        },
        title: route.params && route.params.name,
    }
}

function RootNavOne() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Chats'
                component={ScreenOne} 
                options={({ route, navigation }) => configureRootNavOneOptions(navigation, route)}  
            />
        </Stack.Navigator>
    )
}

function RootNavTwo() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='BroadCast' 
                component={ScreenThree} 
                options={({ route, navigation }) => configureRootNavOneOptions(navigation, route)}      
            />
        </Stack.Navigator>
    )
}

function RenderRootTab() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => configureRootTabScreenOption(route) }
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Chats" component={RootNavOne} options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name="Broadcast" component={BroadCastList} />
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
                        component={Login} 
                        options={{
                            headerShown: false
                        }}
                        // options={({ navigation, route }) => configureGiftedChatExampleOptions(navigation)}
                    />
                    <Stack.Screen name="ScreenFour" component={ScreenFour} />
                </Stack.Navigator>  
            </NavigationContainer>
        )
    }
}
