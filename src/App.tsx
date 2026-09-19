// skill: frontend-react — App per checklist §5
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Portfolio from './components/Portfolio';
import Worlds from './components/Worlds';
import Characters from './components/Characters';
import Paper3D from './components/Paper3D';
import Program from './components/Program';
import Method from './components/Method';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Portfolio />
        <Worlds />
        <Characters />
        <Paper3D />
        <Program />
        <Method />
        <SocialProof />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}
