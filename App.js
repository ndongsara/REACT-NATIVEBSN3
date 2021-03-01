
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ArticlesScreen from './components/articles';
import DetailArticlesScreen from './components/detailsarticles';
import HomeScreen from './components/home';









export default function App() {
  return (
    <View style={styles.container} >
 
   
     
      <Image
      style={{ width: 50, height: 50 }}
      source={require('../saraApp/assets/panier.svg')}/>

     
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Articles" component={ArticlesScreen} />
          <Stack.Screen name="DetailArticles" component={ DetailArticlesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      

    
      </View>
  );
}

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eeeeea"
  },
  title: {
    marginTop: 6,
    paddingVertical: 8,
    width:100,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold"
  },
  
  
});
