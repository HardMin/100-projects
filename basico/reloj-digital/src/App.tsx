import { useEffect, useState } from "react";
import "./App.css";
import { Clock } from "./components/Clock";

export type dateTimeType = {
  hour: string;
  minute: string;
  second: string;
  type: string;
};

function App() {
  const [dateTime, setDateTime] = useState<dateTimeType>({
    hour: "",
    minute: "",
    second: "",
    type: "",
  });

  const getTimeObject = (): dateTimeType => {
    const time = new Date().toLocaleTimeString();
    const getPos = time.indexOf(" ");
    const [hours, type] = [
      time.slice(0, getPos),
      time.slice(getPos).replaceAll(" +", ""),
    ];

    const [hour, minute, second] = hours.split(":");

    return {
      hour,
      minute,
      second,
      type,
    };
  };

  const getTime = () => {
    setInterval(() => {
      setDateTime(getTimeObject);
    }, 1000);
  };

  useEffect(getTime, []);

  return <Clock dateTime={dateTime} />;
}

export default App;
