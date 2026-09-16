import HeroImage from "../assets/images/HeroSection.png"
import { NavLink } from 'react-router-dom';
import { motion } from "motion/react"
export default function HeroSection(){
  return(
    <section className="w-full h-screen bg-none md:bg-[image:var(--hero-img)] md:bg-cover md:bg-center md:bg-no-repeat mb-100 md:mb-0"
      style={{ "--hero-img": `url(${HeroImage})` }} >
        <img src={HeroImage} alt="Hero" className="md:hidden  h-full object-cover object-[80%_top]" />
        <motion.div 
         animate={{ opacity: [0, 1], y: [-50, 0] }}
         className="flex flex-col items-center text-center md:items-start p-4 md:pt-30 h-full md:text-start  md:pl-30 md:w-1/2">
        
          <p className="text-lg md:text-xl text-black mb-4">Quality cleaning services for your home and office</p>
          <h1 className="text-2xl  md:text-6xl font-bold text-black mb-4">Specialized, efficient, and thorough cleaning services</h1>
          <p className="text-lg md:text-xl text-black mb-8">We provide Performing cleaning tasks with precision and care.</p>
          <div className="flex flex-col md:flex-row w-full  space-x-4">
          <motion.button  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')} className="md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 w-full md:w-auto rounded  mt-4 md:mt-0 cursor-pointer">Get Started</motion.button>
          <motion.button  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')} className="md:inline-block border border-emerald-600  text-emerald-600 px-6 py-2 rounded hover:bg-gray/20 hover:text-white mt-4 md:mt-0 cursor-pointer"> <NavLink to="/service" className={({ isActive }) => isActive ? "text-emerald-600" : "text-gray-400 hover:text-emerald-600"}>View Services</NavLink></motion.button>
        </div>
        </motion.div>
    </section>
  )
}