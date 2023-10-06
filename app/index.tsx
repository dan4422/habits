import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the HABIT TRACKER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "green"
  }
})

export default index;