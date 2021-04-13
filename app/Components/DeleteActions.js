import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/color'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
export default function DeleteActions({onPress}) {
    return (
    <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.container}>
          <MaterialCommunityIcons name="trash-can" size={35} color={colors.white}/>
      </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.danger,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
        marginTop:16
    }
})
