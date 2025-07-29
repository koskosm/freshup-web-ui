"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import type { User } from "@/lib/types"
import { t, type Language } from "@/lib/translations"

interface ProfilePageProps {
  user: User
  language: Language
  onLanguageToggle: () => void
  onBack: () => void
  onLogout: () => void
  onViewOrders: () => void
}

export function ProfilePage({ user, language, onLanguageToggle, onBack, onLogout, onViewOrders }: ProfilePageProps) {
  const handleLogout = () => {
    onLogout()
    onBack() // Go back to home after logout
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <Image src="/images/freshup-logo.png" alt="FreshUp" width={120} height={40} className="h-8 w-auto" />
          <button onClick={onLanguageToggle} className="text-gray-600 text-sm font-medium">
            {t("language", language)}
          </button>
        </div>
      </header>

      {/* Profile Content */}
      <div className="p-4">
        {/* Back button and title */}
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="mr-4 p-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">{t("myProfile", language)}</h1>
        </div>

        {/* User Info Card */}
        <div className="bg-cyan-400 rounded-2xl p-6 mb-8 text-white">
          <h2 className="text-4xl font-bold mb-2">{user.name}</h2>
          <p className="text-lg mb-1">{user.phone}</p>
          <p className="text-lg">lkhfrank@gmail.com</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-0">
          <div className="py-4 border-b border-gray-200">
            <button className="text-lg text-gray-900 w-full text-left">{t("updateProfile", language)}</button>
          </div>

          <div className="py-4 border-b border-gray-200">
            <button onClick={onViewOrders} className="text-lg text-gray-900 w-full text-left">{t("viewMyOrders", language)}</button>
          </div>

          <div className="py-4 border-b border-gray-200">
            <button className="text-lg text-gray-900 w-full text-left">{t("faq", language)}</button>
          </div>

          <div className="py-4 border-b border-gray-200">
            <button className="text-lg text-gray-900 w-full text-left">{t("contactSupports", language)}</button>
          </div>

          <div className="py-4 border-b border-gray-200">
            <button onClick={handleLogout} className="text-lg text-gray-900 w-full text-left">
              {t("logout", language)}
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between mt-8 text-gray-600">
          <button className="text-sm">{t("termsConditions", language)}</button>
          <button className="text-sm">{t("privacyPolicy", language)}</button>
        </div>
      </div>
    </div>
  )
}
