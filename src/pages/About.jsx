import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Team from "../components/Team/OurTeam";
import HowItWorks from "../components/Steps/HowItWorks";
export default function About() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Team />
      <HowItWorks />
    </div>
  );
}