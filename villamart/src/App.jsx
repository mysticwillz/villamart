import { useRef } from "react";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavSection from "./components/NavSection";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Slide from "./components/Slide";

function App() {
  const services = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };
  return (
    <main className="overflow-x-hidden ">
      <NavSection
        scrollToSection={scrollToSection}
        services={services}
        about={about}
        contact={contact}
        home={home}
      />

      <Hero />
      <Slide />
      <Services services={services} />
      <AboutUs about={about} />
      <ContactUs contact={contact} />
      <Footer />
    </main>
  );
}

export default App;
