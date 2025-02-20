import { useState } from 'react';
import AvatarPreview from './components/AvatarPreview';
import OptionsPicker from './components/OptionsPicker';
import ColorPicker from './components/UI/ColorPicker';
import TextInput from './components/UI/TextInput';
import { useOnUpdateAvatarList } from './Hooks';
import { AvatarContext, AvatarURLContext, AvatarListContext } from './context';
import { buildURL, defaultRobot } from './Services';
import SaveButton from './components/UI/SaveButton';
import RobotList from './components/RobotList/RobotList';
import './styles/App.css';

function App() {
	const [avatarOptions, setAvatarOptions] = useState(defaultRobot);
	const { getAvatars } = useOnUpdateAvatarList();
	const [avatarList, setAvatarList] = useState(getAvatars);

	return (
		<div className='app_container'>
			<AvatarContext.Provider value={{ avatarOptions, setAvatarOptions }}>
				<AvatarURLContext.Provider value={buildURL(avatarOptions)}>
					<AvatarListContext.Provider value={{ avatarList, setAvatarList }}>
						<div className='main'>
							<div className='avatar_creator'>
								<SaveButton>+</SaveButton>
								<AvatarPreview />
								<div className='row'>
									<TextInput
										label=''
										name='avatar_name'
										placeholder='Name Me!'
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
