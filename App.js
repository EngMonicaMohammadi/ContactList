import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import * as SQLite from 'expo-sqlite';
const Stack = createStackNavigator();
const db = SQLite.openDatabase('contact.db')

import Contact from './screen/Contacts'
import CreateContact from './screen/CreateContacts'
import Profile from './screen/Profile'
import SearchScreen from './screen/SearchScreen'
export default function App() {
  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('create table if not exists contact(id integer primary key autoincrement, name text, phone text, email text);'
      ,[], ()=> console.log('Table created successfully'));
    })
  })
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  },
});
