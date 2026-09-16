import menCleanigImage from "../assets/images/manCleanig.jpg";
import womenCleaningImage from "../assets/images/womenCleaning.jpg";
import { motion } from "motion/react";
export default function AboutSection() {
  return (
    <motion.section 
    initial={{ filter: "blur(10px)" }}
  animate={{ filter: "none" }}
    className="py-16 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
      <motion.div 
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true ,amount: 0.5 }}
      className="max-w-xl">
        <span className="block text-sm font-medium tracking-widest text-gray-500 uppercase italic font-serif mb-3">
          Affordable cleaning solutions
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Your Trusted Partner for Flawless Spaces
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          We combine modern cleaning techniques with a dedicated professional crew to ensure a spotless, healthy, and welcoming environment for your home or business.
        </p>
        <motion.button  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md cursor-pointer">
          Get a Personalized Quote
        </motion.button>
      </motion.div>
      <motion.div 
          initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true ,amount: 0.5 }}
      className="relative w-full max-w-md md:max-w-lg">
        <img 
          src={menCleanigImage }
          alt="Professional Cleaning" 
          className="rounded-3xl w-full h-[400px] object-cover shadow-xl"
        />
        <img 
          src={womenCleaningImage}
          alt="Friendly Cleaner" 
          className="absolute -bottom-8 -left-8 w-44 h-44 md:w-52 md:h-52 rounded-3xl object-cover border-4 border-white shadow-2xl hidden sm:block"
        />
      </motion.div>
    </motion.section>
  );
}