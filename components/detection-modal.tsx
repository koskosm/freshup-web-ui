"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, Package, AlertCircle } from "lucide-react"
import type { DetectedItem } from "@/lib/types"

interface DetectionModalProps {
  isOpen: boolean
  onClose: () => void
  onDetectionComplete: (items: DetectedItem[]) => void
}

export function DetectionModal({ isOpen, onClose, onDetectionComplete }: DetectionModalProps) {
  const [stage, setStage] = useState<"monitoring" | "detected" | "confirm">("monitoring")
  const [detectedItems, setDetectedItems] = useState<DetectedItem[]>([])
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (isOpen) {
      setStage("monitoring")
      setDetectedItems([])
      setCountdown(10)

      // Simulate item detection after 3 seconds
      const detectionTimer = setTimeout(() => {
        const simulatedItems: DetectedItem[] = [
          {
            id: "2",
            name: "Coca-Cola Zero Sugar",
            price: 12.0,
            quantity: 1,
            detectedAt: new Date(),
          },
          {
            id: "8",
            name: "Fanta Grape",
            price: 12.0,
            quantity: 1,
            detectedAt: new Date(),
          },
        ]
        setDetectedItems(simulatedItems)
        setStage("detected")
      }, 3000)

      return () => clearTimeout(detectionTimer)
    }
  }, [isOpen])

  useEffect(() => {
    if (stage === "detected" && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (stage === "detected" && countdown === 0) {
      setStage("confirm")
    }
  }, [stage, countdown])

  const handleConfirm = () => {
    onDetectionComplete(detectedItems)
    onClose()
  }

  const handleCloseDoor = () => {
    setStage("confirm")
  }

  const total = detectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        {stage === "monitoring" && (
          <div className="flex flex-col items-center justify-center space-y-6 text-center py-8">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Door Unlocked</h2>
              <p className="text-muted-foreground">
                Take the items you want.
                <br />
                Our smart sensors will detect what you take.
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
            </div>
          </div>
        )}

        {stage === "detected" && (
          <div className="flex flex-col items-center justify-center space-y-6 text-center py-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FCE4B6" }}
            >
              <Package className="w-8 h-8" style={{ color: "#B8860B" }} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Items Detected!</h2>
              <p className="text-muted-foreground">We detected the following items:</p>
            </div>

            <div className="w-full space-y-2">
              {detectedItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-2 border-t font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Auto-closing door in {countdown} seconds</p>
              <Button onClick={handleCloseDoor} variant="outline" size="sm">
                Close Door Now
              </Button>
            </div>
          </div>
        )}

        {stage === "confirm" && (
          <div className="flex flex-col items-center justify-center space-y-6 text-center py-4">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Confirm Your Purchase</h2>
              <p className="text-muted-foreground">Please confirm the detected items are correct:</p>
            </div>

            <div className="w-full space-y-2">
              {detectedItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-2 border-t font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 text-white"
                style={{ backgroundColor: "#FCBB34" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6A82D")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCBB34")}
              >
                Confirm & Pay
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
