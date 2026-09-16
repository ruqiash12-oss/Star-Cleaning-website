import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import testimonialsData from "../../data/TestimonialsData";
import { motion } from "motion/react"
export default function TestimonialsCards(){
  const StarRating = () => {
  return (
    <div className="flex text-yellow-400 gap-0.5 my-3">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={20} /> 
      ))}
    </div>
  );
};
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
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} >
        
          <motion.div 
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true ,amount: 0.5 }}
        className=" flex flex-col items-center flex-1 bg-white p-6 rounded-lg shadow-md mx-10 md:mx-auto h-110 mb-20">
            <h1 className="text-7xl font-bold text-green-200 ">“</h1>
            <h2 className="text-xl font-bold mb-2">{testimonial.title}</h2>
            <p className="text-gray-600">{testimonial.feedback}</p>
            
            <div className="flex flex-col justify-center items-center mt-auto">
              <StarRating />
              <h3 className="mb-5 font-bold ">{testimonial.author} - {testimonial.role}</h3>
            
            
            </div>
            
          </motion.div>
          </SwiperSlide>
        ))}
      
      </Swiper>
  )

}