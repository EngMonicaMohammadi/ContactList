import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {Feather} from '@expo/vector-icons'
import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem'
const contacts = [
    { id: '1', name: 'Monica', phone: '040443455', email: 'monica@gmail.com'},
    { id: '2', name: 'Bahar', phone: '3553265', email: 'bahar@gmail.com'},
    { id: '3', name: 'AhmadSina', phone: '040353255', email: 'ah_sina@gmail.com'},
    { id: '4', name: 'SharifAhmad', phone: '0794340000', email: 'rasekh@gmail.com'},
    { id: '5', name: 'Fatemah', phone: '07943300', email: 'sama@gmail.com'},
    { id: '6', name: 'Samira', phone: '078965000', email: 'samira@gmail.com'},
    { id: '7', name: 'Reza', phone: '072434012', email: 'habibi@gmail.com'},
    { id: '8', name: 'Atefa', phone: '0782943023', email: 'Atefa@gmail.com'},
    { id: '9', name: 'Maryam', phone: '0745347600', email: 'maryam@gmail.com'},
]
export default function Contacts({navigation}){
   return (
       <View>
    <FlatList
    data={contacts}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) => {
        return <ContactListItem name={item.name} phone={item.phone} onPress={()=> navigation.navigate('Profile',{item:item})} />
    }}
    />
    <TouchableOpacity style={styles.floatButton} onPress={()=> navigation.navigate('CreateContact')}> 
        <Text>
        <Feather name="plus" size={28} color="white" />
        </Text>
    </TouchableOpacity>
    </View>
   )

}
const styles = StyleSheet.create({
    floatButton: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: '50%',
        position: 'absolute',
        bottom: 40,
        right: 40
    }
})