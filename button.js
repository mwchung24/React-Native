import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

export default class buttonTest extends React.Component {
  _onPressButton () {
    Alert.alert('you pressed the button');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor='black'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='black'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'gray',
    border: 'black',
    width: 70,
    height: 70,
    alignItems: 'center',
    padding: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
  }
});
