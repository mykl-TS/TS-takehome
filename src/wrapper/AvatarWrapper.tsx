import { PropsWithChildren } from "react"
import { AvatarProvider } from "../context/AvatarContext"
import { defaultRobot } from "../Services"

export default function AvatarWrapper({children}: PropsWithChildren) {

    return (
        <AvatarProvider defaultRobot={defaultRobot}>
            {children}
        </AvatarProvider>
    )
} 

