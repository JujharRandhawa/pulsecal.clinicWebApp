"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RefillPrescription({ params }: { params: { id: string } }) {
  const router = useRouter()

  useEffect(() => {
    router.push(`/health/prescriptions/${params.id}`)
  }, [params.id, router])

  return null
}
