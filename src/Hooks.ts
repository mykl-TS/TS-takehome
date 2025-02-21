import { useContext } from 'react';
import { AvatarContext, AvatarListContext } from './context/AvatarProvider';
import { AvatarList } from './Types';
import { defaultRobot, generateKey } from './Services';

export const useOnUpdateAvatarList = () => {
  const { setAvatarList } = useContext(AvatarListContext);
  const { setAvatarOptions } = useContext(AvatarContext);

  const getAvatars = () => {
    try {
      const keys = Object.keys(window.localStorage);
      const avatarData: AvatarList = [];
      keys.forEach((key) => {
        let item =
          window.localStorage.getItem(key) ||
          "{URL:'undefined', name: 'undefined'}";
        const avatar = JSON.parse(item);
        avatar.key = key;
        avatarData.push(avatar);
      });
      return avatarData;
    } catch (error) {
      console.error(error);
    }
  };

  const saveAvatar = (URL: string, name: string) => {
    try {
      window.localStorage.setItem(
        generateKey(name),
        JSON.stringify({ URL, name })
      );
      setAvatarList(getAvatars);
      setAvatarOptions(defaultRobot);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAvatar = (keyN: string) => {
    try {
      window.localStorage.removeItem(keyN);
      const updatedAvatarsList = getAvatars();
      setAvatarList(updatedAvatarsList);
    } catch (error) {
      console.error(error);
    }
  };

  return { getAvatars, deleteAvatar, saveAvatar };
};
