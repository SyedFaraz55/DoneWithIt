import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card'
export default function CardComponent() {
    return (
        <View style={{
            backgroundColor:"#f8f4f4",
            padding:20,
            paddingTop:100
        }}>
            <Card 
            title="Red Jacket for sale"
            subTitle="$100"
            image={require('../assets/jacket.jpg')}
            />
       
        </View>
    )
}

const styles = StyleSheet.create({})
