import { useContext, useState } from 'react';
import { AvatarContext } from '../../context/AvatarProvider';
import { COLOR_PALETTE } from '../../Services';
import '../../styles/UI/colorPicker.css';

interface ColorPickerProps {
  label: string;
  optionKey: string;
}

const ColorPicker = ({ label, optionKey }: ColorPickerProps) => {
  const { avatarOptions, setAvatarOptions } = useContext(AvatarContext);
  const [showPicker, setShowPicker] = useState(false);

  const handleOnClick = (optionKey: string, color: string) => {
    const _O = { ...avatarOptions };
    _O[optionKey] = color;
    setAvatarOptions(_O);
  };

  return (
    <div className='color_picker_container'>
      <div
        className='current_selection'
        style={{ backgroundColor: `#${avatarOptions[optionKey]}` }}
        onClick={() => setShowPicker(true)}
      ></div>
      {showPicker && (
        <div
          className='color_palette'
          onMouseLeave={() => setShowPicker(false)}
        >
          {COLOR_PALETTE.map((color: string, i: number) => {
            return (
              <div
                key={`color_${i}`}
                style={{ backgroundColor: `#${color}` }}
                onClick={() => {
                  handleOnClick(optionKey, color);
                }}
              ></div>
            );
          })}
        </div>
      )}
      <div className='color_picker_label'>{label}</div>
    </div>
  );
};

export default ColorPicker;
