import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

export const LayoutPage = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <SideBar/>
      <Footer />
    </div>
  )
}
