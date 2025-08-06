import { useState, useEffect, useCallback } from "react"
import { t, tAsync, preloadTranslations, type Language } from "@/lib/translations"

export function useTranslations(language: Language) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Preload translations on mount
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true)
        setError(null)
        await preloadTranslations([language])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load translations")
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  // Translation function that returns a promise
  const tAsyncFn = useCallback(
    async (key: string, params?: Record<string, string | number>): Promise<string> => {
      return await tAsync(key, language, params)
    },
    [language]
  )

  // Synchronous translation function with fallback
  const tSyncFn = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      return t(key, language, params)
    },
    [language]
  )

  return {
    t: tSyncFn, // Use sync version for immediate rendering
    tAsync: tAsyncFn, // Use async version when needed
    isLoading,
    error,
  }
} 