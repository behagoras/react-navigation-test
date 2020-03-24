// In App.js in a new project

import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Containers
import About from './src/pages/About';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Profile from './src/pages/Profile';

Login.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('title' /* your default title */),
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen" // pantalla o modal
        mode="card" // modal, card
        screenOptions={{
          cardStyle: {
            backgroundColor: 'green',
            borderWidth: 2,
            // borderColor: 'blue',
          },
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
          title: 'Default title',
          headerTitleAllowFontScaling: true,
          headerBackTitle: 'Atrás',
          gestureEnabled: true,
        }}>
        <Stack.Screen
          options={{title: 'My home', path: 'home/'}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
