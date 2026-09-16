import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/Services";


function App() {


  return (
    <Routes>
  
      <Route path="/" element={<Layout />}>
        
        
        
        <Route path="about" element={<About />} />
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<ServicesPage />} />
        
      </Route> 
    </Routes>
  )
}

export default App
