import { createContext, useContext } from 'react'

type AvatarURLContextType = {
  avatarURL: string
  setAvatarURL: (url: string) => void
}

export const AvatarURLContext = createContext<AvatarURLContextType | undefined>(undefined)

export const useAvatarURLContext = () => {
  const context = useContext(AvatarURLContext)
  if (context === undefined) {
    throw new Error('useAvatarURLContext must be used within a AvatarURLContext')
  }
  return context
}
