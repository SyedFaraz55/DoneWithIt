import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import colors from '../config/color'
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function ViewImageScreen() {
    return (
       <View style={styles.container}>
           <View style={styles.closeIcon}>
               <MaterialCommunityIcons name="close" color="white" size={30} />
           </View>
           <View style={styles.deleteIcon}>
               <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
           </View>
           <Image style={styles.image} source={require('../assets/chair.jpg')} />
       </View>
    )
}

const styles = StyleSheet.create({
    closeIcon:{
       
        position:"absolute",
        top:40,
        left:30,
    },
    deleteIcon:{
        position:"absolute",
        top:40,
        right:30
    },
    container:{
        flex:1,
        backgroundColor:colors.black,
        paddingTop:Platform.OS === 'ios' ? 50 : 0
    },
    image:{
        width:"100%",
        height:"100%",
        resizeMode:"contain",
    }
})
