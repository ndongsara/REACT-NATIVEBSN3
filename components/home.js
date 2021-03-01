import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home  screen </Text>
      <Button
        title="Go to Articles"
        onPress={() => navigation.navigate('Articles')}
      />
    </View>
  );
}

  
  export default HomeScreen ;