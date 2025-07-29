"use client"

import { useState, useEffect } from "react"
import VendingMachineApp from "@/app/page"

interface VendingMachineDemoProps {
  initialUser?: any | null
  initialFridgeScanned?: boolean
  initialShowQrScan?: boolean
  initialShowPaymentSelection?: boolean
}

export function VendingMachineDemo({
  initialUser = null,
  initialFridgeScanned = false,
  initialShowQrScan = false,
  initialShowPaymentSelection = false,
}: VendingMachineDemoProps) {
  const [user, setUser] = useState(initialUser)
  const [fridgeScanned, setFridgeScanned] = useState(initialFridgeScanned)
  const [showQrScan, setShowQrScan] = useState(initialShowQrScan)
  const [showPaymentSelection, setShowPaymentSelection] = useState(initialShowPaymentSelection)

  // Override the main app's state management
  useEffect(() => {
    // This is a demo component, so we'll use a different approach
    // We'll need to modify the main app to accept these props
  }, [initialUser, initialFridgeScanned, initialShowQrScan, initialShowPaymentSelection])

  return <VendingMachineApp />
} 