import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
      </main>
    </div>
  );
}

export default App;
