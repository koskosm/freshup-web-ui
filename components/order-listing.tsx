"use client"

import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import type { Order } from "@/lib/types"
import { useI18n } from "@/hooks/use-i18n"

interface OrderListingProps {
  orders: Order[]
  language: "en" | "zh"
  onBack: () => void
  onOrderClick: (order: Order) => void
}

export function OrderListing({ orders, language, onBack, onOrderClick }: OrderListingProps) {
  const { t } = useI18n();
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "paid":
        return "bg-blue-500"
      case "checking_out":
        return "bg-yellow-500"
      case "outstanding":
        return "bg-red-500"
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
          <h1 className="text-lg font-bold">{t("myOrders")}</h1>
        </div>
      </div>

      {/* Order List */}
      <div className="p-4 space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onOrderClick(order)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    {order.location}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-gray-900">
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
        ))}

        {orders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
                         <p className="text-gray-500 text-sm">{t("noOrdersFound")}</p>
          </div>
        )}
      </div>
    </div>
  )
} 