import { createContext, PropsWithChildren, useState } from 'react';
import { buildURL, defaultRobot } from '../Services';
import { useOnUpdateAvatarList } from '../Hooks';

export const AvatarContext = createContext({});
export const AvatarURLContext = createContext('');
export const AvatarListContext = createContext({});

const AvatarProvider = ({ children }: PropsWithChildren) => {
  const [avatarOptions, setAvatarOptions] = useState(defaultRobot);
  const { getAvatars } = useOnUpdateAvatarList();
  const [avatarList, setAvatarList] = useState(getAvatars);

  return (
    <AvatarContext.Provider value={{ avatarOptions, setAvatarOptions }}>
      <AvatarURLContext.Provider value={buildURL(avatarOptions)}>
        <AvatarListContext.Provider value={{ avatarList, setAvatarList }}>
          {children}
        </AvatarListContext.Provider>
      </AvatarURLContext.Provider>
    </AvatarContext.Provider>
  );
};

export default AvatarProvider;
