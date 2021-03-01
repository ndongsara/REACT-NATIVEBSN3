import React from 'react';
import { StyleSheet, Text, View,  Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function DetailArticlesScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Articles Details Screen</Text>
       
      </View>
    );
  }
  
  export default DetailArticlesScreen ;