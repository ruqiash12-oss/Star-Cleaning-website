import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Steps from "../../data/HowItWorks";
export default function StepsCards(){
  return(
    <Swiper
        
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1} 

        pagination={{ clickable: true, dynamicBullets: true }} 
        
      loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
         style={{
          "--swiper-pagination-color": "#36B864",    
          "--swiper-pagination-bullet-inactive-color": "#9ca3af",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",     
   
        }}
         className="mySwiper 
        "
      >
        {Steps.map((step) => (
          <SwiperSlide key={step.id} >
        
          <motion.div 
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true ,amount: 0.5 }}  className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative text-center mb-20">
            <span className="text-5xl font-extrabold text-green-600/20 absolute top-4 right-6">
              {step.step}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
          </SwiperSlide>
        ))}
      
      </Swiper>
  )

}