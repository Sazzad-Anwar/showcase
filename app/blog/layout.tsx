import React from "react"

import { fontSpartan } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <main className={cn(fontSpartan.className)}>{children}</main>
}
