"use client"

import { useState, useEffect } from "react"
import { t, preloadTranslations, type Language } from "@/lib/translations"

export default function TestTranslations() {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true)
        setError(null)
        await preloadTranslations([language])
        
        // Test a few translations
        const testTranslations = {
          welcome: t("welcome", language),
          profile: t("profile", language),
          language: t("language", language),
        }
        setTranslations(testTranslations)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load translations")
      } finally {
        setLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  if (loading) {
    return <div>Loading translations...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Translation Test</h1>
      
      <div className="mb-4">
        <button 
          onClick={() => setLanguage(language === "en" ? "zh" : "en")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Switch to {language === "en" ? "Chinese" : "English"}
        </button>
      </div>

      <div className="space-y-2">
        <div><strong>Language:</strong> {language}</div>
        <div><strong>Welcome:</strong> {translations.welcome}</div>
        <div><strong>Profile:</strong> {translations.profile}</div>
        <div><strong>Language Button:</strong> {translations.language}</div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Raw Translation Test</h2>
        <div>Welcome: {t("welcome", language)}</div>
        <div>Profile: {t("profile", language)}</div>
        <div>Language: {t("language", language)}</div>
      </div>
    </div>
  )
} 