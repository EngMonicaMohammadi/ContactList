import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import *as SQLite from 'expo-sqlite'
import ContactListItem from '../components/ContactListItem'
import { concat, set } from 'react-native-reanimated';
import colors from '../utils/colors'  

const db = SQLite.openDatabase('contact.db')
export default function SearchScreen(){
    const [allContacts, setAllContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(()=> {
        db.transaction(tx => {
            tx.executeSql('select * from contact', [], (tx, {rows}) => {
                var data = [];
                for(var i =0; i< rows.length; i++){
                    data.push(rows[i]);
                }
                setAllContacts(data);
            })
        })
    })
    const searchContacts = (text) => {
        const filterText = text.toLowerCase();
        const newContacts = allContacts.filter((contcat) => {
            const item = contcat.name.toLowerCase();
            return item.indexOf(filterText) > -1;
        })
        setFilteredContacts(newContacts);
        if(text.length < 1) 
        setFilteredContacts([])
    }
    return (
       <View>
        <View style={styles.searchContainer}>
            <TextInput placeholder="Search...." style={styles.searchInput} onChangeText={(text) => searchContacts(text
                )}/>
        </View>
        {filteredContacts.length > 0 ? <FlatList
            data={filteredContacts}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
                return <ContactListItem name={item.name} phone={item.phone} onPress={()=> navigation.navigate('Profile',{item:item})} onDeleteContact={()=> deleteContact(item.id)} />
            }}
        /> : <View><Text>Nothing to display</Text></View>}
      </View>
    )
}
const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: colors.secondry
    },
    searchInput: {
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        borderRadius:10,
        backgroundColor: colors.white,
        
    }
})
