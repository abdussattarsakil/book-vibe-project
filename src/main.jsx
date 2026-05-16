import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'
import ListedBooks from './Context/BookContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ListedBooks>
      <RouterProvider router={router} />
    </ListedBooks>

  </StrictMode>,
)
