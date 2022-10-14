import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.preview}>
        <Text style={styles.previewContent}>TOUTES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preview}>
        <Text style={styles.previewContent}>ACTIVE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preview}>
        <Text style={styles.previewContent}>Complete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    preview: {
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        color: "grey",
        borderColor:'black'

    },
    previewContent: {
        color: "black",
        fontSize: 16,
        fontFamily: "Gilroy-Bold",
        fontWeight: "700"
    },
    container:{
        flexDirection:'row',
        alignItems:'flex-end',
        flex:1,
        bottom: 0
    }
})