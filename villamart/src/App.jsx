import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import NavSection from "./components/NavSection";
import Services from "./components/Services";

function App() {
  return (
    <main>
      <NavSection />
      <Hero />
      <Services />
      <AboutUs />
      <ContactUs />
    </main>
  );
}

export default App;
