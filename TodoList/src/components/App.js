/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import ListView from './ListView';
import CustomButton from './CustomButton';
// import console = require('console');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: ''
    }
    this.handleOnTouch = this.handleOnTouch.bind(this);
  }

  handleOnTouch() {
    this.setState(prevState => ({data: [...prevState.data, {key: this.state.text}]}), 
      () => this.setState({text: ''}));
  }

  render() {
    return (
      <View>
        <Text>Todo List!</Text>
        <ListView data={this.state.data} />
        <CustomButton handleOnTouch={this.handleOnTouch}/>
        <TextInput 
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1
  }
});
