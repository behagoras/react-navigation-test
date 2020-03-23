import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Profile = props => {
  const handlePress = () => {
    // console.dir(props.navigation);
    // props.navigation.replace('Home');
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={handlePress} title="Ir al home" />
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

export default Profile;
