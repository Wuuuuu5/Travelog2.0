import Navbar from './components/navbar.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import './globals.css'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
