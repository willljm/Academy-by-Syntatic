import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaRocket, FaTools, FaQuestionCircle, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Bloquear scroll completamente
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar scroll
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { icon: FaHome, text: 'Home', path: '/' },
    { icon: FaInfoCircle, text: 'About', path: '/about' },
    { icon: FaTools, text: 'Services', path: '/services' },
    { icon: FaEnvelope, text: 'Contacts', path: '/contacts' },
    { icon: FaQuestionCircle, text: 'FAQ', path: '/faq' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out shadow
      ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg py-4' : 'bg-white py-3'}
    `}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative group">
            <img 
              className="h-14 transform transition-all duration-300 group-hover:scale-110" 
              src="https://masterclass.syntactic.digital/wp-content/uploads/2021/09/logo-academia-1.png"
              alt="Logo" 
            />
            <div className="absolute inset-0 -bottom-2 scale-x-0 h-0.5 bg-orange-500 transform transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

          {/* Menú de escritorio */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-9">
              {menuItems.map(({ icon: Icon, text, path }) => (
                <li key={text}>
                  <Link
                    to={path}
                    className={`group relative flex items-center gap-2 text-gray-700 font-medium text-base transition-colors duration-300 hover:text-orange-500 ${
                      location.pathname === path ? 'text-orange-500' : ''
                    }`}
                  >
                    <Icon className="transform transition-transform group-hover:scale-110 group-hover:rotate-12" />
                    {text}
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón del menú móvil */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <FaTimes size={24} className="text-orange-500" /> : <FaBars size={24} />}
          </button>

          {/* Botón CTA Desktop */}
          <div className="hidden md:block">
            <Link 
              to="/contacts"
              className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2.5 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl inline-block"
            >
              <span className="flex items-center gap-2 relative z-10">
                <FaRocket className="transform transition-transform group-hover:rotate-12" />
                Empieza ya!
              </span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div 
        className={`fixed right-0 w-64 bg-white shadow-2xl md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          top: 0,
          height: '100%',
          zIndex: 45
        }}
      >
        <div className="p-6 pt-20 relative h-full overflow-y-auto pb-24">
          {/* Botón de cerrar */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group"
            aria-label="Cerrar menú"
          >
            <FaTimes 
              size={24} 
              className="text-gray-600 group-hover:text-orange-500 transform transition-transform duration-300 group-hover:rotate-180" 
            />
          </button>

          <ul className="space-y-4">
            {menuItems.map(({ icon: Icon, text, path }) => (
              <li key={text}>
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                >
                  <Icon className="text-orange-500 transform transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  <span className="font-medium text-gray-700 group-hover:text-orange-500 transition-colors duration-300">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            to="/contacts"
            onClick={() => setIsMenuOpen(false)}
            className="w-full mt-6 relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2.5 px-8 rounded-full shadow-lg transition-all duration-300 inline-block text-center"
          >
            <span className="flex items-center justify-center gap-2 relative z-10">
              <FaRocket className="transform transition-transform group-hover:rotate-12" />
              Empieza ya!
            </span>
            <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>
      </div>

      {/* Overlay del menú móvil */}
      <div 
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 backdrop-blur-sm ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsMenuOpen(false)} 
        style={{ zIndex: 41 }} 
      />
    </header>
  );
};

export default Header;