import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './navigator/index.js'

import {  StyleSheet,
          Text,
          View,
          Image,
          ScrollView,
          TextInput,
          KeyboardAvoidingView,
          TouchableWithoutFeedback,
          Keyboard,
          Button,
          FlatList,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      text: ""
    }
  }

  handleChangeText(text) {
    this.setState({text})
  }

  handleButtonOnPress() {

  }

  render() {
    //return (

      // <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? "padding" : "height"}>
      //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      //     <ScrollView>
      //       <TextInput 
      //         placeholder="Type your name"
      //         style={styles.input}
      //         onChangeText={() => this.handleChangeText()}
      //         value={this.state.text}
      //       />
      //       <TextInput 
      //         placeholder="Type your name"
      //         style={{...styles.input, marginTop: 16}}
      //         onChangeText={() => this.handleChangeText()}
      //         value={this.state.text}
      //       />
      //       <View style={styles.buttonContainer}>
      //         <Button
      //           style={styles.button}
      //           title="Press me"
      //           onPress={() => this.handleButtonOnPress()}
      //           color={Platform.OS == 'ios' ? '#ff9642': ''}
      //         />
      //       </View>
      //       <AppButton 
      //         style={{marginTop: 16}}
      //         caption='Custom button'
      //         theme='Wonderful'
      //       />
      //       </ScrollView>
      //   </TouchableWithoutFeedback>
      // </KeyboardAvoidingView>
    //   <View style={styles.container}>
    // </View>

    //);
    return <Navigator />
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 16
  },
  input: {
    marginTop: 44,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 12,
    height: 44,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  },
  buttonContainer: {
    height: 44,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    // backgroundColor: "#28abb9",
    borderRadius: 5,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'yellow'
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});
