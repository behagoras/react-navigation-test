import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const About = props => {
  const handlePress = () => {
    console.dir(props.navigation);
    props.navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button onPress={handlePress} title="Ir al perfil" />
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

export default About;
