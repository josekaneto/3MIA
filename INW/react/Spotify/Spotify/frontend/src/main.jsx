import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetalhesArtista from './Components/DetalhesArtista.jsx'
import ConteudoPrincipal from './Components/ConteudoPrincipal/ConteudoPrincipal.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <ConteudoPrincipal />},
      {path: 'artistas/:id', element: <DetalhesArtista />}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

