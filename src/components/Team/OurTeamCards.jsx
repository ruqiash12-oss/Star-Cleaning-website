import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "motion/react"
import TeamData from "../../data/Team";
export default function TeamCards(){
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
        {TeamData.map((member) => (
          <SwiperSlide key={member.id} >
        
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true ,amount: 0.5 }}
            className="  h-70  bg-white p-6 rounded-lg shadow-md  mb-20">
            <div className="flex items-center mb-4 gap-5" >
              <img src={member.img.src} alt={member.name} className="w-20   h-20 rounded-full  object-cover  " />
              <div>
                 <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                <h3 className="text-gray-600 mb-2">{member.service}</h3>
              </div>
            </div>
            <p className="text-gray-600">{member.description}</p>
            
            
          </motion.div>
          </SwiperSlide>
        ))}
      
      </Swiper>
  )

}