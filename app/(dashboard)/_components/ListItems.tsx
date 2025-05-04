import React from "react"
import { arrayMove } from "@dnd-kit/sortable"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sortable,
  SortableGrid,
  SortableItem,
  SortableItemTrigger,
  SortableOverlay,
} from "@/components/ui/sortable"
import ItemBadge from "@/components/features/badge"


type ItemProps = {
  title: string
  description?: string; 
  type: string; 
  price: string;
  category: string;
}
const Item = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> &  ItemProps 
>(({ title, description, price, category, type, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group flex cursor-grab items-stretch overflow-hidden rounded-md border bg-card text-card-foreground shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-pressed:z-10 aria-pressed:cursor-grabbing aria-pressed:shadow-lg",
      className
    )}
    {...props}
  >
    <div className="flex cursor-grab items-center justify-center bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground aria-pressed:cursor-grabbing">
      {/* <GripVertical className="size-4" /> */}
    </div>
    <div className="flex w-full justify-between items-center gap-2 px-3 py-2 text-sm">
        <div className="flex flex-col gap-1">
          <div className="flex-col">
            <h2 className="line-clamp-1 text-[1.1rem] font-medium">{title}</h2>
            <ItemBadge badge={category} type={type}/>
          </div>

          <div className="line-clamp-1 text-xs text-muted-foreground">
            {description}
          </div>
        </div>
        <h2 className=" font-extrabold text-[1.3rem]">{price}</h2>
    </div>
  </div>
))
Item.displayName = "Item"

export function SortableDemo() {
  const [items, setItems] = React.useState(
    [
      {
        id: "item-1",
        title: "Jollibee",
        category: "Food",
        type: "expense",
        description: "Monthly apartment or room rental payment",
        price: "₱20,000",
      },
      {
        id: "item-2",
        title: "Coke",
        category: "Drinks",
        type: "expense",
        description: "Weekly food shopping for home-cooked meals and pantry staples",
        price: "₱4,900",
      },
      {
        id: "item-3",
        title: "Ejeep",
        category: "Fare",
        type: "expense",
        description: "Monthly bills such as electricity, water, internet, and trash service",
        price: "₱7,000",
      },
      {
        id: "item-4",
        title: "Salary",
        category: "salary",
        type: "income",
        description: "Monthly bills such as electricity, water, internet, and trash service",
        price: "₱9,240",
      },
      // {
      //   id: "item-4",
      //   title: "Transportation",
      //   description: "Commuting costs: public transit passes or fuel and car maintenance",
      //   price: "₱3,000",
      // },
      // {
      //   id: "item-5",
      //   title: "Entertainment",
      //   description: "Streaming subscriptions, dining out, movies, and event tickets",
      //   price: "₱3,000",
      // },
    ]
    
)

  return (
    <Sortable
      onDragEnd={(event) => {
        const { active, over } = event

        if (over && active.id !== over.id) {
          const oldIndex = items.findIndex((item) => item.id === active.id)
          const newIndex = items.findIndex((item) => item.id === over.id)

          setItems((prevItems) => arrayMove(prevItems, oldIndex, newIndex))
        }
      }}
    >
      <SortableGrid items={items} className="grid grid-cols-1  gap-2">
        {items.map((item) => (
          <SortableItem asChild key={item.id} id={item.id}>
            <SortableItemTrigger asChild>
              <Item
                title={item.title}
                description={item.description}
                price={item.price}
                category={item.category}
                type={item.type}
                className="aria-pressed:opacity-50 py-4 aria-pressed:shadow-sm"
              />
            </SortableItemTrigger>
          </SortableItem>
        ))}
      </SortableGrid>
      <SortableOverlay>
        {(activeId) => {
          const activeItem = items.find((item) => item.id === activeId)
          if (!activeItem) {
            return null
          }

          return (
            <Item
              title={activeItem.title}
              description={activeItem.description}
              price={activeItem.price}
              category={activeItem.category}
              type={activeItem.type}
              className="cursor-grabbing shadow-lg "
            />
          )
        }}
      </SortableOverlay>
    </Sortable>
  )
}
