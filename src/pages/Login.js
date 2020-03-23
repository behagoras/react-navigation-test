import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Login = props => {
  const handlePress = () => {
    // console.dir(props.navigation);
    props.navigation.navigate('About');
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button onPress={handlePress} title="Ir al about" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
