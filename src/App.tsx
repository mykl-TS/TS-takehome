import AvatarProvider from './context/AvatarProvider';
import AvatarPreview from './components/AvatarPreview';
import OptionsPicker from './components/OptionsPicker';
import ColorPicker from './components/UI/ColorPicker';
import TextInput from './components/UI/TextInput';
import SaveButton from './components/UI/SaveButton';
import RobotList from './components/RobotList/RobotList';
import './styles/App.css';

function App() {
  return (
    <div className='app_container'>
      <AvatarProvider>
        <div className='main'>
          <div className='avatar_creator'>
            <SaveButton>+</SaveButton>
            <AvatarPreview />
            <div className='row'>
              <TextInput label='' name='avatar_name' placeholder='Name Me!' />
            </div>
            <div className='row'>
              <ColorPicker label='Color' optionKey='baseColor' />
              <ColorPicker label='Background' optionKey='backgroundColor' />
            </div>
            <OptionsPicker />
          </div>
          <div className='avatar_list'>
            <RobotList />
          </div>
        </div>
      </AvatarProvider>
    </div>
  );
}

export default App;
