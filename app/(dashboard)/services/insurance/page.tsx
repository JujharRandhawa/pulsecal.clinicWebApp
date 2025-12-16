"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Plus } from "lucide-react"

export default function InsurancePage() {
  const [insuranceCards] = useState([
    {
      id: "1",
      provider: "Blue Cross Blue Shield",
      policyNumber: "BCBS-123456789",
      groupNumber: "GRP-987654",
      coverage: "Full Coverage",
      validUntil: "2025-12-31",
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Insurance Management</h1>
          <p className="text-muted-foreground mt-2">Manage your insurance policies and claims</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Insurance
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insuranceCards.map((insurance) => (
          <Card key={insurance.id} className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{insurance.provider}</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-muted-foreground">Policy:</span> {insurance.policyNumber}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Group:</span> {insurance.groupNumber}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Coverage:</span> {insurance.coverage}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Valid Until:</span> {insurance.validUntil}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Claims</h3>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
        <div className="text-center py-12 text-muted-foreground">
          <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No claims submitted yet</p>
        </div>
      </Card>
    </div>
  )
}
