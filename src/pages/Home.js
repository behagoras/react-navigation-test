import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = props => {
  const handlePress = () => {
    console.dir(props.navigation);
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={handlePress} title="Ir al login" />
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

export default Home;
