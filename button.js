import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

export default class buttonTest extends React.Component {
  _onPressButton (e) {
    Alert.alert('you pressed the button');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>AC</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+/-</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>%</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>/</Text>
          </View>
        </TouchableHighlight>
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
            <Text style={styles.buttonText}>X</Text>
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
            <Text style={styles.buttonText}>-</Text>
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
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='black'>
          <View style={styles.buttonZero}>
            <Text style={styles.buttonText}>0</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
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
    flexWrap: 'wrap',
    width: 300,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'gray',
    border: 'black',
    width: 70,
    height: 70,
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonZero: {
    backgroundColor: 'gray',
    border: 'black',
    width: 140,
    height: 70,
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    flex: 1,
    flexDirection: 'row',
  }
});
