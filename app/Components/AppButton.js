import React from 'react'
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native'
import colors from '../config/color'
export default function AppButton({title,color, onPress}) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button,{backgroundColor:colors[color]}]}>
           <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:30,
        backgroundColor:colors.primary,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        padding:15,
        marginVertical:8
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:"bold"
    }
})
