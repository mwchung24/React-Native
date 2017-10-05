import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

export default class buttonTest extends React.Component {
  _onPressButton() {
    Alert.alert('You pressed the button!');
  }

  _onPressHighlightButton() {
    Alert.alert('This is the highlight button!');
  }

  _onLongPressButton() {
    Alert.alert('You pressed the button too long!');
  }

  render() {
    return (
      <View>
        <Button
          onPress={this._onPressButton}
          title='Click Me!'
          color='#841584'
        />

        <TouchableHighlight onPress={this._onPressHighlightButton} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click Me!</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    width: 260,
    alignItems: 'center',
    padding: 30,
  },
  buttonText: {
    color: 'white',
  }
});
