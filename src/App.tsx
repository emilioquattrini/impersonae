import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ArrowDown, Sparkles, Users, BookOpen, Mail, Instagram, ChevronUp } from 'lucide-react';

interface Card {
  id: string;
  name: string;
  image: string;
  description: string;
}

const cards: Card[] = [
  { id: 'tribal', name: 'Tribal', image: '/images/card-tribal.jpg', description: 'Connessione primitiva e istintiva con la natura' },
  { id: 'reflective', name: 'Reflective', image: '/images/card-reflective.jpg', description: 'Introspezione e contemplazione profonda' },
  { id: 'nocturnal', name: 'Nocturnal', image: '/images/card-nocturnal.jpg', description: 'Mistero e magia delle ore notturne' },
  { id: 'exotic', name: 'Exotic', image: '/images/card-exotic.jpg', description: 'Fascino lontano e culture diverse' },
  { id: 'mother', name: 'Mother', image: '/images/card-mother.jpg', description: 'Nutrimento, cura e protezione' },
  { id: 'cyborg', name: 'Cyborg', image: '/images/card-cyborg.jpg', description: 'Fusione tra umano e tecnologia' },
  { id: 'diva', name: 'Diva', image: '/images/card-diva.jpg', description: 'Glamour, spettacolo e autenticità' },
  { id: 'hypnotic', name: 'Hypnotic', image: '/images/card-hypnotic.jpg', description: 'Fascino magnetico e trance creativa' },
  { id: 'loyal', name: 'Loyal', image: '/images/card-loyal.jpg', description: 'Lealtà, dedizione e affidabilità' },
  { id: 'nostalgia', name: 'Nostalgia', image: '/images/card-nostalgia.jpg', description: 'Memoria, ricordo e tempo che fu' },
  { id: 'oceanic', name: 'Oceanic', image: '/images/card-oceanic.jpg', description: 'Profondità, flusso e immensità blu' },
  { id: 'overthinker', name: 'Overthinker', image: '/images/card-otherthinker.jpg', description: 'Analisi profonda e riflessione costante' },
  { id: 'pokerface', name: 'Pokerface', image: '/images/card-pokerface.jpg', description: 'Controllo emotivo e strategia' },
  { id: 'juggler', name: 'Juggler', image: '/images/card-juggler.jpg', description: 'Equilibrio, abilità e multitasking' },
];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/images/logo-impersonae.png" alt="Impersonae" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection(heroRef)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection(cardsRef)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Le Carte
              </button>
              <button onClick={() => scrollToSection(cardsRef)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Workshop
              </button>
              <button onClick={() => scrollToSection(cardsRef)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Contatti
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white"
      >
        {/* Floating shapes background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute top-40 right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          />
          <div 
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <img 
              src="/images/logo-impersonae-header.png" 
              alt="Impersonae" 
              className="h-24 md:h-32 w-auto mx-auto mb-8"
            />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 animate-fade-in-up stagger-1">
            Impersonae
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light animate-fade-in-up stagger-2">
            Un gioco per grandi e piccini
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-3">
            Carte antropomorfe per scoprire le tante identità e personalità che ognuno di noi può avere.
            Design-telling, workshops e persona-scape di Chiara Zhu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
            <button 
              onClick={() => scrollToSection(cardsRef)}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Scopri le Carte
            </button>
            <button 
              onClick={() => scrollToSection(cardsRef)}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-medium hover:border-gray-400 transition-all"
            >
              <Users className="w-5 h-5 mr-2" />
              I Workshop
            </button>
          </div>

          <div className="mt-20 animate-fade-in-up stagger-5">
            <img 
              src="/images/cards-spread.jpg" 
              alt="Carte Impersonae" 
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full object-cover"
            />
          </div>
        </div>

        <button 
          onClick={() => scrollToSection(cardsRef)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </button>
      </section>

      {/* Cards Gallery Section */}
      <section 
        ref={cardsRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Le Carte
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ogni carta rappresenta un archetipo, un aspetto della personalità che può emergere in momenti diversi della nostra vita.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="group cursor-pointer card-hover"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{card.description}</p>
                  </div>
                </div>
                <h3 className="mt-4 text-center font-display text-xl font-semibold text-gray-900 capitalize">
                  {card.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Workshop Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Workshop & Design-Telling
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Impersonae è un progetto di design-telling che utilizza le carte antropomorfe come strumento 
                per esplorare le diverse identità e personalità che ognuno di noi può esprimere.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Attraverso workshop interattivi e sessioni di persona-scape, guidati dalla creatrice Chiara Zhu, 
                i partecipanti scoprono nuovi modi per raccontarsi e comprendere gli altri.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-100 rounded-xl">
                    <BookOpen className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Storytelling</h4>
                    <p className="text-sm text-gray-600">Narrazione creativa attraverso le carte</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Users className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Team Building</h4>
                    <p className="text-sm text-gray-600">Attività di gruppo e connessione</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-rose-100 rounded-xl">
                    <Sparkles className="w-6 h-6 text-rose-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Creatività</h4>
                    <p className="text-sm text-gray-600">Espressione artistica e immaginazione</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    <Mail className="w-6 h-6 text-indigo-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contatti</h4>
                    <p className="text-sm text-gray-600">info@impersonae.it</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/workshop.jpg"
                alt="Workshop Impersonae"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <p className="font-display text-lg font-semibold text-gray-900 mb-2">
                  "Ogni carta è uno specchio"
                </p>
                <p className="text-sm text-gray-600">
                  — Chiara Zhu, creatrice di Impersonae
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Scopri le tue identità
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Prenota un workshop o richiedi il mazzo di carte per iniziare il tuo viaggio di auto-scoperta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Contattaci
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-medium hover:border-white transition-all">
              <Instagram className="w-5 h-5 mr-2" />
              Seguici su Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/logo-impersonae.png" alt="Impersonae" className="h-12 w-auto mb-4 opacity-80" />
              <p className="text-sm">
                Design-telling of self-narration. Un progetto di Chiara Zhu.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Link</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection(heroRef)} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection(cardsRef)} className="hover:text-white transition-colors">Le Carte</button></li>
                <li><button onClick={() => scrollToSection(cardsRef)} className="hover:text-white transition-colors">Workshop</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contatti</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@impersonae.it</li>
                <li className="flex items-center"><Instagram className="w-4 h-4 mr-2" /> @impersonae</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Impersonae. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Card Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.name}
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
              <h3 className="font-display text-3xl font-bold text-white capitalize mb-2">
                {selectedCard.name}
              </h3>
              <p className="text-white/90 text-lg">
                {selectedCard.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronUp className="w-6 h-6 rotate-45" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
