# Translation System

This project uses a JSON-based translation system that loads translations from external files instead of hardcoding them in TypeScript.

## File Structure

```
public/locales/
├── en.json          # English translations
└── zh.json          # Chinese translations
```

## Usage

### Basic Translation

```typescript
import { t } from "@/lib/translations"

// Simple translation
const text = t("welcome", language)

// Translation with parameters
const text = t("welcomeUser", language, { name: "John" })
```

### Async Translation (when you need to ensure translations are loaded)

```typescript
import { tAsync } from "@/lib/translations"

const text = await tAsync("welcome", language)
```

### React Hook

```typescript
import { useTranslations } from "@/hooks/use-translations"

function MyComponent() {
  const { t, isLoading, error } = useTranslations(language)
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return <div>{t("welcome")}</div>
}
```

## Adding New Translations

1. Add the translation key and value to both language files:

```json
// public/locales/en.json
{
  "newKey": "New translation in English"
}

// public/locales/zh.json
{
  "newKey": "新的中文翻譯"
}
```

2. Use the translation in your component:

```typescript
const text = t("newKey", language)
```

## Parameter Interpolation

Translations support parameter interpolation using `{{paramName}}` syntax:

```json
{
  "welcomeUser": "Welcome {{name}}",
  "orderNumber": "Order #{{orderNumber}}"
}
```

```typescript
const text = t("welcomeUser", language, { name: "John" })
const orderText = t("orderNumber", language, { orderNumber: "12345" })
```

## Validation

Run the validation script to ensure all translation files are complete:

```bash
npm run validate-translations
```

This will:
- Check that all keys exist in both language files
- Warn about potentially unused keys
- Exit with error code if validation fails

## Performance

- Translations are cached after first load
- Use `preloadTranslations()` to preload translations for better performance
- The system gracefully falls back to the key name if a translation is not found

## Backward Compatibility

The translation function supports both old and new signatures:

```typescript
// Old signature (still supported)
t("key", language, params)

// New signature
t("key", params)
```

## Error Handling

- If a translation file fails to load, the system will log an error and return the key name
- If a specific key is missing, the system will return the key name as fallback
- The validation script helps catch missing translations during development 