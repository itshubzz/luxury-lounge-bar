'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { LanguageCode, translations, TranslationSchema } from '@/lib/translations';

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationSchema;
};

const DEFAULT_LANGUAGE: LanguageCode = 'sq';
const STORAGE_KEY = 'connect-prime-language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const SUPPORTED_LANGUAGES: LanguageCode[] = ['sq', 'en', 'mk'];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with default language to ensure server/client match
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  // Hydrate from localStorage after mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
        setLanguageState(stored);
      } else {
        window.localStorage.setItem(STORAGE_KEY, DEFAULT_LANGUAGE);
      }
    }
  }, []);

  const setLanguage = useCallback(
    (code: LanguageCode) => {
      if (!SUPPORTED_LANGUAGES.includes(code)) return;
      setLanguageState(code);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, code);
      }
    },
    [],
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

