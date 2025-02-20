import { PropsWithChildren } from 'react'
import '../../styles/UI/SaveButton.css'
import { defaultRobot, generateKey } from '../../Services'
import { useOnUpdateAvatarList } from '../../Hooks'
import { useAvatarContext } from '../../context/AvatarContext'
import { useAvatarListContext } from '../../context/AvatarListContext'
import { useAvatarURLContext } from '../../context/AvatarURLContext'
const SaveButton = (props: PropsWithChildren) => {
  const { children } = props
  const { avatarOptions, setAvatarOptions } = useAvatarContext()
  const { setAvatarList } = useAvatarListContext()
  const { avatarURL } = useAvatarURLContext()

  const saveAvatar = () => {
    try {
      window.localStorage.setItem(
        generateKey(avatarOptions?.name || ''),
        JSON.stringify({ URL: avatarURL, name: avatarOptions?.name || '' })
      )
      //eslint-disable-next-line react-hooks/rules-of-hooks
      setAvatarList(useOnUpdateAvatarList())
      setAvatarOptions(defaultRobot)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button
        className="save_button"
        disabled={avatarOptions?.name === ''}
        onClick={() => saveAvatar()}
      >
        <span>{children}</span>
      </button>
    </>
  )
}

export default SaveButton
