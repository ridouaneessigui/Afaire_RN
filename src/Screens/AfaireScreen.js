import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Question from '../components/Question'
import Footer from '../components/Footer'

export default function AfaireScreen() {
  return (
    <View style={styles.container}>
      <Question/>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
       flexDirection:'column',
       justifyContent:'flex-end',
       alignItems:'center',
       flex: 1,
       backgroundColor: "lightgrey",
       alignItems: "center",
       justifyContent: "center",
    }

})