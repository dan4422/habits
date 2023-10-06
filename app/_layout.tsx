import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

function _layout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#f3134",
      tabBarStyle: {
        height: 110,
        borderColor: "white",
        borderTopColor: "blue",
        backgroundColor: "white",
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black"
      },
      tabBarIconStyle: {
        color: "yellow",
      }
    }}>
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="home/Home" options={{
        title: "Home", tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="home" size={32} color="black" />
        )
      }} />
      <Tabs.Screen name="calendar/CalendarView" options={{
        title: "Calendar",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="calendar" size={32} color="lightgreen" />
        )
      }} />
        <Tabs.Screen name="stats/Stats" options={{
          title: "Stats",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="stats-chart" size={32} color="red" />
          )
        }} />
      <Tabs.Screen name="profile/Profile" options={{
        title: "Profile",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="ios-person" size={32} color="grey" />
        )
      }} />
    </Tabs>
  )
}

export default _layout;