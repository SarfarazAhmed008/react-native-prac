import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class App extends Component {
  static navigationOptions = {
    header : null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to App's Home!
        </Text>
        <Button title="Go to Component 1" onPress={()=> this.props.navigation.navigate('component1')} />
      </View>
    );
  }
}


class Component1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Component 1!
        </Text>
        <Button title="Go to Component 2" onPress={()=> this.props.navigation.navigate('component2')} />
      </View>
    );
  }
}

class Component2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Component 2!
        </Text>
        <Button title="Go Back to Home" onPress={()=> this.props.navigation.navigate('home')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default createStackNavigator({
  home : App,
  component1 : Component1,
  component2 : Component2,
});