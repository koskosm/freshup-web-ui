"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"
import Image from "next/image"
import { t, type Language } from "@/lib/translations"

interface AuthModalProps {
  isOpen: boolean
  language: Language
  onClose: () => void
  onLogin: (phone: string) => void
}

export function AuthModal({ isOpen, language, onClose, onLogin }: AuthModalProps) {
  const [phone, setPhone] = useState("")
  const [showVerification, setShowVerification] = useState(false)
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])

  useEffect(() => {
    if (isOpen) {
      setShowVerification(false)
      setPhone("")
      setVerificationCode(["", "", "", "", "", ""])
    }
  }, [isOpen])

  const handleNext = () => {
    if (phone) {
      setShowVerification(true)
    }
  }

  const handleVerificationChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode]
      newCode[index] = value
      setVerificationCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleVerificationSubmit = () => {
    const code = verificationCode.join("")
    if (code.length === 6) {
      onLogin(phone)
      onClose()
    }
  }

  const handlePasskeyLogin = () => {
    // Simulate passkey login
    onLogin("+852 6356 3334")
    onClose()
  }

  if (showVerification) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">{t("verificationCode", language)}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-center text-muted-foreground">
              {t("verificationSent", language)}
              <br />
              {phone}
            </p>

            <div className="flex justify-center gap-2">
              {verificationCode.map((digit, index) => (
                <Input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleVerificationChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-lg font-semibold"
                  maxLength={1}
                />
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground">{t("resendCode", language)}</p>

            <Button
              onClick={handleVerificationSubmit}
              className="w-full"
              disabled={verificationCode.join("").length !== 6}
            >
              {t("verify", language)}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <Image src="/images/freshup-logo.png" alt="FreshUp" width={120} height={40} className="h-8 w-auto" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">{t("membership", language)}</DialogTitle>
          <p className="text-center text-muted-foreground">{t("signupLoginPurchase", language)}</p>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">{t("phoneNumber", language)}</Label>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                <span className="text-red-500 mr-1">🇭🇰</span>
                <span className="text-sm">+852</span>
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder={t("phoneNumber", language)}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-l-none"
              />
            </div>
          </div>

          <Button
            onClick={handleNext}
            className="w-full text-white"
            style={{ backgroundColor: "#FCBB34" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6A82D")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCBB34")}
          >
            {t("next", language)}
          </Button>

          <div className="text-center text-sm text-muted-foreground">{t("or", language)}</div>

          <Button variant="outline" onClick={handlePasskeyLogin} className="w-full bg-transparent">
            <User className="w-4 h-4 mr-2" />
            {t("continuePasskey", language)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
