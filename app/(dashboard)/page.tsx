"use client";
import { PlusIcon } from "lucide-react";
import CalendarPicker from "@/components/features/calendar/calendar-picker";
import { ExpenseChart } from "@/components/features/charts/ExpenseChart";
import { Categories } from "./_components/Categories";
import { SortableDemo } from "./_components/ListItems";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import NewTransaction from "./_components/NewTransaction";

export default function DashboardRoute() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-between w-full py-3  ">
        <h1 className="font-bold text-gray-600 text-[1.3rem]">Current Balance</h1>
        <p className="text-[1.2rem] font-bold ">P 50,000</p>
        {/* <Categories />
        <CalendarPicker /> */}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <ExpenseChart />
        <ExpenseChart />
      </div>
      <Separator className="mt-4"/>
      <div className="flex flex-col">
        <div className="w-full flex p-2 items-center justify-between">
          <h1 className=" font-semibold text-[1.2rem]">Recent Transactions</h1>
          <NewTransaction
              trigger={
                <Button variant="outline" className="aspect-square max-sm:p-0 cursor-pointer">
                <PlusIcon className="opacity-60 sm:-ms-1 cursor-pointer" size={16} aria-hidden="true"/>
                <span className="max-sm:sr-only">Add new</span>
              </Button>
              }
            />
        </div>
        <SortableDemo />
      </div>
    </main>
  );
}
