import { createContext, FC, PropsWithChildren, useContext, useState } from "react"
import { AvatarList } from "../Types"

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

type AvatarListProviderProps = PropsWithChildren<{defaultAvatarList: AvatarList}>

const AvatarListProvider: FC<AvatarListProviderProps> = ({children, defaultAvatarList}) => {
  const [avatarList, setAvatarList] = useState<AvatarList>(defaultAvatarList)
  return <AvatarListContext.Provider value={{avatarList, setAvatarList}}>{children}</AvatarListContext.Provider>
}

export {AvatarListProvider}
