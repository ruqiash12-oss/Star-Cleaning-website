import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "motion/react"
import servicesData from "../../data/Services";
export default function Cards(){
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
        {servicesData.map((service) => (
          <SwiperSlide key={service.id} >
        
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true ,amount: 0.5 }}
            className=" flex flex-col flex-1  bg-white p-6 rounded-lg shadow-md mx-10 md:mx-auto md:h-140 mb-20">
            <img src={service.image.src} alt={service.title} className="w-auto h-auto mx-auto object-cover  mb-4" />
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <div className="flex justify-end items-end mt-auto">
              <button className=" text-white px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 mt-4 cursor-pointer">Book now</button>
            </div>
            
          </motion.div>
          </SwiperSlide>
        ))}
      
      </Swiper>
  )

}