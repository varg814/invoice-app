import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDemoProps } from "@/types";

const CalendarDemo: React.FC<CalendarDemoProps> = ({ date, onChange }) => {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={onChange}
      className="rounded-md border absolute bg-[#FFFFFF]"
    />
  );
};

export default CalendarDemo;
