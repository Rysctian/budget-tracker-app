"use client";

import CalendarComponent from "@/components/comp-507";
import CalendarPicker from "@/components/features/calendar/calendar-picker";
import { ExpenseChart } from "@/components/features/charts/ExpenseChart";
import { Categories } from "./_components/Categoories";

export default function DashboardRoute() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-between w-full py-3  ">
        <Categories />
        <CalendarPicker />
      </div>
      <div className="flex flex-col xl:flex-row gap-2">
        <ExpenseChart />
        <ExpenseChart />
      </div>
    </main>
  );
}
