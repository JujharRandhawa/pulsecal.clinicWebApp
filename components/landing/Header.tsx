"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Stethoscope, User, Building2 } from "lucide-react"
import { AuthModal } from "./AuthModal"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const [selectedRole, setSelectedRole] = useState<"doctor" | "patient" | "receptionist">("patient")

  const handleAuth = (role: "doctor" | "patient" | "receptionist", mode: "login" | "signup") => {
    setSelectedRole(role)
    setAuthMode(mode)
    setAuthModalOpen(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">P</span>
            </div>
            <span className="text-2xl font-bold text-foreground">PulseCal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Solutions
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleAuth("doctor", "login")}
              className="gap-2"
            >
              <Stethoscope className="h-4 w-4" />
              Doctor
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleAuth("patient", "login")}
              className="gap-2"
            >
              <User className="h-4 w-4" />
              Patient
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleAuth("receptionist", "login")}
              className="gap-2"
            >
              <Building2 className="h-4 w-4" />
              Receptionist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#features" className="text-sm font-medium text-muted-foreground">
                Features
              </Link>
              <Link href="#solutions" className="text-sm font-medium text-muted-foreground">
                Solutions
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground">
                Pricing
              </Link>
              <Link href="#about" className="text-sm font-medium text-muted-foreground">
                About
              </Link>
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                <Button
                  variant="outline"
                  onClick={() => handleAuth("doctor", "login")}
                  className="w-full justify-start gap-2"
                >
                  <Stethoscope className="h-4 w-4" />
                  Doctor Login / Signup
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAuth("patient", "login")}
                  className="w-full justify-start gap-2"
                >
                  <User className="h-4 w-4" />
                  Patient Login / Signup
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAuth("receptionist", "login")}
                  className="w-full justify-start gap-2"
                >
                  <Building2 className="h-4 w-4" />
                  Receptionist Login / Signup
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={(mode) => setAuthMode(mode)}
        role={selectedRole}
      />
    </>
  )
}
