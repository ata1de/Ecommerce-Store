import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={router}/>
      <SideBar/>
      <Footer />
    </div>
  )
}

export default App
