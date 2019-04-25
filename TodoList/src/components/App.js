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
      text: '',
      count: 1
    }
    this.handleOnTouch = this.handleOnTouch.bind(this);
  }

  handleOnTouch() {
    this.setState(prevState => ({data: [...prevState.data, {key: Math.random().toString(), text: this.state.text, count: this.state.count}]}), 
      () => this.setState({text: '', count: this.state.count + 1}));
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Todo List!</Text>
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
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold'
  },

  input: {
    borderColor: 'black',
    borderWidth: 1
  }
});
