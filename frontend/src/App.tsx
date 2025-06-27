import Header from './components/Header'
import Hero from './pages/LandingPage/Hero'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="mt-40 flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
