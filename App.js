import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import HomeScreen from './HomeScreen';
import About from './About';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;