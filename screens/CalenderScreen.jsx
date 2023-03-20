import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";

export default function CalenderScreen() {
  const [calenderParam, setCalenerParam] = useState("Monthly");
  const [secondParam, setSecondParam] = useState("Weekly");
  const [selectDate, setSelectedDate] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [initialDate, setInitialDate] = useState();

  function previousMonth(date, month, year) {
    let cmonth=parseInt(month);
    console.log(month)
    let cyear = year; 
    if (month === 1) {
      cmonth=12;
      cyear= year-1;
    }else{
      cmonth=(cmonth-1).toString().padStart(2, "0");
    }
    setInitialDate(`${cyear}-${cmonth}-${date}`);
  }

  function nextMonth(date, month, year) {
    let cmonth=parseInt(month);
    let cyear = year; 
    if (month === 12) {
      cmonth="01";
      cyear= year+1;
    }else{
      cmonth=(month+1).toString().padStart(2, "0");
    }
    setInitialDate(`${cyear}-${cmonth}-${date}`);
  }

  const DropDown = () => {
    return (
      <View
        style={{
          position: "absolute",
          zIndex: 5,
          top: 35,
          left: 10,
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 15,
            borderBottomWidth: 0.5,
            borderBottomColor: "grey",
          }}
          onPress={() => {
            setSecondParam("Weekly");
            setDropDown(false);
          }}
        >
          <Text>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 15 }}
          onPress={() => {
            setSecondParam("Monthly");
            setDropDown(false);
          }}
        >
          <Text>Monthly</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const CalenderButton = ({ label }) => {
    return (
      <TouchableOpacity
        onPress={() => setCalenerParam(label)}
        style={
          calenderParam === label
            ? [styles.button, styles.activeButton]
            : styles.button
        }
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    );
  };

  const CustomHeader = ({ date }) => {
    let currentDate = new Date(Date.parse(date));
    let cDate = currentDate.getDate();
    let cmonth = (currentDate.getMonth() +1);
    let cyear = currentDate.getFullYear();
    return (
      <View style={styles.calenderHeader}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setDropDown(!dropDown)}
        >
          <Text style={{ color: "black", fontWeight: "bold", marginRight: 10 }}>
            {secondParam}
          </Text>
          <AntDesign name="down" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <AntDesign
            name="left"
            size={20}
            color="black"
            onPress={()=>previousMonth(cDate,cmonth, cyear)}
          />
          <Text
            style={{ color: "black", fontWeight: "bold", marginHorizontal: 10 }}
          >
            {currentDate.getMonth() + 1 + " " + currentDate.getFullYear()}
          </Text>
          <AntDesign name="right" size={20} color="black" onPress={()=>nextMonth(cDate,cmonth, cyear)} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"dark-content"}
        hidden={false}
        backgroundColor={"white"}
        animated={true}
      />
      <View style={{ marginVertical: "20%", marginHorizontal: "5%", flex: 1 }}>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Calender Task
        </Text>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            borderColor: "#21c2eb",
            borderRadius: 30,
            borderWidth: 1,
            width: 220,
            height: 60,
            marginVertical: 20,
          }}
        >
          <CalenderButton label={"Monthly"} />
          <CalenderButton label={"Yearly"} />
        </View>
        <View style={{ height: 150, width: "100%" }}>
          {dropDown && <DropDown />}
          <Calendar
            initialDate={initialDate}
            style={styles.calenderStyle}
            // minDate={'2023-05-10'}
            hideArrows={true}
            // hideExtraDays={true}
            enableSwipeMonths={true}
            renderHeader={(date) => <CustomHeader date={date} />}
            onDayPress={(day) => console.log("onDayPress", day)}
            // onDayLongPress={(day) => console.log("onDayLongPress", day)}
            // onMonthChange={(date) => console.log("onMonthChange", date)}
            // onPressArrowLeft={(goToPreviousMonth) => {
            //   goToPreviousMonth();
            // }}
            // onPressArrowRight={(goToNextMonth) => {
            //   console.log("onPressArrowRight");
            //   goToNextMonth();
            // }}
            theme={{
              calendarBackground: "#c6e2ff",
              "stylesheet.calendar.header": {
                //   week: {
                //     marginTop: 5,
                //     flexDirection: 'row',
                //     justifyContent: 'space-between'
                //   },
              },
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: "#21c2eb",
    borderRadius: 30,
    height: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  calenderHeader: {
    flexDirection: "row",
    // backgroundColor:'white',
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    height: 50,
    width: "100%",
  },
  calenderStyle: {
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
