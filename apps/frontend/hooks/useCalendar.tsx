import { useCallback, useMemo, useState } from "react";

interface UseCalendarOptions {
  initialYear?: number;
  initialMonth?: number;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function useCalendar(options?: UseCalendarOptions) {
  const days = useMemo(
    () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    []
  );

  const [year, setYear] = useState(
    options?.initialYear || new Date().getFullYear()
  );
  const [month, setMonth] = useState(
    options?.initialMonth || new Date().getMonth()
  );

  const numberOfDays = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [year, month]);

  const firstDayIndex = useMemo(() => {
    const date = new Date(year, month, 1);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 ? 7 : dayOfWeek;
  }, [month, year]);

  const calendarArray = useMemo(() => {
    const daysArray = Array.from(
      { length: Math.max(0, firstDayIndex - 1) },
      () => null
    );

    const daysOfMonth = Array.from(
      { length: numberOfDays },
      (_, index) => index + 1
    );
    return [...daysArray, ...daysOfMonth];
  }, [firstDayIndex, numberOfDays]);

  const handleMonthChange = useCallback(
    (type: "add" | "remove") => {
      if (type === "add") {
        if (month < 11) {
          setMonth((prevMonth) => prevMonth + 1);
        } else {
          setYear((prevYear) => prevYear + 1);
          setMonth(0);
        }
      } else {
        if (month > 0) {
          setMonth((prevMonth) => prevMonth - 1);
        } else {
          setYear((prevYear) => prevYear - 1);
          setMonth(11);
        }
      }
    },
    [month]
  );

  const handleYearChange = useCallback(
    (type: "add" | "remove") => {
      if (type === "add") {
        if (year < new Date().getFullYear()) {
          setYear((prevYear) => prevYear + 1);
        }
      } else {
        if (year > 1901) {
          setYear((prevYear) => prevYear - 1);
        }
      }
    },
    [year]
  );

  const getDayString = useCallback(
    (day: number) => {
      return days[new Date(year, month, day - 1).getDay()];
    },
    [days, month, year]
  );

  return {
    year,
    month,
    setMonth,
    calendarArray,
    handleMonthChange,
    handleYearChange,
    days,
    months,
    getDayString,
  };
}
