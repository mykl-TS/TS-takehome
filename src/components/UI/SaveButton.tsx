import { PropsWithChildren, useContext } from 'react';
import { AvatarContext } from '../../context/AvatarProvider';
import { useOnUpdateAvatarList } from '../../Hooks';
import { buildURL } from '../../Services';
import '../../styles/UI/SaveButton.css';

const SaveButton = ({ children }: PropsWithChildren) => {
  const { avatarOptions } = useContext(AvatarContext);
  const { saveAvatar } = useOnUpdateAvatarList();

  const handleOnClick = () => {
    saveAvatar(buildURL(avatarOptions), avatarOptions?.name);
  };
  return (
    <button
      className='save_button'
      disabled={avatarOptions?.name === ''}
      onClick={handleOnClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default SaveButton;
