import StepsCards from "./StepsCards";
export default function HowItWorks() {
    return (
    <section className=" py-20 px-4 md:px-20 bg-white ">
      <div className="text-center max-w-2xl  mb-16 md:text-start">
        <h2 className="text-lg font-medium tracking-widest text-gray-500 uppercase italic font-serif mb-2">
          Simple Process
        </h2>
        <h1 className="text-3xl md:text-4xl text-gray-900 font-poppins font-bold">
          How It Works
        </h1>
        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
          Getting your space professionally cleaned has never been this effortless. Follow these three simple steps.
        </p>
      </div>
      <StepsCards />
      </section>
    )
}
