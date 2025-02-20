import { useContext } from 'react';
import { AvatarListContext } from './context';
import { AvatarList } from './Types';

export const useOnUpdateAvatarList = () => {
	const { setAvatarList } = useContext(AvatarListContext);

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

	const deleteAvatar = (keyN: string) => {
		try {
			window.localStorage.removeItem(keyN);
			const updatedAvatarsList = getAvatars();
			setAvatarList(updatedAvatarsList);
		} catch (error) {
			console.error(error);
		}
	};

	return { getAvatars, deleteAvatar };
};
