"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
const chartData = [
  { browser: "safari", expenses: 140, fill: "var(--color-safari)" },
]

const chartConfig = {
    expenses: {
    label: "Expenses",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ExpenseChart() {
  return (
    <div className="flex w-full pl-2 pr-2 rounded-2xl  justify-between max-h-[140px] border-[1px] border-neutral-300">

      <CardHeader className="items-left justify-center flex flex-col gap-2 w-[300px] ">
        <CardTitle>Income</CardTitle>
        <CardDescription>Weekly -  April 20-27</CardDescription>
      </CardHeader>
      <CardContent >
        <ChartContainer
          config={chartConfig}
          className="!aspect-square h-[120px]" 
        >
          <RadialBarChart
            data={chartData}
            endAngle={120}
            innerRadius={40}
            outerRadius={80}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[50, 74]}
            />
            <RadialBar dataKey="expenses" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {chartData[0].expenses.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Expense
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm"> */}
        {/* <div className="flex items-center gap-2 font-medium leading-none">
          Your Expenses up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        {/* <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      {/* </CardFooter> */}
    </div>
  )
}
