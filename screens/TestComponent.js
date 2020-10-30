import React from "react";
import { View, FlatList, Text, TextInput, Keyboard, StyleSheet } from "react-native";
import AppTextInput from '../component/AppTextInput.js'
import { ListItem, Avatar, Input } from 'react-native-elements'
import AppPickerButton from '../component/AppPickerButton.js'
export default class TestComponent extends React.Component {
  state = {
    list: [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]
  }

  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column', padding: 0, backgroundColor: 'yellow'}}>
           <Input
            placeholder="Comment"
            rightIcon={
              <View style={{widht: 24, height: 24, backgroundColor: 'blue'}}></View>
            }
            inputContainerStyle={styles.input}
            // onChangeText={value => this.setState({ comment: value })}
          />
          <AppPickerButton />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 8,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
  }
})