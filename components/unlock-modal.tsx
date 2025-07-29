"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Lock, Sparkles, CheckCircle } from "lucide-react"

interface UnlockModalProps {
  isOpen: boolean
  onClose: () => void
  stage: "unlocking" | "calculating" | "complete"
}

export function UnlockModal({ isOpen, onClose, stage }: UnlockModalProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (stage === "unlocking" || stage === "calculating") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })
      }, 200)

      return () => clearInterval(interval)
    }
  }, [stage])

  const getContent = () => {
    switch (stage) {
      case "unlocking":
        return {
          icon: <Lock className="w-12 h-12" style={{ color: "#B8860B" }} />,
          title: "Unlocking Door...",
          subtitle: "Smart sensors are activating.\nDoor will unlock shortly.",
          bgColor: "#FCBB34",
        }
      case "calculating":
        return {
          icon: <Sparkles className="w-12 h-12" style={{ color: "#B8860B" }} />,
          title: "Processing Payment...",
          subtitle: "Calculating total for detected items.\nProcessing your payment.",
          bgColor: "#FCBB34",
        }
      case "complete":
        return {
          icon: <CheckCircle className="w-12 h-12" style={{ color: "#B8860B" }} />,
          title: "Payment Complete",
          subtitle: "Thank you for your purchase!",
          bgColor: "#FCBB34",
        }
      default:
        return {
          icon: <Lock className="w-12 h-12" style={{ color: "#B8860B" }} />,
          title: "Processing...",
          subtitle: "",
          bgColor: "#FCBB34",
        }
    }
  }

  const content = getContent()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-none bg-transparent shadow-none">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div
            className="w-32 h-32 rounded-full border-4 border-cyan-300 flex items-center justify-center"
            style={{ backgroundColor: content.bgColor }}
          >
            {content.icon}
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{content.title}</h2>
            <p className="text-muted-foreground whitespace-pre-line">{content.subtitle}</p>
            {stage === "calculating" && <p className="text-cyan-500 text-sm">Contact Customer Service 2888 8888</p>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
