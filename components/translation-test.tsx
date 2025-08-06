"use client"

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export function TranslationTest() {
  const { t, i18n, ready } = useTranslation()
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    const updateDebugInfo = () => {
      setDebugInfo({
        language: i18n.language,
        ready: i18n.isInitialized,
        hasEnTranslations: i18n.hasResourceBundle('en', 'translation'),
        hasZhTranslations: i18n.hasResourceBundle('zh', 'translation'),
        availableLanguages: i18n.languages,
        currentLanguage: i18n.language,
        readyState: ready
      })
    }

    updateDebugInfo()
    const interval = setInterval(updateDebugInfo, 500)
    return () => clearInterval(interval)
  }, [i18n, ready])

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Translation Test</h2>
      
      <div className="space-y-2">
        <p><strong>Current Language:</strong> {i18n.language}</p>
        <p><strong>Ready State:</strong> {ready ? 'Yes' : 'No'}</p>
        <p><strong>Welcome:</strong> {t('welcome')}</p>
        <p><strong>Profile:</strong> {t('profile')}</p>
        <p><strong>Language Button:</strong> {t('language')}</p>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => changeLanguage('en')}>English</Button>
        <Button onClick={() => changeLanguage('zh')}>中文</Button>
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Debug Info:</h3>
        <pre className="text-xs bg-white p-2 rounded overflow-auto">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </div>

      <div className="mt-4 p-4 bg-blue-100 rounded">
        <h3 className="font-semibold mb-2">Plural Test:</h3>
        <p>1 item: {t('item', { count: 1 })}</p>
        <p>2 items: {t('item', { count: 2 })}</p>
        <p>5 items: {t('item', { count: 5 })}</p>
      </div>
    </div>
  )
} 