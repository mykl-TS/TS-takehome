import { useAvatarListContext } from '../context/AvatarListContext'
import RobotListItem from './RobotListItem'

export default function RobotList() {
  const { avatarList } = useAvatarListContext()

  return (
    <ul>
      {avatarList &&
        avatarList.map((avatar, index) => {
          return (
            <RobotListItem key={index} keyName={avatar.key} name={avatar.name} url={avatar.URL} />
          )
        })}
    </ul>
  )
}
