import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default Todo = props => (
  <Text style={styles.todo}>{props.count + '. ' + props.todo}</Text>
);

const styles = StyleSheet.create({
  todo: {
    fontSize: 20
  }
})