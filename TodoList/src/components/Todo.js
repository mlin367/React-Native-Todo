import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default Todo = props => (
  <Text>{props.count + '. ' + props.todo}</Text>
);