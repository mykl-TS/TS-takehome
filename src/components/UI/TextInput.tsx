import { useContext } from 'react';
import { AvatarContext } from '../../context/AvatarProvider';
import '../../styles/UI/textinput.css';
import { AvatarOptions } from '../../Types';

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

const TextInput = ({ name, label, placeholder, className }: TextInputProps) => {
  const { avatarOptions, setAvatarOptions } = useContext(AvatarContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarOptions((prevAvatarOptions: AvatarOptions) => ({
      ...prevAvatarOptions,
      name: event.target.value,
    }));
  };

  return (
    <>
      <label>
        {label}
        <input
          name={name}
          value={avatarOptions.name || ''}
          className={className ? className : ''}
          type='Text'
          placeholder={placeholder ? placeholder : ''}
          onChange={handleChange}
          maxLength={25}
        />
      </label>
    </>
  );
};

export default TextInput;
