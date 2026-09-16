import HeroSection from "../components/HeroSection"
import Services from "../components/Services/Services"
import AboutSection from "../components/AboutSection"
import Testimonials from "../components/Testimonials/Testimonials" 
import Team from "../components/Team/OurTeam"
import HowItWorks from "../components/Steps/HowItWorks"
import CTA from "../components/CTA"
export default function Home(){
  return(
    <section >
    <HeroSection />
    <Services />
    <AboutSection />
    <Testimonials />
    <Team />
    <HowItWorks />
    <CTA />
    
    </section>
  )
}