"use client"

import { createContext, useContext, useState } from "react"
import { DateRange } from "react-day-picker"

type DateContextType = {
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}

const DateContext = createContext<DateContextType | undefined>(undefined)

export function DateProvider({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  )
}

export function useDateContext() {
  const ctx = useContext(DateContext)
  if (ctx === undefined) {
    throw new Error("useDateContext must be used within a DateProvider")
  }
  return ctx;
}