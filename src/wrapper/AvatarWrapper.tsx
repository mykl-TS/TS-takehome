import { FC, PropsWithChildren, useState } from 'react'

import { defaultRobot } from '../Services'
import { AvatarOptions } from '../Types'
import { AvatarContext } from '../context/AvatarContext'

type AvatarContextProps = PropsWithChildren<{ defaultRobot: AvatarOptions }>

const AvatarProvider: FC<AvatarContextProps> = ({ children, defaultRobot }) => {
  const [avatarOptions, setAvatarOptions] = useState<AvatarOptions>(defaultRobot)
  return (
    <AvatarContext.Provider value={{ avatarOptions, setAvatarOptions }}>
      {children}
    </AvatarContext.Provider>
  )
}

export default function AvatarWrapper({ children }: PropsWithChildren) {
  return <AvatarProvider defaultRobot={defaultRobot}>{children}</AvatarProvider>
}
