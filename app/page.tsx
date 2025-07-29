"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { AuthModal } from "@/components/auth-modal"
import { PaymentModal } from "@/components/payment-modal"
import { UnlockModal } from "@/components/unlock-modal"
import { CheckoutModal } from "@/components/checkout-modal"
import { ProfilePage } from "@/components/profile-page"
import { mockProducts } from "@/lib/mock-data"
import type { CartItem, User, Order } from "@/lib/types"
import { Lock } from "lucide-react"
import { DetectionModal } from "@/components/detection-modal"
import type { VendingSession, DetectedItem } from "@/lib/types"
import { t, type Language } from "@/lib/translations"

export default function VendingMachineApp() {
  const [user, setUser] = useState<User | null>(null)
  const [language, setLanguage] = useState<Language>("en")
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showDetectionModal, setShowDetectionModal] = useState(false)
  const [showUnlockModal, setShowUnlockModal] = useState(false)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)
  const [showProfilePage, setShowProfilePage] = useState(false)
  const [unlockStage, setUnlockStage] = useState<"unlocking" | "calculating" | "complete">("unlocking")
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null)
  const [vendingSession, setVendingSession] = useState<VendingSession | null>(null)
  const [depositPaid, setDepositPaid] = useState(false)

  const DEPOSIT_AMOUNT = 200

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  const handleLogin = (phone: string) => {
    setUser({
      id: "1",
      name: "Frank",
      phone,
      isAuthenticated: true,
    })
    // Automatically proceed to payment selection after login
    setShowAuthModal(false)
    setShowPaymentModal(true)
  }

  const handleLogout = () => {
    setUser(null)
    setVendingSession(null)
    setDepositPaid(false)
  }

  const handleProfileNavigation = () => {
    setShowProfilePage(true)
  }

  const handleBackFromProfile = () => {
    setShowProfilePage(false)
  }

  const handleUnlockDoor = () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }

    // Show payment modal first
    setShowPaymentModal(true)
  }

  const handlePaymentComplete = () => {
    setShowPaymentModal(false)
    setDepositPaid(true)

    // Start vending session after payment
    const session: VendingSession = {
      id: Date.now().toString(),
      userId: user!.id,
      startTime: new Date(),
      detectedItems: [],
      status: "active",
    }
    setVendingSession(session)

    setShowUnlockModal(true)
    setUnlockStage("unlocking")

    // Simulate door unlocking
    setTimeout(() => {
      setShowUnlockModal(false)
      setShowDetectionModal(true)
    }, 2000)
  }

  const handleDetectionComplete = (detectedItems: DetectedItem[]) => {
    setShowDetectionModal(false)
    setShowUnlockModal(true)
    setUnlockStage("calculating")

    // Convert detected items to cart items for order
    const cartItems: CartItem[] = detectedItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: "/placeholder.svg",
      category: "Soda",
    }))

    const total = detectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    setTimeout(() => {
      const order: Order = {
        id: Date.now().toString(),
        items: cartItems,
        total,
        status: "completed",
        orderNumber:
          "1249" +
          Math.floor(Math.random() * 1000)
            .toString()
            .padStart(3, "0"),
      }

      setCurrentOrder(order)
      setUnlockStage("complete")

      setTimeout(() => {
        setShowUnlockModal(false)
        setShowCheckoutModal(true)
        setVendingSession(null)
        setDepositPaid(false) // Reset for next transaction
      }, 2000)
    }, 3000)
  }

  // Show profile page if user navigated to it
  if (showProfilePage && user) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#3DC5F1" }}>
        <div className="max-w-[640px] mx-auto bg-gray-50 min-h-screen">
          <ProfilePage
            user={user}
            language={language}
            onLanguageToggle={toggleLanguage}
            onBack={handleBackFromProfile}
            onLogout={handleLogout}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3DC5F1" }}>
      <div className="max-w-[640px] mx-auto bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between">
            <Image src="/images/freshup-logo.png" alt="FreshUp" width={120} height={40} className="h-8 w-auto" />
            <button onClick={toggleLanguage} className="text-gray-600 text-sm font-medium">
              {t("language", language)}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 pb-48">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">
              {user ? t("welcomeUser", language, { name: user.name }) : t("welcome", language)}
            </h1>
            {user ? (
              <Button variant="outline" onClick={handleProfileNavigation}>
                {t("profile", language)}
              </Button>
            ) : (
              <Button variant="outline" onClick={() => setShowAuthModal(true)}>
                {t("signupLogin", language)}
              </Button>
            )}
          </div>

          {/* Hero Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/hero-drinks-new.png"
              alt="Fresh tropical beverages on beach"
              width={800}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Products Grid - Display Only */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        {/* Sticky Bottom Action */}
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
                  onClick={handleUnlockDoor}
                  className="w-full max-w-xs text-white"
                  style={{ backgroundColor: "#FCBB34" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6A82D")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCBB34")}
                  disabled={showDetectionModal || showUnlockModal || showPaymentModal}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  {t("payUnlock", language)}
                </Button>
              ) : (
                <Button
                  onClick={() => setShowAuthModal(true)}
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

        {/* Modals */}
        <AuthModal
          isOpen={showAuthModal}
          language={language}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />

        <PaymentModal
          isOpen={showPaymentModal}
          language={language}
          onClose={() => setShowPaymentModal(false)}
          onPaymentComplete={handlePaymentComplete}
          amount={DEPOSIT_AMOUNT}
        />

        <DetectionModal
          isOpen={showDetectionModal}
          language={language}
          onClose={() => setShowDetectionModal(false)}
          onDetectionComplete={handleDetectionComplete}
        />

        <UnlockModal
          isOpen={showUnlockModal}
          language={language}
          onClose={() => setShowUnlockModal(false)}
          stage={unlockStage}
        />

        <CheckoutModal
          isOpen={showCheckoutModal}
          language={language}
          onClose={() => setShowCheckoutModal(false)}
          order={currentOrder}
          depositAmount={DEPOSIT_AMOUNT}
        />
      </div>
    </div>
  )
}
