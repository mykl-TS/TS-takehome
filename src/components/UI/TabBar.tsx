import { TabData } from '../../Types'
import '../../styles/UI/tabBar.css'
import { useState } from 'react'

interface Props {
  tabData: TabData[]
  handleOnClick: (e: string) => void
}

const TabBar = (props: Props) => {
  const { tabData, handleOnClick } = props
  const [activeTab, setActiveTab] = useState(tabData[0].option)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const et = event.target as HTMLButtonElement
    setActiveTab(et.value)
    handleOnClick(et.value)
  }

  return (
    <>
      <div className="tab">
        {tabData.map((tab, i) => {
          const isActive = activeTab === tab.option
          return (
            <button
              key={`tab_${i}`}
              value={tab.option}
              className={isActive ? 'active' : ''}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClick(event)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default TabBar
