import React, { createContext, useContext, useEffect, useState } from 'react'

export type AppConfig = {
  siteName?: string
  logoText?: string
  logoUrl?: string
  apiBaseUrl?: string
  cmsSiteId?: string
  navigation?: {
    links?: { label: string; href: string }[]
  }
  hero?: {
    title?: string
    subtitle?: string
  }
  features?: {
    title: string
    description: string
    icon?: string
  }[]
  seo?: {
    defaultTitle?: string
    defaultDescription?: string
  }
  footer?: {
    year?: number
    company?: string
  }
}

const ConfigContext = createContext<AppConfig>({})

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<AppConfig>({})

  useEffect(() => {
    const initial = (window as any).__CONFIG__ ?? {}
    setConfig(initial)
  }, [])

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => useContext(ConfigContext)