import type { dateTimeType } from "../App";

interface ClockProps {
  dateTime: dateTimeType;
}
export const Clock = ({ dateTime }: ClockProps) => {
  const { hour, minute, second, type } = dateTime;

  const typeFormat = type.includes("a") ? "AM" : "PM";
  return (
    <div className="time">
      <span className="hour">{hour}</span>
      <span className="pount-minute pount">:</span>
      <span className="minute">{minute}</span>
      <span className="pount-second pount">:</span>
      <span className="second">{second} </span>
      <span className="type">{typeFormat}</span>
    </div>
  );
};
