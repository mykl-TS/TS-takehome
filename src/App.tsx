import './styles/App.css'
import AvatarPreview from './components/AvatarPreview'
import OptionsPicker from './components/OptionsPicker'
import ColorPicker from './components/UI/ColorPicker'
import TextInput from './components/UI/TextInput'
import RobotListItem from './components/RobotListItem'
import SaveButton from './components/UI/SaveButton'
import { useAvatarContext } from './context/AvatarContext'
import { useAvatarListContext } from './context/AvatarListContext'


function App() {
  const { avatarOptions } = useAvatarContext()
  const {avatarList} = useAvatarListContext()

  return (
    <div className="app_container">

            <div className="main">
              <div className="avatar_creator">
                <SaveButton
                >+</SaveButton>

                <AvatarPreview
                />
                <div className="row">
                  <TextInput 
                    label=""
                    name="avatar_name"
                    placeholder="Name Me!" 
                  />
                </div>
                <div className="row">
                  <ColorPicker
                    label="Color"
                    defaultColor={`#${avatarOptions?.baseColor}`}
                    optionKey="baseColor"
                  />
                  <ColorPicker
                    label="Background"
                    defaultColor={`#${avatarOptions?.backgroundColor}`}
                    optionKey="backgroundColor"
                  />
                </div>
                <OptionsPicker/>
              </div>
              <div className="avatar_list">
                <ul>
                  { avatarList && avatarList.map((avatar, index) => {
                      return (
                        <RobotListItem
                          key={index}
                          keyName={avatar.key}
                          name={avatar.name}
                          url={avatar.URL}
                        />
                      )
                    })
                  }
                </ul>
              </div>
            </div>
    </div>
  )
}

export default App
