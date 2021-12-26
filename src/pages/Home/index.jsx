import Designed from "layouts/Designed";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import LaptopSection from "layouts/LaptopSection";
import Navigation from "layouts/Navigation";
import StatePhone from "layouts/StatePhone";
import landingPage from "json/landingPage.json";

export default function Home() {
  return (
    <>
    <div className="atf">
      <Navigation />
        <Hero data={landingPage.hero}/>
    </div>
    <Designed data={landingPage.designed} />
    <StatePhone data={landingPage.statePhone} />
    <LaptopSection data={landingPage.laptopSection} />
    <Footer data={landingPage.footerMenu} />
    </>
  );
}
