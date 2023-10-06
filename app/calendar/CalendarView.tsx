import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable } from 'react-native';
import { Calendar, CalendarList } from "react-native-calendars";

export default function CalendarView() {
  const onPressBtn = () => {
    Alert.alert("WTF")
  }

  return (
    <SafeAreaView style={styles.container}>
      <CalendarList
        theme={{
          calendarBackground: "#232b2b",
          monthTextColor: "red",
          dayTextColor: "white"
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232b3b'
  }
});