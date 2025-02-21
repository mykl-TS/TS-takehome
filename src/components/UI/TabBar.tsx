import { TabData } from '../../Types';
import '../../styles/UI/tabBar.css';
import { useState } from 'react';

interface Props {
  tabData: TabData[];
  handleOnClick: (e?: string) => void;
}

const TabBar = (props: Props) => {
  const { tabData, handleOnClick } = props;
  const [activeTab, setActiveTab] = useState(tabData[0].option);

  // Naming here could be improved instead of onClick
  // TODO: Have event be passed down as an argument and target value passed down setActiveTab and handleOnClick
  const onClick = () => {
    const et: any = event?.target;
    setActiveTab(et.value);
    handleOnClick(et.value);
  };

  return (
    <>
      <div className='tab'>
        {tabData.map((tab, i) => {
          const isActive = activeTab === tab.option;
          return (
            <button
              key={`tab_${i}`}
              value={tab.option}
              className={isActive ? 'active' : ''}
              onClick={() => onClick()}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TabBar;
