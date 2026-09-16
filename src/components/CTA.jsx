import { motion } from "framer-motion";
export default function CTA() {
  return (
    <section>
      <div className="bg-emerald-600 text-white py-20 px-4 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience a Cleaner Space?
          </h2>
          <p className="text-base md:text-lg mb-8">
            Contact us today to schedule your cleaning service and enjoy a spotless, fresh environment.
          </p>
          <motion.button  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')} className="bg-white text-emerald-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-md cursor-pointer">
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
}