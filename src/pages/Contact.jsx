import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaPhoneAlt,FaEnvelope,FaMapMarkedAlt,FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Contact(){
  return(
    <motion.section 
    initial={{ filter: "blur(10px)" }}
  animate={{ filter: "none" }} className="min-h-screen py-20 px-4 md:px-20">
      <motion.div 
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true ,amount: 0.5 }} className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-serif font-bold mb-6 text-gray-800">Contact Us</h2>
        <div className="flex  flex-col md:flex-row gap-20">
          <form className="space-y-4 w-full">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border-b-2 border-emerald-600  focus:outline-none focus:ring-2 focus:ring-emerald-600" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border-b-2 border-emerald-600  focus:outline-none focus:ring-2 focus:ring-emerald-600" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border-b-2 border-emerald-600  focus:outline-none focus:ring-2 focus:ring-emerald-600" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border-b-2 border-emerald-600  focus:outline-none focus:ring-2 focus:ring-emerald-600" required></textarea>
          </div>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 px-8 rounded-lg transition duration-300 cursor-pointer">Submit</button>
        </form>
        <div className='w-full md:w-1/2 flex flex-col gap-4 '>
          
          <h1 className='text-xl font-semibold'>Contact Information</h1>
          <p className="text-gray-600 mt-2">Feel free to reach out to us for any inquiries, feedback, or assistance. We are here to help and provide you with the best cleaning services experience.</p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center  gap-2 mb-2">
              <FaMapMarkedAlt className='text-emerald-600 w-5 h-5 ' />
              <p className="text-gray-600"> 123 Main Street, City, State, ZIP</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaPhoneAlt className='text-emerald-600 w-5 h-5 ' />
              <p className="text-gray-600"> (123) 456-7890</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaEnvelope className='text-emerald-600 w-5 h-5 ' />
              <p className="text-gray-600">info@fastcleaning.com</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaClock className='text-emerald-600 w-5 h-5 ' />
              <p className="text-gray-600"> Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <h1 className='text-xl font-semibold'>Follow Us </h1>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        </div>    
      </motion.div>
    </motion.section>
  )
}