import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


import colors from '../utils/colors'  

export default function SearchScreen(){
    return (
       <View style={styles.searchContainer}> 
           <TextInput placeholder="search..." style={styles.searchInput}/>
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
        backgroundColor: colors.white
    }
})