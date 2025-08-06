import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Initialize i18next with empty resources first
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    pluralSeparator: '_',
    keySeparator: '.',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    // Add empty resources to prevent errors
    resources: {
      en: { translation: {} },
      zh: { translation: {} }
    }
  })

// Load translations and add them to i18next
async function loadTranslations() {
  try {
    console.log('Loading translations...')
    const [enResponse, zhResponse] = await Promise.all([
      fetch('/locales/en.json'),
      fetch('/locales/zh.json')
    ])
    
    if (!enResponse.ok || !zhResponse.ok) {
      throw new Error('Failed to load translation files')
    }
    
    const enTranslations = await enResponse.json()
    const zhTranslations = await zhResponse.json()

    // Add resources to i18next
    i18n.addResourceBundle('en', 'translation', enTranslations, true, true)
    i18n.addResourceBundle('zh', 'translation', zhTranslations, true, true)
    
    console.log('Translations loaded successfully')
    
    // Trigger a change to update all components
    i18n.emit('loaded')
  } catch (error) {
    console.error('Failed to load translations:', error)
  }
}

// Load translations immediately
loadTranslations()

export default i18n 