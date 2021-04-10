import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator style={styles.container}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Inmobiliaria'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
  },
});
export default App;
