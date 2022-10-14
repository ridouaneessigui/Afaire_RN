import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";

export default function EnvoyerBtn() {
  return (
    <View>
      <TouchableOpacity style={styles.preview}>
        <Text style={styles.previewContent}>Envoyer(Submit)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
