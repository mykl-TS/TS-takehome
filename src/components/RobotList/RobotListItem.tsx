import { useOnUpdateAvatarList } from '../../Hooks';
import '../../styles/robotListItem.css';

interface RobotListItemProps {
	keyName: string;
	name: string;
	url: string;
}

const RobotListItem = ({ keyName, name, url }: RobotListItemProps) => {
	const { deleteAvatar } = useOnUpdateAvatarList();

	const handleDelete = () => {
		deleteAvatar(keyName);
	};

	return (
		<>
			<li className='avatar_item_container'>
				<span className='item_avatar'>
					<img src={url} alt={`robot avatar`} />
				</span>
				<span className='avatar_item_name'>{name}</span>
				<button className='avatar_delete' onClick={handleDelete}>
					X
				</button>
			</li>
		</>
	);
};

export default RobotListItem;
