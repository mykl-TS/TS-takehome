import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useState } from 'react'
import type { AvatarOptions } from '../Types'

type AvatarContextType = {
    avatarOptions: AvatarOptions
    setAvatarOptions: (avatarOptions: AvatarOptions) => void
  }

const AvatarContext = createContext<AvatarContextType | undefined>(undefined)

export const useAvatarContext = () => {
    const context = useContext(AvatarContext)
    if (context === undefined) {
        throw new Error('useAvatarContext must be used within a AvatarContext')
    }
    return context
}

type AvatarContextProps = PropsWithChildren<{defaultRobot: AvatarOptions}>

const AvatarProvider: FC<AvatarContextProps> = ({children, defaultRobot}) => {
    const [avatarOptions, setAvatarOptions] = useState<AvatarOptions>(defaultRobot)
    return (
        <AvatarContext.Provider value={{avatarOptions, setAvatarOptions}}>
            {children}
        </AvatarContext.Provider>
    )
}

export {AvatarProvider}
