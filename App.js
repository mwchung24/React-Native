import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Name from './names.js';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://www.contactcenterworld.com/images/company/NICE-Systems-600px-logo.jpg'
    };
    return (
      <View style={styles.container}>
        <Name style={styles.firstName} name='Martin'></Name>
        <Name style={styles.secondName} name='Hanna' />
        <Name name='Calvin' />
        <Image source={pic} style={styles.picture}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 300,
    height: 100,
  },
  firstName: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'orange',
  },
  secondName: {
    color: 'red',
    fontSize: 50,
  },
});
