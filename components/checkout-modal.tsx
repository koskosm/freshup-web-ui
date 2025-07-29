"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import type { Order } from "@/lib/types"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  order: Order | null
  depositAmount?: number
}

export function CheckoutModal({ isOpen, onClose, order, depositAmount = 200 }: CheckoutModalProps) {
  if (!order) return null

  const refundAmount = depositAmount - order.total

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div
              className="w-20 h-20 rounded-full border-4 border-cyan-300 flex items-center justify-center"
              style={{ backgroundColor: "#FCBB34" }}
            >
              <CheckCircle className="w-8 h-8" style={{ color: "#B8860B" }} />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl font-bold">Checkout Complete</DialogTitle>
          <p className="text-center text-muted-foreground">Thank you for using our services.</p>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-sm">Items Purchased:</h4>
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  {item.name} x {item.quantity}
                </span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t pt-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Security Deposit:</span>
              <span>${depositAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Items Total:</span>
              <span>-${order.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
              <span>{refundAmount > 0 ? "Refund Amount:" : "Additional Charge:"}</span>
              <span className={refundAmount > 0 ? "text-green-600" : "text-red-600"}>
                ${Math.abs(refundAmount).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Order no. #{order.orderNumber}
            <br />
            {refundAmount > 0
              ? "Refund will be processed to your original payment method within 3-5 business days."
              : "Additional amount has been charged to your payment method."}
          </div>

          <Button
            onClick={onClose}
            className="w-full text-white"
            style={{ backgroundColor: "#FCBB34" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6A82D")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCBB34")}
          >
            Done
          </Button>

          <p className="text-center text-cyan-500 text-sm">Contact Customer Service 2888 8888</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
