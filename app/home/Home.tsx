import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WeekCalendar from '../../components/WeekCalendar';
import HabitItem from '../../components/HabitItem';

const Home = () => {
  const onPressBtn = () => {
    Alert.alert("WTF")
  }

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Fifth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Sixth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Seventh Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: '8th Item',
    },
  ];
  
  return (
    <>
    <SafeAreaView  style={styles.container}>
      <WeekCalendar onDayPress={onPressBtn}/>
    </SafeAreaView>
    <FlatList style={styles.habitList} data={data} renderItem={({item}) => <HabitItem title={item.title} />} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  habitList: {
    flex: 1,
    backgroundColor: "#F5FEFD"
  }
});

export default Home;