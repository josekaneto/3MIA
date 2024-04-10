import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './Pages/Sobre.jsx'
import Servico from './Pages/Servico.jsx'
import Contato from './Pages/Contato.jsx'
import Main from './Componentes/Main/Main.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index:true, element: <Main/>},
      {path: '/sobre', element: <Sobre/>},
      {path: '/servicos', element: <Servico/>},
      {path: '/contato', element: <Contato />},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
