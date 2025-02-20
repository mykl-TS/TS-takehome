import { createContext, FC, PropsWithChildren, useContext, useState, useEffect } from "react"
import { buildURL } from "../Services"
import { useAvatarContext } from "./AvatarContext"


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

type AvatarURLProviderProps = PropsWithChildren<{url: string}>

const AvatarURLProvider: FC<AvatarURLProviderProps> = ({children, url}) => {
    const [avatarURL, setAvatarURL] = useState<string>(url)
    const {avatarOptions} = useAvatarContext()

    useEffect(() => {
        setAvatarURL(buildURL(avatarOptions))
    }, [avatarOptions])

    return (
        <AvatarURLContext.Provider value={{avatarURL, setAvatarURL}}>
            {children}
        </AvatarURLContext.Provider>
    )
}

export {AvatarURLProvider}