"use client";

import { useState } from "react";
import { Lock, Sparkles, CheckCircle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/translations";
import Image from "next/image";

interface BottomActionSheetProps {
  user: any | null;
  language: "en" | "zh";
  onUnlockDoor: () => void;
  onShowAuthModal: () => void;
  onPaymentComplete: () => void;
  onClose: () => void;
  disabled?: boolean;
  // New states
  showPaymentSelection?: boolean;
  showPaymentProcessing?: boolean;
  showUnlockProcessing?: boolean;
  showCheckout?: boolean;
  showQrScan?: boolean;
  unlockStage?: "unlocking" | "calculating" | "complete";
  amount?: number;
  order?: any | null;
}

export function BottomActionSheet({
  user,
  language,
  onUnlockDoor,
  onShowAuthModal,
  onPaymentComplete,
  onClose,
  disabled = false,
  showPaymentSelection = false,
  showPaymentProcessing = false,
  showUnlockProcessing = false,
  showCheckout = false,
  showQrScan = false,
  unlockStage = "unlocking",
  amount = 200,
  order = null,
}: BottomActionSheetProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [showGateway, setShowGateway] = useState(false);

  const handlePayment = async (methodId: string) => {
    setSelectedMethod(methodId);
    setShowGateway(true);
  };

  const handleCloseFromGateway = () => {
    setShowGateway(false);
    setSelectedMethod(null);
    onClose();
  };

  // Payment Gateway Screen
  if (showGateway) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="max-w-[640px] mx-auto relative">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b mb-4">
            <div className="w-6"></div>
            <Image src="/images/freshup-logo.png" alt="FreshUp" width={120} height={40} className="h-6 w-auto" />
            <div className="w-6"></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center space-y-8 px-4 py-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">{t("todoPaymentGateway", language)}</h1>
              <p className="text-gray-600">{t("paymentIntegrationSoon", language)}</p>
              <div className="w-16 h-1 bg-gray-300 rounded mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Payment Processing Screen
  if (showPaymentProcessing) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 bottom-full">
            <div className="relative">
              {/* Pulsating blue border behind */}
              <div
                className="absolute inset-0 w-16 h-16 rounded-full bg-cyan-300 border-4 border-cyan-300 animate-pulse"
                style={{
                  animation: "pulse-scale 2s infinite",
                  transformOrigin: "center",
                }}
              />
              {/* Main lock icon circle */}
              <div
                className="w-16 h-16 rounded-full border-4 border-cyan-300 flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#FCBB34" }}
              >
                <div
                  className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin"
                  style={{ borderColor: "#B8860B", borderTopColor: "transparent" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Add the keyframe animation styles */}
          <style jsx>{`
            @keyframes pulse-scale {
              0%, 100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.2);
                opacity: 0.7;
              }
            }
          `}</style>
          
          <div className="flex flex-col items-center justify-center space-y-3 pt-8">
            <div className="text-center">
              <h2 className="text-lg font-bold">{t("processingPayment", language)}</h2>
              <p className="text-sm text-muted-foreground max-w-md">
                {t("processingDeposit", language, { amount: amount.toFixed(2) })}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Unlock Processing Screen
  if (showUnlockProcessing) {
    const getUnlockContent = () => {
      switch (unlockStage) {
        case "unlocking":
          return {
            icon: <Lock className="w-6 h-6" style={{ color: "#B8860B" }} />,
            title: t("unlockingDoor", language),
            subtitle: t("smartSensors", language),
            showPulse: true,
          };
        case "calculating":
          return {
            icon: <Sparkles className="w-6 h-6" style={{ color: "#B8860B" }} />,
            title: t("processingPaymentCalc", language),
            subtitle: t("calculatingTotal", language),
            showPulse: true,
          };
        case "complete":
          return {
            icon: <CheckCircle className="w-6 h-6" style={{ color: "#B8860B" }} />,
            title: t("paymentComplete", language),
            subtitle: t("thankYou", language),
            showPulse: false,
          };
        default:
          return {
            icon: <Lock className="w-6 h-6" style={{ color: "#B8860B" }} />,
            title: "Processing...",
            subtitle: "",
            showPulse: true,
          };
      }
    };

    const content = getUnlockContent();

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 bottom-full">
            <div className="relative">
              {/* Pulsating blue border behind - only for non-complete states */}
              {content.showPulse && (
                <div
                  className="absolute inset-0 w-16 h-16 rounded-full bg-cyan-300 border-4 border-cyan-300 animate-pulse"
                  style={{
                    animation: "pulse-scale 2s infinite",
                    transformOrigin: "center",
                  }}
                />
              )}
              {/* Main lock icon circle */}
              <div
                className="w-16 h-16 rounded-full border-4 border-cyan-300 flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#FCBB34" }}
              >
                {content.icon}
              </div>
            </div>
          </div>

          {/* Add the keyframe animation styles */}
          <style jsx>{`
            @keyframes pulse-scale {
              0%, 100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.2);
                opacity: 0.7;
              }
            }
          `}</style>
          
          <div className="flex flex-col items-center justify-center space-y-3 pt-8">
            <div className="text-center">
              <h2 className="text-lg font-bold">{content.title}</h2>
              <p className="text-sm text-muted-foreground max-w-md whitespace-pre-line">{content.subtitle}</p>
              {unlockStage === "calculating" && (
                <p className="text-cyan-500 text-sm mt-2">{t("contactSupport", language)}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Checkout Screen
  if (showCheckout && order) {
    const refundAmount = amount - order.total;

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 bottom-full">
            <div className="relative">
              {/* Main check icon circle */}
              <div
                className="w-16 h-16 rounded-full border-4 border-cyan-300 flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#FCBB34" }}
              >
                <CheckCircle className="w-6 h-6" style={{ color: "#B8860B" }} />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-3 pt-8">
            <div className="text-center">
              <h2 className="text-lg font-bold">{t("checkoutComplete", language)}</h2>
              <p className="text-sm text-muted-foreground max-w-md">{t("thankYouServices", language)}</p>
            </div>

            <div className="w-full max-w-xs space-y-4">
              {/* Items Purchased */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-sm">{t("itemsPurchased", language)}</h4>
                {order.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Payment Summary */}
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{t("securityDeposit", language)}</span>
                  <span>${amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{t("itemsTotal", language)}</span>
                  <span>-${order.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                  <span>{refundAmount > 0 ? t("refundAmount", language) : t("additionalCharge", language)}</span>
                  <span className={refundAmount > 0 ? "text-green-600" : "text-red-600"}>
                    ${Math.abs(refundAmount).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Order Info */}
              <div className="text-center text-sm text-muted-foreground">
                {t("orderNo", language, { orderNumber: order.orderNumber })}
                <br />
                {refundAmount > 0
                  ? t("refundProcessed", language)
                  : t("additionalCharged", language)}
              </div>

              {/* Done Button */}
              <Button
                onClick={onClose}
                className="w-full max-w-xs text-white"
                style={{ backgroundColor: "#FCBB34" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6A82D")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCBB34")}
              >
                {t("done", language)}
              </Button>

              {/* Contact Info */}
              <p className="text-center text-cyan-500 text-sm">{t("contactSupport", language)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // QR Scan Screen
  if (showQrScan) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 bottom-full">
            <div className="relative">
              {/* Pulsating blue border behind */}
              <div
                className="absolute inset-0 w-16 h-16 rounded-full bg-cyan-300 border-4 border-cyan-300 animate-pulse"
                style={{
                  animation: "pulse-scale 2s infinite",
                  transformOrigin: "center",
                }}
              />
              {/* Main QR icon circle */}
              <div
                className="w-16 h-16 rounded-full border-4 border-cyan-300 flex items-center justify-center relative z-10 cursor-pointer"
                style={{ backgroundColor: "#FCBB34" }}
                onClick={() => {
                  // Launch QR scanner
                  // For demo purposes, we'll just trigger the unlock flow
                  // In a real app, this would open a QR scanner
                  onUnlockDoor();
                }}
              >
                <QrCode className="w-6 h-6" style={{ color: "#B8860B" }} />
              </div>
            </div>
          </div>

          {/* Add the keyframe animation styles */}
          <style jsx>{`
            @keyframes pulse-scale {
              0%, 100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.2);
                opacity: 0.7;
              }
            }
          `}</style>
          
          <div className="flex flex-col items-center justify-center space-y-3 pt-8">
            <div className="text-center">
              <h2 className="text-lg font-bold">{t("scanQrTitle", language)}</h2>
              <p className="text-sm text-muted-foreground max-w-md">
                {t("scanQrDescription", language)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Payment Method Selection Screen
  if (showPaymentSelection) {
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
            <div className="flex flex-col items-center w-full space-y-3">
              {/* Apple Pay */}
              <Button
                variant="outline"
                className="w-full max-w-xs bg-black border-2 border-black hover:bg-gray-900 text-white"
                onClick={() => handlePayment("applepay")}
              >
                <Image src="/images/paymentlogo-applepay.png" alt="Apple Pay" width={200} height={40} className="h-5 w-auto" />
              </Button>
              
              {/* Alipay */}
              <Button
                variant="outline"
                className="w-full max-w-xs bg-white border-2 border-gray-200 hover:bg-gray-50"
                onClick={() => handlePayment("alipay")}
              >
                <Image src="/images/alipay-logo.png" alt="Alipay" width={200} height={40} className="h-5 w-auto" />
              </Button>
              
              {/* Credit Card */}
              <Button
                variant="outline"
                className="w-full max-w-xs bg-white border-2 border-gray-200 hover:bg-gray-50"
                onClick={() => handlePayment("creditcard")}
              >
                <Image src="/images/paymentlogo-cc.png" alt="Credit Card" width={200} height={40} className="h-8 w-auto" />
              </Button>
              
              {/* Octopus */}
              <Button
                variant="outline"
                className="w-full max-w-xs bg-white border-2 border-gray-200 hover:bg-gray-50"
                onClick={() => handlePayment("octopus")}
              >
                <Image src="/images/paymentlogo-octopus.png" alt="Octopus" width={200} height={40} className="h-8 w-auto" />
              </Button>
              
              {/* PayMe */}
              <Button
                variant="outline"
                className="w-full max-w-xs bg-white border-2 border-gray-200 hover:bg-gray-50"
                onClick={() => handlePayment("payme")}
              >
                <Image src="/images/paymentlogo-payme.png" alt="PayMe" width={200} height={40} className="h-5 w-auto" />
              </Button>
            </div>

            {/* Cancel Link */}
            <button onClick={onClose} className="text-gray-500 text-sm underline">
              {t("cancel", language)}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default State - Logged in/out actions
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 bottom-full">
          <div className="relative">
            {/* Pulsating blue border behind */}
            <div
              className="absolute inset-0 w-16 h-16 rounded-full bg-cyan-300 border-4 border-cyan-300 animate-pulse"
              style={{
                animation: "pulse-scale 2s infinite",
                transformOrigin: "center",
              }}
            />
            {/* Main lock icon circle */}
            <div
              className="w-16 h-16 rounded-full border-4 border-cyan-300 flex items-center justify-center relative z-10"
              style={{ backgroundColor: "#FCBB34" }}
            >
              <Lock className="w-6 h-6" style={{ color: "#B8860B" }} />
            </div>
          </div>
        </div>

        {/* Add the keyframe animation styles */}
        <style jsx>{`
          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.7;
            }
          }
        `}</style>
        
        <div className="flex flex-col items-center justify-center space-y-3 pt-8">
          <div className="text-center">
            <h2 className="text-lg font-bold">
              {user ? t("payDepositUnlock", language) : t("registerLoginUnlock", language)}
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              {user ? t("securityDepositRequired", language) : t("signupLoginStart", language)}
            </p>
          </div>
          {user ? (
            <Button
              onClick={onUnlockDoor}
              className="w-full max-w-xs text-white"
              style={{ backgroundColor: "#FCBB34" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6A82D")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCBB34")}
              disabled={disabled}
            >
              <Lock className="w-4 h-4 mr-2" />
              {t("payUnlock", language)}
            </Button>
          ) : (
            <Button
              onClick={onShowAuthModal}
              className="w-full max-w-xs text-white"
              style={{ backgroundColor: "#FCBB34" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6A82D")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCBB34")}
            >
              {t("signupLogin", language)}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 