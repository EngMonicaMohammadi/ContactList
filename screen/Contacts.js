import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem'
const contacts = [
    { id: '1', name: 'Monica', phone: '040443455', email: 'monica@gmail.com'},
    { id: '2', name: 'Bahar', phone: '3553265', email: 'bahar@gmail.com'},
    { id: '3', name: 'AhmadSina', phone: '040353255', email: 'ah_sina@gmail.com'},
    { id: '4', name: 'SharifAhmad', phone: '0794340000', email: 'rasekh@gmail.com'},
    { id: '5', name: 'Fatemah', phone: '07943300', email: 'sama@gmail.com'},
    { id: '6', name: 'Samira', phone: '078965000', email: 'samira@gmail.com'},
    { id: '4', name: 'Reza', phone: '072434012', email: 'habibi@gmail.com'},
    { id: '4', name: 'Atefa', phone: '0782943023', email: 'Atefa@gmail.com'},
    { id: '7', name: 'Maryam', phone: '0745347600', email: 'maryam@gmail.com'},
]
export default function Contacts(){
   return (
    <FlatList
    data={contacts}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) => {
        return <ContactListItem name={item.name} phone={item.phone} />
    }}
    />
   )

}
const styles = StyleSheet.create({

})