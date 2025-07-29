"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import Image from "next/image"
import { t, type Language } from "@/lib/translations"

interface PaymentModalProps {
  isOpen: boolean
  language: Language
  onClose: () => void
  onPaymentComplete: () => void
  amount: number
}

export function PaymentModal({ isOpen, language, onClose, onPaymentComplete, amount }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [showGateway, setShowGateway] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async (methodId: string) => {
    setSelectedMethod(methodId)
    setShowGateway(true)
    // Remove the setTimeout that automatically proceeds to processing
  }

  const handleCloseFromGateway = () => {
    setShowGateway(false)
    setSelectedMethod(null)
    onClose()
  }

  // Payment Gateway Screen
  if (showGateway) {
    return (
      <Dialog open={isOpen} onOpenChange={handleCloseFromGateway}>
        <DialogContent className="sm:max-w-md p-0 bg-white">
          <div className="flex flex-col h-[600px]">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <div className="w-6"></div> {/* Spacer for centering */}
              <Image src="/images/freshup-logo.png" alt="FreshUp" width={120} height={40} className="h-6 w-auto" />
              <div className="w-6"></div> {/* Spacer for centering */}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-4">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">{t("todoPaymentGateway", language)}</h1>
                <p className="text-gray-600">{t("paymentIntegrationSoon", language)}</p>
                <div className="w-16 h-1 bg-gray-300 rounded mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Processing Screen
  if (isProcessing) {
    return (
      <Dialog open={isOpen} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center space-y-6 text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FCE4B6" }}
            >
              <div
                className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
                style={{ borderColor: "#FCBB34", borderTopColor: "transparent" }}
              ></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{t("processingPayment", language)}</h3>
              <p className="text-sm text-muted-foreground">
                {t("processingDeposit", language, { amount: amount.toFixed(2) })}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Payment Method Selection Screen - Bottom Action Bar
  if (isOpen) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="max-w-[640px] mx-auto relative">
          {/* Lock Icon positioned above the panel */}
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 bottom-full">
            <div
              className="w-16 h-16 rounded-full border-4 border-cyan-300 flex items-center justify-center"
              style={{ backgroundColor: "#FCBB34" }}
            >
              <Lock className="w-6 h-6" style={{ color: "#B8860B" }} />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6 py-4 pt-8">
            {/* Title and Description */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold">{t("choosePaymentMethod", language)}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{t("depositHold", language)}</p>
            </div>

            {/* Payment Methods */}
            <div className="w-full space-y-3">
              {/* Alipay - Only Payment Method */}
              <Button
                variant="outline"
                className="w-full h-16 bg-white border-2 border-gray-200 hover:bg-gray-50 rounded-2xl"
                onClick={() => handlePayment("alipay")}
              >
                <Image src="/images/alipay-logo.png" alt="Alipay" width={200} height={40} className="h-8 w-auto" />
              </Button>
            </div>

            {/* Cancel Link */}
            <button onClick={onClose} className="text-gray-500 text-sm underline">
              {t("cancel", language)}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
