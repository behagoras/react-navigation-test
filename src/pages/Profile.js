import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home');
  };
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nombre del usuario',
    };
  };
  setParams = () => {
    this.props.navigation.setParams({
      name: 'Cesar',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button title="Ir a la home" onPress={this.handlePress} />
        <Button title="Cambiar Nombre" onPress={this.setParams} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
