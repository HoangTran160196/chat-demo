import React from 'react';
import { View, Button, Text } from 'react-native';
export default class ScreenTwo extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 25,
                    borderColor: 'blue'
                }}
            >
                <Text>haha</Text>
                <Button title="Go to screen three" onPress={() => this.props.navigation.navigate('ScreenThree')} />
            </View>
        )
    }
}