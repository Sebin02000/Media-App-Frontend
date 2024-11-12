import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import WatchHistory from './Pages/WatchHistory'
import Home from './Pages/home'
import PageNotFound from './Pages/PageNotFound'
function App() {

  return (
    <>
   <Header></Header>
   <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/watchhistory' element={<WatchHistory/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
