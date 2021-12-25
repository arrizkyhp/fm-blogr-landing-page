import Designed from "layouts/Designed";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import LaptopSection from "layouts/LaptopSection";
import Navigation from "layouts/Navigation";
import StatePhone from "layouts/StatePhone";

export default function Home() {
  return (
    <>
    <div className="atf">
      <Navigation />
        <Hero />
    </div>
    <Designed />
    <StatePhone />
    <LaptopSection />
    <Footer />
    </>
  );
}
