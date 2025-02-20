import { useAvatarContext } from '../context/AvatarContext'
import { buildURL } from '../Services'
import { FC, PropsWithChildren, useState, useEffect } from 'react'
import { AvatarURLContext } from '../context/AvatarURLContext'

type AvatarURLProviderProps = PropsWithChildren<{ url: string }>

const AvatarURLProvider: FC<AvatarURLProviderProps> = ({ children, url }) => {
  const [avatarURL, setAvatarURL] = useState<string>(url)
  const { avatarOptions } = useAvatarContext()

  useEffect(() => {
    setAvatarURL(buildURL(avatarOptions))
  }, [avatarOptions])

  return (
    <AvatarURLContext.Provider value={{ avatarURL, setAvatarURL }}>
      {children}
    </AvatarURLContext.Provider>
  )
}

export default function AvatarURLWrapper({ children }: PropsWithChildren) {
  const { avatarOptions } = useAvatarContext()
  return <AvatarURLProvider url={buildURL(avatarOptions)}>{children}</AvatarURLProvider>
}
