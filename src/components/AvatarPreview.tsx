import '../styles/avatarPreview.css'
import { useAvatarURLContext } from '../context/AvatarURLContext'

const AvatarPreview = () => {
  const { avatarURL } = useAvatarURLContext()

  return (
    <div className="avatar_preview_container">
      <div className="avatar_preview">
        <img src={avatarURL} alt="avatar" />
      </div>
    </div>
  )
}

export default AvatarPreview
