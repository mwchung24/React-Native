import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TextInput, ScrollView, FlatList } from 'react-native';
import Name from './names.js';
import Button from './button.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

  }

  render() {
    let pic = {
      uri: 'https://www.contactcenterworld.com/images/company/NICE-Systems-600px-logo.jpg'
    };
    return (
      <ScrollView
        maximumZoomScale={3}
        minimumZoomScale={1}
      >
        <View style={styles.container}>
          <TextInput style={styles.input}
            onChangeText={(text) => this.setState({text: text})}
          />
          <View style={styles.buttons}>
            <Button/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 100,
    // flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    
    // flexDirection: 'row',
  },
  // picture: {
  //   width: 300,
  //   height: 100,
  // },
  // firstName: {
  //   color: 'blue',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  //   backgroundColor: 'orange',
  // },
  // secondName: {
  //   color: 'red',
  //   fontSize: 50,
  // },
  // box: {
  //   width: 150,
  //   height: 150,
  //   backgroundColor: 'steelblue',
  // },
  input: {
    height: 40,
    borderColor: 'Black',
    borderWidth: 1,
    borderRadius: 4,
    width: 300,
    marginBottom: 20,
  }
});

// <FlatList
//   data={[
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: this.state.text},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//     {key: 'Martin'},
//   ]}
//   renderItem={({item}) => <Name style={styles.firstName} name={item.key}/>}
//   />
// <Image source={pic} style={styles.picture}/>
// <View style={styles.box}/>
