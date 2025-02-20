import { PropsWithChildren } from "react"
import { AvatarListProvider } from "../context/AvatarListContext"
import { useOnUpdateAvatarList } from "../Hooks"

export default function AvatarListWrapper({children}: PropsWithChildren) {
  return (
    <AvatarListProvider defaultAvatarList={useOnUpdateAvatarList()}>
      {children}
    </AvatarListProvider>
  )
}
