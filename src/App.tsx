import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MediaGallery from './components/MediaGallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Location from './components/Location';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold animate-shimmer bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 hover:scale-110">NCAR</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-secondary hover:text-primary transition">Início</a>
              <a href="#about" className="text-secondary hover:text-primary transition">Sobre</a>
              <a href="#services" className="text-secondary hover:text-primary transition">Serviços</a>
              <a href="#gallery" className="text-secondary hover:text-primary transition">Galeria</a>
              <a href="#reviews" className="text-secondary hover:text-primary transition">Avaliações</a>
              <a href="#contact" className="text-secondary hover:text-primary transition">Contato</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+5511999999999" className="flex items-center text-primary">
                <Phone className="w-5 h-5 mr-2" />
                <span className="hidden md:block">(11) 2909-0730</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <MediaGallery />
        <Reviews />
        <Contact />
        <Location />
      </main>

      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">NCAR</h3>
              <p className="text-secondary">Seu carro em boas mãos desde 1995.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Contato</h3>
              <div className="space-y-2">
                <p className="flex items-center text-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 2909-0730
                </p>
                <p className="flex items-center text-secondary">
                  <Mail className="w-4 h-4 mr-2" />
                </p>
                <p className="flex items-center text-secondary">
                  <MapPin className="w-4 h-4 mr-2" />
                  R. Eduardo Leopoldo, 85 - Vila Guilherme
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Horário</h3>
              <p className="text-secondary">Segunda a Sexta: 9h às 18h</p>
              <p className="text-secondary">Sábado: 9h às 14h</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-light text-center text-secondary">
            <p>&copy; {new Date().getFullYear()} NCAR. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;