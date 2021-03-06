import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card'
import Screen from '../Components/Screen'
import color from '../config/color'

export default function ListingScreen() {
    const listings = [
        {
            id:1,
            title:"Red jacket for sale",
            price:100,
            image:require('../assets/jacket.jpg')
        },
        {
            id:2,
            title:"Couch in great condition",
            price:1000,
            image:require('../assets/couch.jpg')
        }
    ]
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item})=> (
                <Card
                title={item.title}
                subTitle={"$" + item.price}
                image={item.image}
                />
            )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:color.light,
        marginVertical:20
    }
})
