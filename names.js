import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

export default class Name extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
