"use client"

import { TranslationTest } from "@/components/translation-test"
import { TranslationProvider } from "@/components/translation-provider"
import "@/lib/i18n"

export default function TestI18nPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">i18next Test Page</h1>
          <TranslationTest />
        </div>
      </div>
    </TranslationProvider>
  )
} 