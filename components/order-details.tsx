"use client"

import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Order } from "@/lib/types"
import { useI18n } from "@/hooks/use-i18n"

interface OrderDetailsProps {
  order: Order
  language: "en" | "zh"
  onBack: () => void
  onPayOutstanding?: () => void
}

export function OrderDetails({ order, language, onBack, onPayOutstanding }: OrderDetailsProps) {
  const { t } = useI18n();
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "paid":
        return "bg-blue-500"
      case "checking_out":
        return "bg-yellow-500"
      case "outstanding":
        return "bg-orange-500"
      case "completed":
        return "bg-green-500"
      case "processing":
        return "bg-orange-500"
      case "pending":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "paid":
        return t("statusPaid")
      case "checking_out":
        return t("statusCheckingOut")
      case "outstanding":
        return t("statusOutstanding")
      case "completed":
        return t("statusCompleted")
      case "processing":
        return t("statusProcessing")
      case "pending":
        return t("statusPending")
      default:
        return status
    }
  }

  const formatAmount = (order: Order) => {
    if (order.depositAmount) {
      return `${t("deposited")} $${order.depositAmount.toFixed(2)}`
    }
    return `$${order.total.toFixed(2)}`
  }

  const renderActionButton = () => {
    switch (order.status) {
      case "outstanding":
        return (
                      <Button
              onClick={onPayOutstanding}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg mb-4"
            >
              {t("payOutstandingAmount")}
            </Button>
        )
      case "checking_out":
        return (
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">{t("calculatingTotalAmount")}</p>
            <p className="text-gray-600 mb-2">{t("checkoutInProcess")}</p>
            <p className="text-sm text-gray-500">
              {t("calculatingTotalDesc")}
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <Image src="/images/freshup-logo.png" alt="FreshUp" width={120} height={40} className="h-8 w-auto" />
                      <button onClick={() => {}} className="text-gray-600 text-sm font-medium">
              {t("language")}
            </button>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-bold">{t("orderInfo")}</h1>
        </div>
      </div>

      {/* Order Details */}
      <div className="p-4 space-y-4">
        {/* Order Summary Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-900">
                  {order.location}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-lg font-semibold text-gray-900">
                  {formatAmount(order)}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-sm text-gray-500">
                  {order.date}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">
                  #{order.orderNumber}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                  order.status
                )}`}
              >
                {getStatusText(order.status)}
              </span>
            </div>
          </div>
        </div>

        {/* Itemized List */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">{t("itemsPurchased")}</h3>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {item.name} x {item.quantity}
                </span>
                <span className="text-sm font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          
          {/* Total */}
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">{t("total")}</span>
              <span className="font-semibold text-gray-900">
                ${order.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Order Number */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{t("orderNo")}</span>
            <span className="text-sm font-medium text-gray-900">
              #{order.orderNumber}
            </span>
          </div>
        </div>

        {/* Action Button or Status Message */}
        {renderActionButton()}

        {/* Contact Information */}
        <div className="text-center">
          <button className="text-blue-600 text-sm hover:underline">
            {t("contactSupport")}
          </button>
        </div>
      </div>
    </div>
  )
} 