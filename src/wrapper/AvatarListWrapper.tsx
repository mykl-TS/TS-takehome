import { FC, PropsWithChildren, useState } from 'react'
import { AvatarListContext } from '../context/AvatarListContext'
import { useOnUpdateAvatarList } from '../Hooks'
import { AvatarList } from '../Types'

type AvatarListProviderProps = PropsWithChildren<{ defaultAvatarList: AvatarList }>

const AvatarListProvider: FC<AvatarListProviderProps> = ({ children, defaultAvatarList }) => {
  const [avatarList, setAvatarList] = useState<AvatarList>(defaultAvatarList)
  return (
    <AvatarListContext.Provider value={{ avatarList, setAvatarList }}>
      {children}
    </AvatarListContext.Provider>
  )
}

export default function AvatarListWrapper({ children }: PropsWithChildren) {
  return (
    <AvatarListProvider defaultAvatarList={useOnUpdateAvatarList()}>{children}</AvatarListProvider>
  )
}
