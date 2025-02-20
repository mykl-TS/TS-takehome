import './styles/App.css';
import AvatarPreview from './components/AvatarPreview';
import OptionsPicker from './components/OptionsPicker';
import ColorPicker from './components/UI/ColorPicker';
import TextInput from './components/UI/TextInput';
import { useState } from 'react';
import { useOnUpdateAvatarList } from './Hooks';
import { AvatarContext, AvatarURLContext, AvatarListContext } from './context';
import { generateKey, buildURL, defaultRobot } from './Services';
import SaveButton from './components/UI/SaveButton';
import RobotList from './components/RobotList/RobotList';

function App() {
	const [avatarOptions, setAvatarOptions] = useState(defaultRobot);
	const avatarData = useOnUpdateAvatarList();
	const [avatarList, setAvatarList] = useState(avatarData);

	const updateName = () => {
		const _O = { ...avatarOptions };
		_O.name = event?.target.value;
		setAvatarOptions(_O);
	};

	const saveAvatar = (URL: string, name: string) => {
		try {
			window.localStorage.setItem(
				generateKey(name),
				JSON.stringify({ URL, name })
			);
			setAvatarList(avatarData);
			setAvatarOptions(defaultRobot);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='app_container'>
			<AvatarContext.Provider value={{ avatarOptions, setAvatarOptions }}>
				<AvatarURLContext.Provider value={buildURL(avatarOptions)}>
					<AvatarListContext.Provider value={{ avatarList, setAvatarList }}>
						<div className='main'>
							<div className='avatar_creator'>
								<SaveButton
									disabled={avatarOptions?.name === '' ? true : false}
									handleOnClick={() => {
										saveAvatar(buildURL(avatarOptions), avatarOptions?.name);
									}}
								>
									+
								</SaveButton>

								<AvatarPreview />
								<div className='row'>
									<TextInput
										label=''
										value={avatarOptions?.name || ''}
										name='avatar_name'
										placeholder='Name Me!'
										handleOnChange={updateName}
									/>
								</div>
								<div className='row'>
									<ColorPicker
										label='Color'
										defaultColor={`#${avatarOptions?.baseColor}`}
										optionKey='baseColor'
									/>
									<ColorPicker
										label='Background'
										defaultColor={`#${avatarOptions?.backgroundColor}`}
										optionKey='backgroundColor'
									/>
								</div>
								<OptionsPicker />
							</div>
							<div className='avatar_list'>
								<RobotList />
							</div>
						</div>
					</AvatarListContext.Provider>
				</AvatarURLContext.Provider>
			</AvatarContext.Provider>
		</div>
	);
}

export default App;
