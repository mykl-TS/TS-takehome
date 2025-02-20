import RobotListItem from './RobotListItem';
import { useOnUpdateAvatarList } from '../../Hooks';
import { AvatarListItem } from '../../Types';

const RobotList = () => {
	const { getAvatars } = useOnUpdateAvatarList();
	const avatarList = getAvatars() ?? [];
	return (
		<ul>
			{avatarList.map(({ key, name, URL }: AvatarListItem) => (
				<RobotListItem key={key} keyName={key} name={name} url={URL} />
			))}
		</ul>
	);
};

export default RobotList;
