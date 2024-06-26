import React from 'react'

import { AuthProvider } from '@/contexts/AuthContext'
import { AbilityProvider } from '@/providers/useAbilityProvider'

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>
    <AbilityProvider>
      {children}
    </AbilityProvider>
  </AuthProvider>
)

export default AppProvider
