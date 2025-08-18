import { useDateTime } from "../hooks/useDateTime";

export const Clock = () => {
  const { dateTime } = useDateTime();
  const { hour, minute, second, type } = dateTime;

  return (
    <div className="time">
      <span className="hour">{hour}</span>
      <span className="pount-minute pount">:</span>
      <span className="minute">{minute}</span>
      <span className="pount-second pount">:</span>
      <span className="second">{second} </span>
      <span className="type">{type}</span>
    </div>
  );
};
