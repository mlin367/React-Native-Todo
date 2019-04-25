import React from 'react';
import Todo from './Todo';
import { FlatList, StyleSheet } from 'react-native';

export default ListView = props => (
  <FlatList 
    data={}
    renderItem={({ item }) => <Todo>{item}</Todo>}
  />
);