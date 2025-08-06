"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { preloadTranslations, type Language } from "@/lib/translations"

interface TranslationContextType {
  isLoading: boolean
  error: string | null
  language: Language
  setLanguage: (language: Language) => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

interface TranslationProviderProps {
  children: ReactNode
  initialLanguage?: Language
}

export function TranslationProvider({ children, initialLanguage = "en" }: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true)
        setError(null)
        await preloadTranslations([language])
        
        // Add a small delay to ensure translations are fully cached
        await new Promise(resolve => setTimeout(resolve, 100))
      } catch (err) {
        console.error("TranslationProvider: Error loading translations", err)
        setError(err instanceof Error ? err.message : "Failed to load translations")
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <TranslationContext.Provider
      value={{
        isLoading,
        error,
        language,
        setLanguage: handleSetLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslationContext() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslationContext must be used within a TranslationProvider")
  }
  return context
} 