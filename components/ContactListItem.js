import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


import colors from '../utils/colors'  
import Avatar from './Avatar'
export default function ContactListItem({name, phone, onPress}){
    return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.contacInfo}>
            <Avatar name={name} size={50} />
            <View style={styles.details}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{phone}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
       flex:1,
       paddingLeft:24 
    },
    contacInfo: {
        flexDirection: "row",
        paddingVertical:16,
        paddingHorizontal:24,
        borderBottomColor: colors.secondry,
        borderBottomWidth: 0.5
    
    },
    details: {
        marginLeft:20
    },
    title:{
        color: colors.black,
        fontSize:16,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.primary
    }
})