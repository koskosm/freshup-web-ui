import { useTranslation } from 'react-i18next'
import type { Language } from '@/lib/translations'

export function useI18n() {
  const { t: i18nT, i18n, ready } = useTranslation()

  // Backward compatible t function
  const t = (key: string, languageOrParams?: Language | Record<string, string | number>, params?: Record<string, string | number>) => {
    let actualParams: Record<string, string | number> | undefined = params

    // Handle different function signatures
    if (typeof languageOrParams === "string") {
      // Old signature: t(key, language, params?)
      // We don't need to change language here since i18next handles it
      actualParams = params
    } else if (languageOrParams && typeof languageOrParams === "object") {
      // New signature: t(key, params?)
      actualParams = languageOrParams
    }

    // Use react-i18next's t function
    return i18nT(key, actualParams)
  }

  return {
    t,
    i18n,
    ready,
    language: i18n.language as Language,
    changeLanguage: i18n.changeLanguage
  }
} 