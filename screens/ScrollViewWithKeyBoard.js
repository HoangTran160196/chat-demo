import React from "react";
import { View, FlatList, Text, TextInput, Keyboard, StyleSheet } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppTextInput from '../component/AppTextInput.js'
import { ListItem, Avatar, Input } from 'react-native-elements'

export default class ScrollViewWithKeyBoard extends React.Component {
  state = {
    chat: [
      { id: 1, text: "Test1 1" },
      { id: 2, text: "Test1 2" },
      { id: 3, text: "Test1 3" },
      { id: 4, text: "Test1 4" },
      { id: 5, text: "Test1 5" },
      { id: 6, text: "Test1 6" },
      { id: 7, text: "Test1 7" },
      { id: 8, text: "Test1 8" },
      { id: 9, text: "Test1 9" },
      { id: 10, text: "Test1 10" },
      { id: 11, text: "Test1 11" },
      { id: 12, text: "Test1 12" },
      { id: 13, text: "Test1 13" },
      { id: 14, text: "Test1 14" },
      { id: 15, text: "Test1 15" },
      { id: 16, text: "Test1 16" },
      { id: 17, text: "Test1 17" },
      { id: 18, text: "Test1 18" },
      { id: 19, text: "Test1 19" },
      { id: 20, text: "Test1 20" },
      { id: 21, text: "Test1 21" },
      { id: 22, text: "Test1 22" },
      { id: 23, text: "Test1 23" },
      { id: 24, text: "Test1 24" }
    ],
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
  };

//   scrollOffset = 0;
//   keyboardHeight = 0;

//   componentDidMount() {
//     this.keyboardWillShowListener = Keyboard.addListener(
//       "keyboardWillShow",
//       this._keyboardWillShow
//     );
//     this.keyboardWillHideListener = Keyboard.addListener(
//       "keyboardWillHide",
//       this._keyboardWillHide
//     );
//   }

//   componentWillUnmount() {
//     this.keyboardWillShowListener.remove();
//     this.keyboardWillHideListener.remove();
//   }

//   _keyboardWillShow = e => {
//     this.keyboardHeight = e.endCoordinates
//       ? e.endCoordinates.height
//       : e.end.height;

//     const newOffset = this.scrollOffset + this.keyboardHeight;
//     this.chatList.scrollToOffset({ offset: newOffset, animated: true });
//   };

//   _keyboardWillHide = e => {
//     const newOffset = this.scrollOffset - this.keyboardHeight;
//     this.chatList.scrollToOffset({ offset: newOffset, animated: true });
//   };

//   handleScroll = e => {
//     this.scrollOffset = e.nativeEvent.contentOffset.y;
//   };

  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column', padding: 0, backgroundColor: 'yellow'}}>
            {/* <KeyboardAwareScrollView styles={{flex: 1}}>
                <FlatList
                style={{ flex: 1 }}
                ref={ref => {
                    this.chatList = ref;
                }}
                data={this.state.chat}
                renderItem={({ item }) => (
                    <Text style={{ padding: 20 }}>{item.text}</Text>
                )}
                onScroll={this.handleScroll}
                />
                
                
                <KeyboardSpacer />
            </KeyboardAwareScrollView>
            <TextInput
            placeholder="Enter Message"
            style={{ padding: 20, borderTopWidth: 2, borderColor: "red" , widht: 300, height:44}}
            autoCompleteType='off'
            autoCorrect={false}
            /> */}
          {/* <AppTextInput 
            placeholder='Enter phone numbers'
            style={{marginTop: 50}}
            icon={true}
          />
          <AppTextInput 
            placeholder='Enter phone numbers'
            style={{marginTop: 50}}
            // icon={true}
          /> */}
          {/* {
            this.state.list.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          } */}
           <Input
            placeholder="Comment"
            rightIcon={
              <View style={{widht: 24, height: 24, backgroundColor: 'blue'}}></View>
            }
            inputContainerStyle={styles.input}
            // onChangeText={value => this.setState({ comment: value })}
          />
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