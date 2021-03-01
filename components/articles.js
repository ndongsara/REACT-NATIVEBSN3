import React from 'react';
import {  Text, View, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function ArticlesScreen( { navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>articles screen </Text>
        <Button
          title="Go to Detail Articles"
          onPress={() => navigation.navigate('DetailArticles')}
        />
      </View>
    );
  }



  export default ArticlesScreen ;