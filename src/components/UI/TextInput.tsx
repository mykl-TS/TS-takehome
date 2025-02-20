import { useContext } from 'react';
import { AvatarContext } from '../../context';
import '../../styles/UI/textinput.css';
import { AvatarOptions } from '../../Types';

interface Props {
	name: string;
	label: string;
	placeholder?: string;
	className?: string;
}

const TextInput = ({ name, label, placeholder, className }: Props) => {
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
