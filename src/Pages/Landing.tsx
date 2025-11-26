import "../index.css";
import LandingHeader from "../Components/Landing/LandingHeader";
import LandingMain from "../Components/Landing/LandingMain";
import LandingCarousel from "../Components/Landing/LandingCarousel";  
import LandingAbout from "../Components/Landing/LandingAbout";
import LandingFeatures from "../Components/Landing/LandingFeatures";
import LandingFooter from "../Components/Landing/LandingFooter";

export default function Landing() {
  return (
    <div>
      <LandingHeader />

      <section id="home" className="h-screen">
        <LandingMain />
      </section>

      <LandingCarousel />

         <section id="about" className="h-screen">
        <LandingAbout />
      </section>

       <section id="features" className="h-screen">
        <LandingFeatures />
      </section>

   


      <section id="footer">
        <LandingFooter />
      </section> 
    </div>
  );
}
