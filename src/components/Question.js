import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useState} from 'react'
import List from './List';
import Inputxt from '../components/Inputxt'
export default function Question(props) {
  const [todos,setData]=useState([{id:1,task:'First',completed:true},
  {id:2,task:'secend',completed:true}]);
  return (
    <View>
    <Inputxt data={todos} setData={(text) => setData(text)}/>
     <Text style={styles.container}>Que Voulez-vous faire ?</Text>
     <FlatList data={todos} renderItem={({item})=><List todo={item} setData={(text) => setData(text)}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        fontFamily: "monospace",
        fontSize: 20,
        fontWeight: "700",
        lineHeight:28
    }
})