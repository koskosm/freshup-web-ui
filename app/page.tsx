"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductsGrid } from "@/components/products-grid"
import { HeroCarousel } from "@/components/hero-carousel"
import { AuthModal } from "@/components/auth-modal"
import { ProfilePage } from "@/components/profile-page"
import { mockProducts } from "@/lib/mock-data"
import type { CartItem, User, Order } from "@/lib/types"
import { BottomActionSheet } from "@/components/bottom-action-sheet"
import type { VendingSession } from "@/lib/types"
import { t, type Language } from "@/lib/translations"

export default function VendingMachineApp() {
  const [user, setUser] = useState<User | null>(null)
  const [language, setLanguage] = useState<Language>("en")
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showProfilePage, setShowProfilePage] = useState(false)
  const [unlockStage, setUnlockStage] = useState<"unlocking" | "calculating" | "complete">("unlocking")
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null)
  const [vendingSession, setVendingSession] = useState<VendingSession | null>(null)
  const [depositPaid, setDepositPaid] = useState(false)
  
  // BottomActionSheet states
  const [showPaymentSelection, setShowPaymentSelection] = useState(false)
  const [showPaymentProcessing, setShowPaymentProcessing] = useState(false)
  const [showUnlockProcessing, setShowUnlockProcessing] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [showQrScan, setShowQrScan] = useState(true)
  const [fridgeScanned, setFridgeScanned] = useState(false)

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
    // After login, proceed to payment selection since fridge was already scanned
    setShowAuthModal(false)
    setShowPaymentSelection(true)
  }

  const handleLogout = () => {
    setUser(null)
    setVendingSession(null)
    setDepositPaid(false)
    setFridgeScanned(false)
    setShowQrScan(true)
    setShowPaymentSelection(false)
    setShowPaymentProcessing(false)
    setShowUnlockProcessing(false)
    setShowCheckout(false)
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

    // Show payment selection first
    setShowPaymentSelection(true)
  }

  const handleFridgeScanned = () => {
    setFridgeScanned(true)
    setShowQrScan(false)
    
    // If user is not logged in, show auth modal
    if (!user) {
      setShowAuthModal(true)
    } else {
      // If user is logged in, proceed to payment selection
      setShowPaymentSelection(true)
    }
  }

  const handlePaymentComplete = () => {
    setShowPaymentSelection(false)
    setShowPaymentProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setShowPaymentProcessing(false)
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

      setShowUnlockProcessing(true)
      setUnlockStage("unlocking")

      // Simulate door unlocking and proceed to calculation
      setTimeout(() => {
        setShowUnlockProcessing(false)
        handleDetectionComplete()
      }, 2000)
    }, 2000)
  }

  const handleDetectionComplete = () => {
    setShowUnlockProcessing(true)
    setUnlockStage("calculating")

    // Simulate detected items for order
    const cartItems: CartItem[] = [
      {
        id: "1",
        name: "Coca Cola",
        price: 8.5,
        quantity: 2,
        image: "/placeholder.svg",
        category: "Soda",
      },
      {
        id: "2",
        name: "Pepsi",
        price: 8.0,
        quantity: 1,
        image: "/placeholder.svg",
        category: "Soda",
      },
    ]

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
        setShowUnlockProcessing(false)
        setShowCheckout(true)
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

          {/* Hero Carousel */}
          <div className="mb-8">
            <HeroCarousel
              images={[
                {
                  src: "/images/hero-drinks-new.png",
                  alt: "Fresh tropical beverages on beach"
                },
                {
                  src: "/images/hero-drinks.png",
                  alt: "Refreshing drinks selection"
                }
              ]}
              autoPlayInterval={4000}
            />
          </div>

          {/* Products Grid - Display Only */}
          <ProductsGrid 
            products={showQrScan ? [] : mockProducts} 
            className="mb-8" 
          />
        </main>

        {/* Bottom Action Sheet */}
        <BottomActionSheet
          user={user}
          language={language}
          onUnlockDoor={handleUnlockDoor}
          onShowAuthModal={() => setShowAuthModal(true)}
          onPaymentComplete={handlePaymentComplete}
          onFridgeScanned={handleFridgeScanned}
          onClose={() => {
            setShowPaymentSelection(false)
            setShowPaymentProcessing(false)
            setShowUnlockProcessing(false)
            setShowCheckout(false)
            setShowQrScan(true)
          }}
          disabled={showUnlockProcessing || showPaymentProcessing || showPaymentSelection || showCheckout || showQrScan}
          showPaymentSelection={showPaymentSelection}
          showPaymentProcessing={showPaymentProcessing}
          showUnlockProcessing={showUnlockProcessing}
          showCheckout={showCheckout}
          showQrScan={showQrScan}
          unlockStage={unlockStage}
          amount={DEPOSIT_AMOUNT}
          order={currentOrder}
        />

        {/* Modals */}
        <AuthModal
          isOpen={showAuthModal}
          language={language}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />




      </div>
    </div>
  )
}
