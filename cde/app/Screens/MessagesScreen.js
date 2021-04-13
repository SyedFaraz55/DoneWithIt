import React, { useState } from "react";
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItem from "../Components/ListItem";
import ListItemSeprator from "../Components/ListItemSeprator";
import Screen from "../Components/Screen";
import DeleteActions from '../Components/DeleteActions'
const initalMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
    const [messages,setMessages] = useState(initalMessages)
    const [refreshing,setRefreshing] = useState(false)
    const handleDelete = (item) => {
      const filtered = messages.filter(m => m.id !== item.id)
      setMessages(filtered)
    }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Notification", item)}
            renderRightActions={()=> 
            <DeleteActions onPress={()=> {
              handleDelete(item)
            }}/>}
          />
          
        )}
        
        ItemSeparatorComponent={() => <ListItemSeprator />}
        refreshing={refreshing}
        onRefresh={()=> {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            }
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
