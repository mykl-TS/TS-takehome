import { useState } from 'react'
import { useAvatarContext } from '../../context/AvatarContext'
import { COLOR_PALETTE } from '../../Services'
import { AvatarOptions } from '../../Types'
import '../../styles/UI/colorPicker.css'

interface Props {
  label: string
  optionKey: string
}

const ColorPicker = (props: Props) => {
  const { label, optionKey } = props
  const { avatarOptions, setAvatarOptions } = useAvatarContext()
  const [showPicker, setShowPicker] = useState(false)
  const palette = COLOR_PALETTE
  const color = `#${avatarOptions?.[optionKey as keyof AvatarOptions]}`

  const handleOnClick = (optionKey: string, color: string) => {
    if (avatarOptions) {
      setAvatarOptions({ ...avatarOptions, [optionKey]: color })
    }
  }

  return (
    <>
      <div className="color_picker_container">
        <div
          className="current_selection"
          style={{ backgroundColor: color }}
          onClick={() => setShowPicker(true)}
        ></div>
        {showPicker && (
          <div className="color_palette" onMouseLeave={() => setShowPicker(false)}>
            {palette.map((color: string, i: number) => {
              return (
                <div
                  key={`color_${i}`}
                  style={{ backgroundColor: `#${color}` }}
                  onClick={() => {
                    handleOnClick(optionKey, color)
                  }}
                ></div>
              )
            })}
          </div>
        )}
        <div className="color_picker_label">{label}</div>
      </div>
    </>
  )
}

export default ColorPicker
