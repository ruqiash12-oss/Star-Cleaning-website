import testimonialImage from "../../assets/images/testimonials.jpg";
import TestimonialsCards from "./TestimonialsCards";
export default function Testimonials() {
  return (
    <section 
      className="w-full min-h-screen lg:bg-[image:var(--hero-img)] lg:bg-cover lg:bg-left lg:bg-center lg:bg-no-repeat bg-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-4 overflow-hidden"
      style={{ "--hero-img": `url(${testimonialImage})` }}
    >
      <div className="hidden lg:block lg:col-span-1" />

      <div className="w-full lg:col-span-2 col-span-1 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 mt-5">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            We take pride in our work and the satisfaction of our clients. Here are some testimonials from those who have experienced our exceptional cleaning services.
          </p>
          <div className="w-full overflow-hidden">
            <TestimonialsCards />
          </div>
        </div>
      </div>
    </section>  
  );
}
