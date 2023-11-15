import React, { useState } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

const CompteScreen = () => {
  const [viewMode, setViewMode] = useState("month");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const onDayPress = (date) => {
    console.log("Selected Date (onDayPress):", date);
    setViewMode("day");
    setSelectedDate(date);
  };

  const goToCurrentDate = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate({ dateString: today.toISOString().split("T")[0] });
  };

  const getDayNumber = (dateObject) => {
    const selectedDateObject = new Date(dateObject.dateString);
    return selectedDateObject.getDate().toString();
  };

  const getMonthNumber = (dateObject) => {
    const selectedDateObject = new Date(dateObject.dateString);
    return (selectedDateObject.getMonth() + 1).toString();
  };

  const getYearNumber = (dateObject) => {
    const selectedDateObject = new Date(dateObject.dateString);
    return selectedDateObject.getFullYear().toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Mois"
          style={styles.buttonCal}
          onPress={() => setViewMode("month")}
        />
        <Button
          title="Semaine"
          style={styles.buttonCal}
          onPress={() => setViewMode("week")}
        />
        <Button
          title="Jour"
          style={styles.buttonCal}
          onPress={() => setViewMode("day")}
        />
      </View>

      {viewMode === "month" && (
        <Calendar
          view={viewMode}
          onDayPress={onDayPress}
          theme={{
            selectedDayBackgroundColor: "red",
            todayTextColor: "red",
            agendaDayTextColor: "red",
          }}
          horizontal={true}
          hideArrows={false}
        />
      )}

      {viewMode === "week" && (
        <Agenda
          view={viewMode}
          onDayPress={onDayPress}
          theme={{
            selectedDayBackgroundColor: "orange",
            todayTextColor: "purple",
            agendaDayTextColor: "pink",
          }}
        />
      )}

      {viewMode === "day" && selectedDate && (
        <View style={styles.dateContainer}>
          <Text>{getYearNumber(selectedDate)},</Text>
          <Text style={styles.monthText}>
            {getDayNumber(selectedDate)}, {getMonthNumber(selectedDate)}
          </Text>
          <View style={styles.rectangle} />
        </View>
      )}

      <TouchableOpacity style={styles.todayButton}>
        <Button
          style={styles.todayButton}
          title="29/03"
          onPress={goToCurrentDate}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.plusButton}>
        <Text style={{ color: "white", fontSize: 18 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  buttonCal: {
    flex: 1,
  },
  todayButton: {
    width: 50,
    height: 30,
    backgroundColor: "lightgreen",
    borderRadius: 40,
    marginLeft: "auto",
    marginRight: 0,
    marginBottom: 20,
  },
  plusButton: {
    width: 30,
    height: 30,
    backgroundColor: "darkgreen",
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: 0,
    marginTop: 10,
  },

  dateContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rectangle: {
    width: 200,
    height: 400,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default CompteScreen;
