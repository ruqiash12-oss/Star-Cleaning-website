import TeamCards from "./OurTeamCards";
export default function Team(){
  return(
    <section className="py-20 px-4 md:px-20 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-10 border-b border-gray-300">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-lg font-medium tracking-widest text-gray-500 uppercase italic font-serif mb-2">
            Our Team
          </h2>
          <h1 className="text-3xl md:text-4xl text-gray-900 font-poppins font-bold">
            Meet Our Experts
          </h1>
        </div>
        <div className="hidden md:block w-px h-24 bg-gray-300 mx-8"></div>
        <div className="md:w-1/2">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Get to know the talented individuals who make our cleaning services exceptional. 
            We take pride in our rigorous training, attention to detail, and unwavering commitment 
            to delivering immaculate, healthy, and refreshing spaces for every home and office.
          </p>
        </div>
      </div>
      <TeamCards />
    </section>
  )
}