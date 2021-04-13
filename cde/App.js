import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import WelcomeScreen from './app/Screens/WelcomeScreen'
import ViewImageScreen from './app/Screens/ViewImageScreen'
import CardComponent from './app/Components/CardComponent'
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen'
import MessagesScreen from './app/Screens/MessagesScreen'
import Screen from './app/Components/Screen';
import Icon from './app/Components/Icon'
import ListItem from './app/Components/ListItem';
export default function App() {
  
  return (
   
     <Screen>
       <ListItem title="My Title" subTitle="Subttile" ImageComponent={<Icon name="email" />} />
     </Screen>
   
  )
}

