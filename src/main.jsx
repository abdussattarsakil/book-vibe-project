import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-amber-300 btn btn-primary'>
      Hello Sakil tailwind & daisyUi setup ok!!
    </h1>
  </StrictMode>,
)
