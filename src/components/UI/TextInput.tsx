import { useAvatarContext } from '../../context/AvatarContext'
import '../../styles/UI/textinput.css'

interface Props {
  name: string;
  label: string;
  placeholder?: string; 
  className?: string;
}

const TextInput = (props: Props) => {
  const { 
    name,
    label,
    placeholder,
    className,
  } = props

  const { avatarOptions, setAvatarOptions } = useAvatarContext()

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {  
    if (avatarOptions && event.target.value !== undefined) {
      setAvatarOptions({...avatarOptions, name: event.target.value})    
    }
  }

  return (
    <>
      <label>
        {label}
        <input 
          name={name}
          value={avatarOptions?.name || ""}
          className={className ? className: ""}
          type="Text"
          placeholder={placeholder ? placeholder : ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {updateName(event)}}
          maxLength={25}
        />
      </label>
    </>
  )
}

export default TextInput