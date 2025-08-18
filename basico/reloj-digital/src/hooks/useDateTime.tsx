import { useState, useEffect } from "react";
import { getTimeObject } from "../lib/utils";
import type { dateTimeType } from "../types/dateTime";

const initialDateTime = {
  hour: "00",
  minute: "00",
  second: "00",
  type: "--",
};

export const useDateTime = () => {
  const [dateTime, setDateTime] = useState<dateTimeType>(initialDateTime);

  const getTime = () => {
    setInterval(() => {
      const time = getTimeObject();
      setDateTime(time);
    }, 1000);
  };

  useEffect(getTime, []);

  return { dateTime };
};
