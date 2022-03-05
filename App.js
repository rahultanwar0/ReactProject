import React from 'react';

import {Text, View, TextInput, Button,StyleSheet} from 'react-native';
import Login from './component/home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      address: '',
    };
  }

  sumbit() {
    alert(this.state.name+this.state.password+this.state.address);
  }

  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center'
          }}>
          Home Screen
        </Text>
  </View>
    );
  }
}


const styles = StyleSheet.create({
  textBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
  },
});


export default App;

