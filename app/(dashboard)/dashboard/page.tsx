"use client"

import { useAppSelector } from "@/app/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import PatientDashboardPage from "@/pages/dashboard/PatientDashboardPage"
import DoctorDashboardPage from "@/pages/dashboard/DoctorDashboardPage"
import ReceptionistDashboardPage from "@/pages/dashboard/ReceptionistDashboardPage"
import AdminDashboardPage from "@/pages/dashboard/AdminDashboardPage"

export default function DashboardPage() {
  const user = useAppSelector((state) => state.auth.user)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  switch (user.role) {
    case "patient":
      return <PatientDashboardPage />
    case "doctor":
      return <DoctorDashboardPage />
    case "receptionist":
      return <ReceptionistDashboardPage />
    case "admin":
      return <AdminDashboardPage />
    default:
      return <PatientDashboardPage />
  }
}
