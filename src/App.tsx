import './styles/App.css'
import AvatarPreview from './components/AvatarPreview'
import OptionsPicker from './components/OptionsPicker'
import ColorPicker from './components/UI/ColorPicker'
import TextInput from './components/UI/TextInput'
import SaveButton from './components/UI/SaveButton'
import RobotList from './components/RobotList'

function App() {
  return (
    <div className="app_container">
      <div className="main">
        <div className="avatar_creator">
          <SaveButton>+</SaveButton>
          <AvatarPreview />
          <div className="row">
            <TextInput label="" name="avatar_name" placeholder="Name Me!" />
          </div>
          <div className="row">
            <ColorPicker label="Color" optionKey="baseColor" />
            <ColorPicker label="Background" optionKey="backgroundColor" />
          </div>
          <OptionsPicker />
        </div>
        <div className="avatar_list">
          <RobotList />
        </div>
      </div>
    </div>
  )
}

export default App
