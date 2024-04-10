import Main from './Componentes/Main/Main'
import Banner from './Componentes/Banner/Banner'
import Footer from './Componentes/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Banner/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
