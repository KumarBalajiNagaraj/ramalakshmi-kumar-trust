"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-18 items-center justify-between py-3">

        {/* Logo + Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/parrot_logo.png"
              alt="Ramalakshmi Kumar Trust — Parrot Logo"
              width={44}
              height={44}
              className="h-11 w-auto"
              priority
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-playfair text-base font-semibold tracking-wide text-[#181818]">
                Ramalakshmi Kumar Trust
              </span>
              <span className="text-[10px] text-[#858483] tracking-widest uppercase">
                Reg. No. BK-4/184/2025
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="block md:hidden p-2 rounded-md hover:bg-[#FFF9EF] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Smt. Ramalakshmi" },
            { href: "/founders-letter", label: "Founder's Letter" },
            { href: "/legacy", label: "Legacy" },
            { href: "/contact-us", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2 text-sm text-[#434343] hover:text-[#181818] hover:bg-[#FFF9EF] rounded-md transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-[#C9A84C] text-[#C9A84C] hover:bg-[#FFF9EF] hover:text-[#C9A84C] bg-transparent"
            >
              <Link href="/support">Support the Trust</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-[#C9A84C] hover:bg-[#b89440] text-white border-0"
            >
              <Link href="/contact">Apply for Scholarship</Link>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white">
          <nav className="flex flex-col p-4 gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Smt. Ramalakshmi" },
              { href: "/founders-letter", label: "Founder's Letter" },
              { href: "/legacy", label: "Legacy" },
              { href: "/contact-us", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2.5 text-sm text-[#434343] hover:text-[#181818] hover:bg-[#FFF9EF] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-[#C9A84C] text-[#C9A84C] bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/support">Support the Trust</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-[#C9A84C] hover:bg-[#b89440] text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contact">Apply for Scholarship</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
