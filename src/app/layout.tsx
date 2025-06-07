import type { Metadata } from "next"

import "@/styles/globals.css"
import { geistMono, geistSans } from "@/features/ui/fonts"

export const metadata: Metadata = {
  title: "Bun + Hono + Next",
  description: "god stack",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <main className="container m-auto">{children}</main>
      </body>
    </html>
  )
}
