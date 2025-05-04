import { DateProvider } from "@/context/DateContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DateProvider>{children}</DateProvider>
}