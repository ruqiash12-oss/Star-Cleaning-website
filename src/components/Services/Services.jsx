import Cards from "./ServicesCards";
export default function Services() {
  return (
    <section className="py-20 px-4 md:px-20 bg-gray-100 min-h-screen">
      <h2 className="block text-lg font-medium tracking-widest text-gray-500 uppercase italic font-serif text-center mb-5">Professional Cleaning Services</h2>
      <h1 className="text-3xl text-gray-900 font-poppins text-center mb-7 font-bold ">Precision Cleaning for Specialized Environments</h1>
      <p className=" max-w-2xl mx-auto text-center text-gray-600 mb-10 ">We deploy specific methods and advanced disinfectants for high-risk and sensitive areas, ensuring the highest standards of cleanliness and safety.</p>
      <Cards />
    </section>
  );
}
    