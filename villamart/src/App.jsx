import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavSection from "./components/NavSection";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Slide from "./components/Slide";

function App() {
  return (
    <main className="overflow-x-hidden">
      <NavSection />

      <Hero />
      <Slide />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
