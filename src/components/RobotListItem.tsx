import { useOnUpdateAvatarList } from './../Hooks'
import { useAvatarListContext } from '../context/AvatarListContext'
import '../styles/robotListItem.css'

interface Props {
  keyName: string
  name: string 
  url: string
}

const RobotListItem = (props: Props) => {
  const {keyName, name, url} = props
  const {setAvatarList} = useAvatarListContext()

  const deleteAvatar = (keyName:string) => {
    try {
      window.localStorage.removeItem(keyName)
    } catch(error){
      console.log(error)
    }
    setAvatarList(useOnUpdateAvatarList())
  }

  return (
    <>
      <li key={keyName} className="avatar_item_container">
        <span className="item_avatar">
          <img
            src={url}
            alt={`robot avatar`}
          />
        </span>
        <span className="avatar_item_name">{name}</span>
        <button 
          className="avatar_delete"
          onClick={() => deleteAvatar(keyName)}
          >X</button>
      </li>
    </>
  )
}

export default RobotListItem