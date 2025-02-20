import { createContext, useContext } from 'react'
import type { AvatarOptions } from '../Types'

type AvatarContextType = {
  avatarOptions: AvatarOptions
  setAvatarOptions: (avatarOptions: AvatarOptions) => void
}

export const AvatarContext = createContext<AvatarContextType | undefined>(undefined)

export const useAvatarContext = () => {
  const context = useContext(AvatarContext)
  if (context === undefined) {
    throw new Error('useAvatarContext must be used within a AvatarContext')
  }
  return context
}
