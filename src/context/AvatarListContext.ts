import { createContext, useContext } from 'react'
import { AvatarList } from '../Types'

export const AvatarListContext = createContext<AvatarListContextType | undefined>(undefined)

export const useAvatarListContext = () => {
  const context = useContext(AvatarListContext)
  if (context === undefined) {
    throw new Error('useAvatarListContext must be used within a AvatarListContext')
  }
  return context
}

type AvatarListContextType = {
  avatarList: AvatarList
  setAvatarList: (avatarList: AvatarList) => void
}
