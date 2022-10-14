import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function List({todo,setData}) {
  const deletei=(todoId)=>
  {
    const newt=todo.filter(item=>item.id!=todoId);
    setData(newt)
  }
  const markcomplet=todoId=>
  {
    const newT=todo.map(item=>{
      if(item.id==todoId)
      {
        return{...item,completed:true};
      }
      return item;
    });
    setData(newT);
  }
  return (
    <View style={styles.container}>
      <Text>{todo?.task}</Text>
      <TouchableOpacity style={styles.preview}>
        <Text style={styles.previewContentf} onPress={markcomplet}>Faite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preview}>
        <Text style={styles.previewContents} onPress={deletei}>Supp</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderColor:'black',
        flexDirection:'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:12
    },
    preview: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        color: "grey",
        borderColor:'black',
        marginLeft:70
    },
    previewContentf: {
        color: "green",
        fontSize: 16,
        fontFamily: "Gilroy-Bold",
        fontWeight: "700",
        borderColor:'black'
    },
    previewContents: {
        color: "red",
        fontSize: 16,
        fontFamily: "Gilroy-Bold",
        fontWeight: "700",
        borderColor:'black'
    }
})