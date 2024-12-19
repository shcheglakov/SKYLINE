import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/main/Home'
import Service1 from './pages/service1/Service1'
import Info from './pages/info/Info'
import Service2 from './pages/service2/Service2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service1' element={<Service1 />} />
        <Route path='/service2' element={<Service2 />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
