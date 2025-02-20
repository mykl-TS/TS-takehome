import '../styles/optionsPicker.css'
import TabBar from './UI/TabBar'
import { CustomizationOptions, TabData, OverrideOption } from '../Types'
import { customizationOptions } from '../Services'
import { useState } from 'react'
import { buildURL } from '../Services'
import { useAvatarContext } from '../context/AvatarContext'



const OptionsPicker = () => {
  
  const {avatarOptions, setAvatarOptions} = useAvatarContext()
  const [activeTab, setActiveTab] = useState<OverrideOption["name"]>(customizationOptions[0].option as OverrideOption["name"])
  const [displayOptions, setDisplayOptions] = useState(customizationOptions[0].values)
  const tabData:TabData[] = customizationOptions.map( (tab:TabData) => 
    ({label: tab.label, option: tab.option })
  )

  const handleOnClick = (option: OverrideOption["name"]) => {
    if (option) setActiveTab(option)
    const optionValues = getDisplayOptions(customizationOptions, option)
    setDisplayOptions(optionValues)
  }

  const getDisplayOptions = (customizationOptions:CustomizationOptions[], option:string) => {
    for(let i = 0; i <=  customizationOptions.length; i++) {
      if (customizationOptions[i].option === option) {
        return (
          customizationOptions[i].values
        )
      }
    }
    return customizationOptions[0].values
  }

  const updateAvatar = (optKey:string, value:string) => {
    if (avatarOptions) {
      setAvatarOptions({...avatarOptions, [optKey]: value})
    }
  }

  return (
    <div className="options_picker_container">
      <TabBar
        tabData = {tabData}
        handleOnClick = {(option:string) => handleOnClick(option as OverrideOption["name"])}
      />
      <div className="options_examples">
          {displayOptions.map((opt, i) => {
            return (
              <div
                key={ `{opt_${i}}`} 
                className="option_selection"
                onClick = {() => {updateAvatar(activeTab, opt)}}
                >
                <img
                  src={buildURL(avatarOptions, {name: activeTab, value: opt})}
                  alt="avatar"
                />
              </div>
            )
          })
          }
      </div>
    </div>  
  )
}

export default OptionsPicker