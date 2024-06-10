import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import Text from "../form-elements/text";
import useCalendar from "@/hooks/useCalendar";
import { cn } from "@/utils/cn";

interface CalendarProps {
  initialYear?: number;
  availableDays?: string[];
  onChange: (value: Date) => void;
}

export default function Calendar({
  initialYear,
  onChange,
  availableDays,
}: CalendarProps) {
  const [view, setView] = useState<"month" | "year">("month");

  const {
    calendarArray,
    handleMonthChange,
    handleYearChange,
    month,
    year,
    days,
    months,
    setMonth,
    getDayString,
  } = useCalendar({ initialYear });

  return (
    <div className="w-full">
      <div className="mb-4 flex w-full items-center justify-between py-1">
        <IoChevronBack
          onClick={() =>
            view === "month"
              ? handleMonthChange("remove")
              : handleYearChange("remove")
          }
          className="cursor-pointer"
        />
        <Text
          onClick={() => view === "month" && setView("year")}
          fontSize={16}
          lineHeight={24}
          className="text-center"
        >
          {view === "month" ? `${months[month]} ${year}` : year}
        </Text>
        <IoChevronForward
          onClick={() =>
            view === "month"
              ? handleMonthChange("add")
              : handleYearChange("add")
          }
          className="cursor-pointer"
        />
      </div>
      <div className="w-full flex justify-center">
        <div
          className={cn(
            "grid w-max gap-2",
            view === "month" ? "grid-cols-7" : "grid-cols-4"
          )}
        >
          {view === "month"
            ? days.map((day) => (
                <Text
                  fontSize={12}
                  intent={"placeholder"}
                  key={`day_${day}`}
                  className="h-6 w-10 text-center"
                >
                  {day}
                </Text>
              ))
            : null}
          {view === "month"
            ? calendarArray.map((day, index) =>
                day ? (
                  <div
                    onClick={() => {
                      onChange(new Date(year, month, day));
                    }}
                    key={`calendar_${day}_${index}`}
                    className={cn(
                      "flex aspect-square w-10 md:w-14 cursor-pointer items-center justify-center rounded-md border",
                      availableDays
                        ? availableDays.includes(getDayString(day))
                          ? "hover:bg-blue-ultra-light"
                          : "bg-slate-50 text-slate-400"
                        : "hover:bg-blue-ultra-light"
                    )}
                  >
                    <Text fontSize={14} fontWeight={400} intent={"secondary"}>
                      {day}
                    </Text>
                  </div>
                ) : (
                  <div key={`calendar_null_${index}`} />
                )
              )
            : months.map((monthString, index) => (
                <div
                  onClick={() => {
                    setMonth(index);
                    setView("month");
                  }}
                  key={`month${monthString}`}
                  className="flex h-10 w-[4.75rem] cursor-pointer items-center justify-center rounded-md border border-theras-background-light hover:bg-theras-background-neutral"
                >
                  <Text
                    fontSize={12}
                    intent={"secondary"}
                    key={`month${monthString}`}
                    className="text-center"
                  >
                    {monthString.slice(0, 3)}
                  </Text>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
