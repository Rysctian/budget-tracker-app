"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils" 

export default function ItemBadge({ badge, type }: { badge: string, type: string }) {
  return (
    <Badge variant="outline" className="gap-1.5">
      <span
        className={cn(
          "size-1.5 rounded-full",
          type === "income" ? "bg-green-500" : "bg-amber-500"
        )}
        aria-hidden="true"
      ></span>
      {badge}
    </Badge>
  )
}
