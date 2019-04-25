import React from 'react';
import { TouchableNativeFeedback, StyleSheet, View, Text} from 'react-native';

export default CustomButton = props => (
  <TouchableNativeFeedback onPress={props.handleOnTouch}>
    <View style={styles.button}>
      <Text style={styles.plus}>+</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({

  plus: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white'
  },

  button: {
    justifyContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
})