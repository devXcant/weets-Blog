import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './components/Header'
import Footercom from './components/Footer'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<PrivateRoutes />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footercom />
    </BrowserRouter>
  )
}

export default App