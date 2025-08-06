export type Language = "en" | "zh"

// Cache for loaded translations
const translationCache: Record<Language, Record<string, string> | null> = {
  en: null,
  zh: null,
}

// Load translations from JSON file
async function loadTranslations(language: Language): Promise<Record<string, string>> {
  if (translationCache[language]) {
    return translationCache[language]!
  }

  try {
    const response = await fetch(`/locales/${language}.json`)
    if (!response.ok) {
      throw new Error(`Failed to load translations for ${language}: ${response.status} ${response.statusText}`)
    }
    
    const translations = await response.json()
    translationCache[language] = translations
    return translations
  } catch (error) {
    console.error(`Error loading translations for ${language}:`, error)
    // Return empty object as fallback - no hardcoded strings
    return {}
  }
}

// Synchronous version for immediate use (with fallback)
function getTranslationSync(language: Language, key: string): string {
  const cached = translationCache[language]
  if (cached && cached[key]) {
    return cached[key]
  }
  
  // Fallback to key if translation not loaded yet
  return key
}

// Backward compatible function that supports both old and new signatures
export function t(key: string, languageOrParams?: Language | Record<string, string | number>, params?: Record<string, string | number>): string {
  let language: Language = "en"
  let actualParams: Record<string, string | number> | undefined = params

  // Handle different function signatures
  if (typeof languageOrParams === "string") {
    // Old signature: t(key, language, params?)
    language = languageOrParams as Language
  } else if (languageOrParams && typeof languageOrParams === "object") {
    // New signature: t(key, params?)
    actualParams = languageOrParams
  }

  let text = getTranslationSync(language, key)

  if (actualParams) {
    Object.entries(actualParams).forEach(([param, value]) => {
      text = text.replace(`{{${param}}}`, String(value))
    })
  }

  return text
}

// Async version for when you need to ensure translations are loaded
export async function tAsync(key: string, language: Language, params?: Record<string, string | number>): Promise<string> {
  const translations = await loadTranslations(language)
  let text = translations[key] || key

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{{${param}}}`, String(value))
    })
  }

  return text
}

// Synchronous version for immediate use
export function tSync(key: string, language: Language, params?: Record<string, string | number>): string {
  let text = getTranslationSync(language, key)

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{{${param}}}`, String(value))
    })
  }

  return text
}

// Preload translations for better performance
export async function preloadTranslations(languages: Language[] = ["en", "zh"]) {
  await Promise.all(languages.map(lang => loadTranslations(lang)))
}
