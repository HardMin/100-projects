import type { dateTimeType } from "../types/dateTime";

export const getTimeObject = (): dateTimeType => {
  const time = new Date().toLocaleTimeString();
  const getPos = time.indexOf(" ");
  const [hours, type] = [time.slice(0, getPos), time.slice(getPos)];

  // 00:00:00 - hour - minute - second
  const [hour, minute, second] = hours.split(":");

  const dateTimeObj = {
    hour,
    minute,
    second,
    type,
  };

  return formatDateTime(dateTimeObj);
};

export const formatDateTime = (time: dateTimeType): dateTimeType => {
  const verifyLength = (value: string) => {
    return value.length === 2 ? value : "0" + value;
  };

  return {
    hour: verifyLength(time.hour),
    minute: verifyLength(time.minute),
    second: verifyLength(time.second),
    type:
      time.type === "--" ? time.type : time.type.includes("a") ? "AM" : "PM",
  };
};
