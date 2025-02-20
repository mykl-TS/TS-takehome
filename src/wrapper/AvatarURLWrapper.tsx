import { PropsWithChildren } from "react"
import { AvatarURLProvider } from "../context/AvatarURLContext"
import { useAvatarContext } from "../context/AvatarContext"
import { buildURL } from "../Services"

export default function AvatarURLWrapper({children}: PropsWithChildren) {

    const {avatarOptions} = useAvatarContext()
    return (
        <AvatarURLProvider url={buildURL(avatarOptions)}>{children}</AvatarURLProvider>
    )
}