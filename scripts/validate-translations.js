#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');

function loadTranslations(language) {
  const filePath = path.join(localesDir, `${language}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`Translation file not found: ${filePath}`);
    return {};
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return {};
  }
}

function validateTranslations() {
  console.log('🔍 Validating translations...\n');
  
  const languages = ['en', 'zh'];
  const translations = {};
  
  // Load all translations
  languages.forEach(lang => {
    translations[lang] = loadTranslations(lang);
  });
  
  // Get all unique keys
  const allKeys = new Set();
  Object.values(translations).forEach(langTranslations => {
    Object.keys(langTranslations).forEach(key => allKeys.add(key));
  });
  
  // Check for missing keys in each language
  let hasErrors = false;
  
  languages.forEach(lang => {
    const langKeys = Object.keys(translations[lang]);
    const missingKeys = Array.from(allKeys).filter(key => !langKeys.includes(key));
    
    if (missingKeys.length > 0) {
      console.error(`❌ Missing keys in ${lang}.json:`);
      missingKeys.forEach(key => console.error(`   - ${key}`));
      hasErrors = true;
    } else {
      console.log(`✅ ${lang}.json is complete`);
    }
  });
  
  // Check for unused keys
  languages.forEach(lang => {
    const langKeys = Object.keys(translations[lang]);
    const unusedKeys = langKeys.filter(key => {
      return !Array.from(allKeys).some(otherKey => otherKey !== key);
    });
    
    if (unusedKeys.length > 0) {
      console.warn(`⚠️  Potentially unused keys in ${lang}.json:`);
      unusedKeys.forEach(key => console.warn(`   - ${key}`));
    }
  });
  
  if (hasErrors) {
    console.log('\n❌ Translation validation failed');
    process.exit(1);
  } else {
    console.log('\n✅ All translations are valid!');
  }
}

if (require.main === module) {
  validateTranslations();
}

module.exports = { validateTranslations }; 