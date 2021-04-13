import React from "react";
import { StyleSheet, Text, View, FlatList} from "react-native";
import Icon from "../Components/Icon";
import ListItem from "../Components/ListItem";
import ListItemSeprator from "../Components/ListItemSeprator";
import Screen from "../Components/Screen";
import color from "../config/color";

export default function AccountScreen() {

    const menuItems = [
        {title:"My Listings",icon:{
            name:'format-list-bulleted',
            backgroundColor:color.primary 
        }},
        {title:"My Messages",icon:{
            name:'email',
            backgroundColor:color.secondary 
        }}
    ]
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
      <ListItem
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
      />
      </View>
      <View style={styles.container}>
    <FlatList 
    data={menuItems}
    keyExtractor={menuItem => menuItem.title}
    renderItem={({item})=> (
        <ListItem 
        title={item.title}
        ImageComponent={<Icon name={item.icon.name} background={item.icon.backgroundColor} />}
        />
    )}
    ItemSeparatorComponent={()=> <ListItemSeprator />}
    />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen:{
      backgroundColor:color.light
  }
});
