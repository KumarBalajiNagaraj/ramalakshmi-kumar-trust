import type React from "react"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: "Ramalakshmi Kumar Trust — Nurturing Potential. Honoring a Legacy.",
  description:
    "The Ramalakshmi Kumar Trust funds education for talented underprivileged students and community welfare. Founded by Kumar B, Retired Educator (SSN MBA Department) and Managing Trustee.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
