import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Catalog from './components/Catalog.jsx';
import Events from './components/Events.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (bookId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [bookId]: Math.max(0, newQuantity),
    }));
  };

  const handleClearBag = () => {
    setQuantities({});
  };

  const totalBagCount = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Header bagCount={totalBagCount} />
      <main id="main-content" className="grow">
        <Hero />
        <Catalog
          quantities={quantities}
          onQuantityChange={handleQuantityChange}
          onClearBag={handleClearBag}
        />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
