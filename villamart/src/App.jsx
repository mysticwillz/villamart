import Hero from "./components/Hero";
import NavSection from "./components/NavSection";

function App() {
  return (
    <main className="flex items-center flex-col min-h-screen">
      <NavSection />
      <Hero />
    </main>
  );
}

export default App;
