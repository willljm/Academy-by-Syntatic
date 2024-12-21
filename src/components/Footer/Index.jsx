import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useScrollTop } from '../../hooks/useScrollTop';
export default function Footer({ className = '' }) {
  useScrollTop(); // Agregar el hook aquí

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Contacto', path: '/contacts' },
    { name: 'FAQ', path: '/faq' }
  ];
  
  return (
    <footer className={`${className} relative py-16 overflow-hidden bg-gradient-to-b from-gray-900 to-black`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_100%,#ff6b0025_0,transparent_25%,transparent_100%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_100%,#ff6b0015_0,transparent_25%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-4 rounded-2xl backdrop-blur-sm inline-block hover:scale-105 transition-transform duration-300">
              <img 
                src="https://masterclass.syntactic.digital/wp-content/uploads/2021/09/logo-academia-1.png" 
                alt="Logo" 
                className="h-12 brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando vidas a través de la educación tecnológica. Construyendo el futuro, un estudiante a la vez.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}
                    className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="h-px w-5 bg-orange-500 transform origin-left transition-all duration-300 group-hover:w-7"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Calle Principal #123, Ciudad</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <FaPhoneAlt className="text-orange-500" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <FaEnvelope className="text-orange-500" />
                <span>info@academia.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Síguenos</h3>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-gray-800/50 p-3 rounded-lg hover:bg-orange-500 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Academia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

