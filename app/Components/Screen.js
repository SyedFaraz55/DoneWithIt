import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,Platform,StatusBar  } from 'react-native'

export default function Screen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            <View>
            {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    }
})
