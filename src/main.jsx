import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './styles/mediaQuerys.scss'
import './styles/animations.css'
import './styles/reset.css'
import './styles/index.scss'
import App from './App.jsx'

let root = document.getElementById('root');
createRoot(root).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>,
)
