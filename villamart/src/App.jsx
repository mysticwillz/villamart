import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import NavSection from "./components/NavSection";
import Services from "./components/Services";
import Slide from "./components/Slide";

function App() {
  return (
    <main className="overflow-x-hidden">
      <NavSection />
      <Hero />
      <Slide />
      <Services />
      <AboutUs />
      {/* <ContactUs /> */}
    </main>
  );
}

export default App;
