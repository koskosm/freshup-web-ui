"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import type { Language } from "@/lib/translations"

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
  const { i18n, ready } = useTranslation()
  const [language, setLanguageState] = useState<Language>(initialLanguage)
  const [error, setError] = useState<string | null>(null)
  const [translationsLoaded, setTranslationsLoaded] = useState(false)

  // Wait for translations to be loaded
  useEffect(() => {
    const checkTranslations = () => {
      const hasTranslations = i18n.hasResourceBundle('en', 'translation') && 
                             i18n.hasResourceBundle('zh', 'translation')
      
      if (hasTranslations && !translationsLoaded) {
        console.log('Translations are ready')
        setTranslationsLoaded(true)
      }
    }

    // Check immediately
    checkTranslations()

    // Listen for translation loading
    const handleLoaded = () => {
      console.log('Translation loaded event received')
      setTranslationsLoaded(true)
    }

    i18n.on('loaded', handleLoaded)

    // Check periodically until translations are loaded
    const interval = setInterval(checkTranslations, 100)

    return () => {
      i18n.off('loaded', handleLoaded)
      clearInterval(interval)
    }
  }, [i18n, translationsLoaded])

  useEffect(() => {
    const changeLanguage = async () => {
      try {
        setError(null)
        await i18n.changeLanguage(language)
      } catch (err) {
        console.error("TranslationProvider: Error changing language", err)
        setError(err instanceof Error ? err.message : "Failed to change language")
      }
    }

    if (ready && translationsLoaded && i18n.language !== language) {
      changeLanguage()
    }
  }, [language, i18n, ready, translationsLoaded])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  // Show loading state until translations are ready
  if (!ready || !translationsLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#3DC5F1" }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
      </div>
    )
  }

  return (
    <TranslationContext.Provider
      value={{
        isLoading: false,
        error,
        language: i18n.language as Language,
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