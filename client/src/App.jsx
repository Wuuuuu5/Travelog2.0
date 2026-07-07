import { Navbar } from './components/navbar.jsx'
import './globals.css'
import {Herosection} from './components/hero.jsx'
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Herosection />
      <div className="flex items-center justify-center py-20">
        <div className="text-center space-y-2">
        </div>
      </div>
    </div>
  )
}

export default App
