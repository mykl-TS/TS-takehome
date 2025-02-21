import { useContext, useState } from 'react';
import { AvatarContext } from '../context/AvatarProvider';
import { buildURL, customizationOptions } from '../Services';
import '../styles/optionsPicker.css';
import { CustomizationOptions, TabData } from '../Types';
import TabBar from './UI/TabBar';

const OptionsPicker = () => {
  const { avatarOptions, setAvatarOptions } = useContext(AvatarContext);
  const [activeTab, setActiveTab] = useState(customizationOptions[0].option);
  const [displayOptions, setDisplayOptions] = useState(
    customizationOptions[0].values
  );
  const tabData: TabData[] = customizationOptions.map((tab: TabData) => ({
    label: tab.label,
    option: tab.option,
  }));

  const handleOnClick = (option: string) => {
    if (option) setActiveTab(option);
    const optionValues = getDisplayOptions(customizationOptions, option);
    setDisplayOptions(optionValues);
  };

  const getDisplayOptions = (
    customizationOptions: CustomizationOptions[],
    option: string
  ) => {
    // TODO: Something like a find method can be used here to get the first value in immutable way
    for (let i = 0; i <= customizationOptions.length; i++) {
      if (customizationOptions[i].option === option) {
        return customizationOptions[i].values;
      }
    }
    return customizationOptions[0].values;
  };

  // TODO: Update to not directly assign object property
  const updateAvatar = (optKey: string, value: string) => {
    const _O = { ...avatarOptions };
    _O[optKey] = value;
    setAvatarOptions(_O);
  };

  return (
    <div className='options_picker_container'>
      <TabBar tabData={tabData} handleOnClick={handleOnClick} />
      <div className='options_examples'>
        {displayOptions.map((opt, i) => {
          return (
            <div
              key={`{opt_${i}}`}
              className='option_selection'
              onClick={() => {
                updateAvatar(activeTab, opt);
              }}
            >
              <img
                src={buildURL(avatarOptions, { name: activeTab, value: opt })}
                alt='avatar'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionsPicker;
