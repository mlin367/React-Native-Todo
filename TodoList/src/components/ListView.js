import React from 'react';
import Todo from './Todo';
import { FlatList, StyleSheet } from 'react-native';

export default ListView = props => (
  <FlatList 
    data={props.data}
    renderItem={({ item }) => <Todo todo={item.key} />}
  />
);