import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode's double-invoke conflicts with GSAP pin-spacer DOM wrapping.
// Disabled intentionally — production would run without double-invoke anyway.
createRoot(document.getElementById('root')).render(<App />)
