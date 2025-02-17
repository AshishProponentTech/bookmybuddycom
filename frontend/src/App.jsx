import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import Dashboard from './Pages/Dashboard'
import SignIn from './Pages/SignIn'
import Header from './Components/Header'
import Footer from './Components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
