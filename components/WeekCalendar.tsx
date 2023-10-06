import { Alert } from 'react-native';
import { CalendarProvider, WeekCalendar as WeekCalendarView } from 'react-native-calendars';

const WeekCalendar = ({ onDayPress }: { onDayPress: any }) => {

  return (
    <CalendarProvider date='2023-10-05' style={{ minHeight: 1, minWidth: 1 }}>
      <WeekCalendarView onDayPress={onDayPress} />
    </CalendarProvider>
  )
}

export default WeekCalendar;