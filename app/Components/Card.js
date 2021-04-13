import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/color'

export default function Card({title,subTitle,image}) {
    return (
        <View style={styles.card}>
           <Image source={image} style={styles.image} />
           <View style={styles.details}>
           <Text>{title}</Text>
           <Text style={styles.subtitle}>{subTitle}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200
    },
    details:{
        padding:20
    },
    subtitle:{
        paddingTop:8,
        color:colors.secondary,
        fontWeight:'bold'
    }
})
