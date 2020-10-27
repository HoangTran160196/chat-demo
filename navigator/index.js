import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOne from '../screens/ScreenOne.js'
import ScreenTwo from '../screens/ScreenTwo.js'
import ScreenThree from '../screens/ScreenThree.js'
import ScreenFour from '../screens/ScreenFour.js'
import { GiftedChatExample } from '../screens/GiftedChatExample.js'
import { Button, View, TextInput, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../component/headers/ListChatNavigation/SearchHeader.js'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const firstScreensStack = {
    ScreenOne
}

const secondScreensStack = {
    ScreenThree,
    ScreenFour
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
                    backgroundColor: "#f4511e"
                }
            }}
        >
            {Object.entries({
                ...firstScreensStack
            }).map(([name, component]) => (
                <Stack.Screen 
                    name={name}
                    component={component} 
                    options={({ route, navigation }) => {
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
                    }}  
                />
            ))}
        </Stack.Navigator>
    )
}

function RootNavTwo() {
    return (
        <Stack.Navigator

        >
            {Object.entries({
                ...secondScreensStack
            }).map(([name, component]) => (
                <Stack.Screen name={name} component={component} />
            ))}
        </Stack.Navigator>
    )
}

function configureScreenOption(route) {
    return {
        tabBarIcon: ({focused, size, color}) => {
            let iconName;
            switch (route.name) {
                case 'RootNavOne':
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                    break;
                case 'RootNavTwo':
                    iconName = focused ? 'ios-list-box' : 'ios-list'
                    break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        }
    }
}   

function RootTab() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => configureScreenOption(route)
            }
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="RootNavOne" component={RootNavOne} options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name="RootNavTwo" component={RootNavTwo} />
        </Tab.Navigator>
    )
}

export default class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'rgb(0, 62, 94)'
                        }
                    }}
                >
                    <Stack.Screen 
                        name="Chats"
                        component={RootTab}
                        options={{
                            headerTitle: props => {
                                return (
                                    <SearchHeader />
                                )
                            },
                            headerStyle: {
                                height: 116,
                                backgroundColor: 'rgb(0, 62, 94)'
                            }
                        }}
                    />
                    <Stack.Screen 
                        name="GiftedChatExample"
                        component={GiftedChatExample} 
                        options={({ navigation, route }) => ({
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
                        })}
                    />
                    <Stack.Screen name="ScreenFour" component={ScreenFour} />
                </Stack.Navigator>  
            </NavigationContainer>
        )
    }
}
