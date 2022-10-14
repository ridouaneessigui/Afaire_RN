import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'


export default function Inputxt({data,setData}) {
    const [text, setText] = React.useState('');
    const add=()=>
    {
      const newT={
        id:Math.random(),
        task:text,
        completed:false
      };
      setData([...data,newT])
    }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text=>setText(text)}
        value={text}
        placeholder="A Faire"
      />
      <TouchableOpacity style={styles.preview} onPress={add}>
        <Text style={styles.previewContent}>Envoyer(Submit)</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:300
    },
    input: {
        height: 40,
        width:200,
        margin: 0.4,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        fontSize:20,
        justifyContent:"center",
        borderColor:'white'
      },
      preview: {
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        color: "grey",
        borderColor:'black',

    },
    previewContent: {
        color: "black",
        fontSize: 16,
        fontFamily: "Gilroy-Bold",
        fontWeight: "700",
        borderColor:'black'

    }
})