import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

export default class Name extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? 'Hello ' + this.props.name + '!' : ' ';
    return (
      <View>
        <Text>{display}</Text>
      </View>
    );
  }
}
