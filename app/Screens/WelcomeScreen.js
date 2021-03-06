import React from 'react'
import { Image, ImageBackground, StyleSheet, View,Text } from 'react-native'
import AppButton from '../Components/AppButton'
export default function WelcomeScreen() {
    return (
        <ImageBackground blurRadius={6} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}> 
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.logoText}>Sell What You Don't Need</Text>
            </View>
           <View style={{padding:20,width:"100%"}}>
           <AppButton title="Login" color="primary" />
           <AppButton title="Register" color="secondary" />
            <View style={styles.registerButton} />
           </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    logoContainer:{
        alignItems:"center",
        position:'absolute',
        top:70
    },
    logo:{
        width:100,
        height:100,
    },
    logoText:{
       paddingVertical:20,
       fontSize:25,
       fontWeight:"600" 
    },
   
})
