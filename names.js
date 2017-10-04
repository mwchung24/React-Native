import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

export default class Name extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showText: true};

    // Will make the text BLINK
    // setInterval(() => {
    //   this.setState(previousState => {
    //     return { showText: !previousState.showText };
    //   });
    // }, 1000);
  }
  render() {
    let display = this.state.showText ? 'Hello ' + this.props.name + '!' : ' ';
    return (
      <View>
        <Text style={this.props.style}>{display}</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   firstName: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   }
// });
