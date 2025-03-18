"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils"; // Ensure utils.js exists for `cn` function

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = ({ className, ...props }) => (
  <DropdownMenuPrimitive.Content
    className={cn("bg-white dark:bg-gray-800 rounded-md shadow-md p-2", className)}
    {...props}
  />
);
export const DropdownMenuItem = ({ className, ...props }) => (
  <DropdownMenuPrimitive.Item
    className={cn("px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700", className)}
    {...props}
  />
);
