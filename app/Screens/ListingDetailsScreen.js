import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/color'
import ListItem from "../Components/ListItem";
export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.details}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={styles.price}>$100</Text>
               <View style={styles.userInfo}>
               <ListItem 
                image={require('../assets/mosh.jpg')}
                title="Mosh Hamedani"
                subTitle="5 Listings"
                />
               </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300
    },
    details:{
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:'500',
    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10
    },
    userInfo:{
        marginVertical:40
    }
})
