import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Name from './names.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    
  }
  render() {
    let pic = {
      uri: 'https://www.contactcenterworld.com/images/company/NICE-Systems-600px-logo.jpg'
    };
    return (
      <View style={styles.container}>
        <Name name='Martin' />
        <Name name='Hanna' />
        <Name name='Calvin' />
        <Image source={pic} style={picStyles.container}/>
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
});

const picStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 100,
  }
});
