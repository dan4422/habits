import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HabitItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    borderWidth: 1,
    borderColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HabitItem