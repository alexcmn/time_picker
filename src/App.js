import React, { useState } from "react";
import "./App.css";
import TimePicker from "./components/TimePicker";
import TimeFormat from "./components/TimeFormat";

export default function App() {
  
  const [timeFormat, setTimeFormat] = useState({
    timeFormatValue: "",
    isChecked: false
  });
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [time, setTime] = useState('');
  const [amPm, setAmPm] = useState('')

  const handleTimeFormat = (event) => {
    if (timeFormat.timeFormatValue === "") {
      setTimeFormat({
        ...timeFormat,
        timeFormatValue: event.target.value,
        isChecked: true
      });
      if(timeFormat.timeFormatValue === '12'){
        setAmPm('am')
      }else{
        setAmPm('')
      }
    } else if (timeFormat.timeFormatValue === event.target.value) {
      setTimeFormat({
        ...timeFormat,
        timeFormatValue: "",
        isChecked: false
      });
    }
  };

  const hourUp = () =>{
    setHour(hour+1)
    if(hour >= 23){
      setHour(0)
    }else if(amPm && hour >= 12){
        setHour(0)
    }
  }

  const hourDown = () =>{
    setHour(hour-1)
    if(hour <= 0){
      setHour(23)
      if(amPm && hour <= 0){
          setHour(12)
      }
    }
  }

  const minuteUp = () =>{
    setMinute(minute+1)
    if(minute >= 59){
      setMinute(0)
      setHour(hour+1)
    }
  }

  const minuteDown = () =>{
    setMinute(minute-1)
    if(minute <= 0){
      setMinute(59)
      if(hour > 0){
        setHour(hour-1)
      }
    }
  }

  const handleChange = (event) =>{
    if(event.target.id === 'hr'){
      setHour(event.target.value)
    }else{
      setMinute(event.target.value)
    }
  }

  const handleOptionChange = (event) =>{
    setAmPm(event.target.value)
  }

  return (
    <div className="App">
      <div className="wrapp">
        <h1>Time Picker</h1>
        <div className="time-check">
          <TimeFormat
            time={timeFormat}
            toggleCheck={(event) => handleTimeFormat(event)}
            format="12"
          />
          <TimeFormat
            time={timeFormat}
            toggleCheck={(event) => handleTimeFormat(event)}
            format="24"
          />
        </div>
        <TimePicker 
          timeFormat={timeFormat}
          hour={hour}
          minute={minute}
          hourUp={hourUp}
          hourDown={hourDown}
          minuteUp={minuteUp}
          minuteDown={minuteDown} 
          handleChange={handleChange}
          amPm={amPm}
          handleOptionChange={handleOptionChange}
        />
      </div>
    </div>
  );
}
