import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
const Stack = createStackNavigator();

import Contact from './screen/Contacts'
import CreateContact from './screen/CreateContacts'
import Profile from './screen/Profile'
import SearchScreen from './screen/SearchScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contacts" component={Contact}
           options={({navigation}) => ({
             headerRight:()=> (
              <TouchableOpacity style={{paddingRight:20}} onPress={()=> navigation.navigate('SearchScreen')}>
                <Text>
                  <MaterialIcons name="search" size={24} color="black" />
                </Text>
              </TouchableOpacity>
             )
           })} />
          <Stack.Screen name="CreateContact" component={CreateContact} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>    
  );
}
// <SearchScreen />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  },
});
