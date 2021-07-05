import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import {
  light as lightBase,
  Menu as menuBase,
  dark as darkBase,
  PancakeTheme,
  SvgProps as svgProps,
} from '@pancakeswap-libs/uikit'

// customize light theme
const light: PancakeTheme = lightBase
light.card.background = '#334a52'
light.card.boxShadowActive = '#fff'
light.nav.hover = '#4287f5'
light.colors.text = '#fff000'
light.colors.textSubtle = '#fff'
light.colors.dropdown = '#4287f5'
light.colors.backgroundAlt = '#334a52'
light.colors.background = '#334a52'
light.colors.secondary = '#334a52'
light.colors.background = '#4287f5'
light.colors.inputSecondary = '#4287f5'
light.colors.tertiary = '#4287f5'

light.colors.primaryBright = '#fff000'

light.colors.binance = '#4287f5'
light.colors.contrast = '#334a52'
light.colors.input = '#1a272b'
light.colors.primary = '#4287f5'
light.colors.invertedContrast = '#4287f5'

const dark: PancakeTheme = darkBase
dark.card.background = '#334a52'
dark.card.boxShadowActive = '#fff'
dark.nav.hover = '#334a52'
dark.colors.text = '#fff000'
dark.colors.textSubtle = '#fff' // Text color small
dark.colors.backgroundAlt = '#334a52'
dark.colors.secondary = '#334a52' // Max
dark.colors.background = '#4287f5'
dark.colors.inputSecondary = '#4287f5'
dark.colors.tertiary = '#131313'
dark.colors.primaryDark = '#fff000'
dark.colors.primary = '#fff000'
dark.colors.binance = '#4287f5'
dark.colors.contrast = '#4287f5'
dark.colors.input = '#1a272b'
dark.colors.dropdown = '#4287f5'
dark.colors.invertedContrast = '#4287f5'

// dark.modal.background = '#121223'
// dark.radii.card = '#121223'
// dark.radii.default = '#121223'
// dark.radii.circle = '#121223'
// dark.radii.small = '#121223'
const CACHE_KEY = 'IS_DARK'

export interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType>({ isDark: false, toggleTheme: () => null })

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
