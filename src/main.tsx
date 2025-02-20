import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import AvatarWrapper from './wrapper/AvatarWrapper'
import AvatarURLWrapper from './wrapper/AvatarURLWrapper'
import AvatarListWrapper from './wrapper/AvatarListWrapper'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AvatarWrapper>
      <AvatarURLWrapper>
        <AvatarListWrapper>
          <App />
        </AvatarListWrapper>
      </AvatarURLWrapper>
    </AvatarWrapper>
  </StrictMode>,
)
