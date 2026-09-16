import Services from "../components/Services/Services";
import { motion } from "framer-motion";
export default function ServicesPage(){
  return(
    <motion.section 
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "none" }}
      
    >
    <Services />
    </motion.section>
  )
}