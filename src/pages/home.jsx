import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaCode, FaGraduationCap } from 'react-icons/fa';
import Experiencia from '../components/FeaturedServices';
import Testimonios from '../components/Testimonios';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/index.jsx';
import Header from '../components/Header/index.jsx';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]); 
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]); 

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
    >
      <Header />
      
      <motion.div 
        className="relative pt-24 pb-16 sm:pt-28"
        style={{ opacity, scale }}
      >
       

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} // Más rápido
            >
              <motion.h1 
                className="text-4xl sm:text-6xl font-bold text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                El mejor bootcamp presencial para{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">programadores</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -rotate-1" />
                </span>{' '}
                en Valledupar.
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-xl text-gray-600 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Aprende a programar con nosotros, transforma tu futuro en solo unos meses.
              </motion.p>

              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/contacts">
                  <button className="group relative overflow-hidden bg-orange-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <span className="flex items-center justify-center gap-2">
                      <FaRocket className="transform transition-transform group-hover:rotate-12" />
                      Inscríbete Ahora
                    </span>
                    <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                  </button>
                </Link>
                
                <Link to="/services">
                  <button className="group bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 border-orange-500 hover:bg-orange-50">
                    <span className="flex items-center justify-center gap-2">
                      <FaCode className="transform transition-transform group-hover:rotate-12" />
                      Explorar Cursos
                    </span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 relative mt-10 lg:mt-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} 
            >
              <div className="relative group perspective-1000">
                <motion.div 
                  className="relative transform transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src="https://academiadesarrollodesoftware.com/wp-content/uploads/2021/08/Group-1.png"
                    alt="Estudiantes programando" 
                    className="relative z-10 rounded-xl transform transition-all duration-700"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

      
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.4 }} 
      >
        <Experiencia />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.4 }}
      >
        <Testimonios />
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }} 
      >
        <Footer />
      </motion.footer>
    </motion.div>
  );
};

export default Home;