import {NavLink }from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../assets/images/Vector.png"
import {motion} from "motion/react"
export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="mr-2 h-11 w-7" />
            <div className="flex flex-col ">
              
              <h1 className='text-white'><span className="text-emerald-600 ">Star</span>Cleaning</h1>
              <p className="text-xs font-medium text-[#4D4D4D]">Cleaning Services company</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        <div className="flex  space-x-10 items-center gap-4">
          <ul className=" space-y-4 text-white">
          <li><NavLink 
            end 
            to="/" 
            className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>
            Home
          </NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>About</NavLink></li>
          <li><NavLink to="/service" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Service</NavLink></li>

        </ul>
        <ul className="space-y-4">
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Contact</NavLink></li>
          <li><NavLink to="/#" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Privacy Policy</NavLink></li>
          <li><NavLink to="/#" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Terms of Service</NavLink></li>
        </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <motion.button  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')} className="md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 w-full rounded  mt-4 md:mt-0 cursor-pointer">Get Started</motion.button>
          <motion.button  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')} className="md:inline-block border border-emerald-600  text-emerald-600 px-6 py-2 rounded hover:bg-gray/20 hover:text-white mt-4 md:mt-0 cursor-pointer w-full"> <NavLink to="/service" className={({ isActive }) => isActive ? "text-emerald-600" : "text-gray-400 hover:text-emerald-600"}>View Services</NavLink></motion.button>
        <span className="text-sm">&copy; {new Date().getFullYear()} CleanCo. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
