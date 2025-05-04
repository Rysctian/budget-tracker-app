import CalendarPicker from "@/components/features/calendar/calendar-picker";
import { ExpenseChart } from "@/components/features/charts/ExpenseChart";
import { Separator } from "@radix-ui/react-select";

export default function IncomeRoute() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Income</h1>
      <ExpenseChart />
      <Separator className="mt-3" />
      <div className="w-full flex justify-between items-center">
        <h1>Recent Cut Off</h1>
        <CalendarPicker />
      </div>
    </div>
  );
}
