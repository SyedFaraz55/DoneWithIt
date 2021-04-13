import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Platform, TouchableWithoutFeedback, Modal, Button,FlatList } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import color from '../config/color'
import AppTextInput from './AppTextInput'
import Screen from './Screen'
import PickerApp from './PickerApp'

export default function AppPicker({icon, items, onSelectItem, selectedItem, placeholder}) {
    const [visible,setVisible] = useState(false);
    return (
      <>
       <TouchableWithoutFeedback onPress={()=> setVisible(true)}>
            <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={color.medium} style={styles.icon} />}
           <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
           <MaterialCommunityIcons name="chevron-down" size={20} color={color.medium}  />
        </View>
       </TouchableWithoutFeedback>
       <Modal visible={visible} animationType="slide" >
          <Screen>
              <Button title="close" onPress={() => setVisible(false)} />
              <FlatList 
              data={items}
              keyExtractor={item=> item.value.toString()}
              renderItem={({item}) => 
              <PickerApp label={item.label} onPress={() => {
                  setVisible(false)
                  onSelectItem(item)
              }} />}
              />
          </Screen>
       </Modal>
      </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10
    },
    text:{
        flex:1
    },
    icon:{
        marginRight:10
    },
    textInput:{
        fontSize:18,
        fontFamily:Platform.OS ==='android' ? 'Roboto': 'Avenir',
        color:color.dark
    }
})
