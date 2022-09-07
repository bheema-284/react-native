import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({navigation}) {
  const homePage= ()=>{
  navigation.navigate('Home')
  }
  const aboutPage= ()=>{
    navigation.navigate('About')
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{marginBottom:20}}>
      <Button title='Go to Home' onPress={homePage}/>
      </View>
      <Button title='Go to About' onPress={aboutPage}/>
    </View>
  );
}

export default HomeScreen;