import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import { FaChevronDown } from 'react-icons/fa'
import Header from '../components/Header/Index';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const faqs = [
    {
      question: "¿Qué requisitos necesito para empezar el bootcamp?",
      answer: "No necesitas experiencia previa en programación. Solo necesitas una computadora, dedicación y ganas de aprender. Nuestro programa está diseñado para principiantes."
    },
    {
      question: "¿Cuánto dura el bootcamp?",
      answer: "Depende de tus intereses. El programa intensivo tiene una duración de 4 meses, con clases presenciales tres días a la semana. Cada día incluye teoría y práctica con proyectos reales."
    },
    {
      question: "¿Qué tecnologías aprenderé?",
      answer: "Aprenderás las tecnologías más demandadas: HTML, CSS, JavaScript, React, Node.js, y más. El programa se actualiza constantemente según las necesidades del mercado."
    },
    {
      question: "¿Ofrecen ayuda para conseguir trabajo?",
      answer: "Sí, incluimos preparación para entrevistas técnicas, desarrollo de portafolio y conexiones con empresas asociadas para facilitar tu inserción laboral."
    },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      
      <motion.div 
        className="relative pt-24 pb-16 sm:pt-28"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="public/programmer-bg.jpg" 
            alt="Programmer background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <motion.div 
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Preguntas
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Frecuentes</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -rotate-1" />
            </span>
          </motion.h1>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <FaChevronDown 
                    className={`text-orange-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`px-6 transition-all duration-300 ${
                  openIndex === index ? 'py-4' : 'h-0 overflow-hidden'
                }`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-lg text-gray-600">
              ¿Tienes más preguntas? Escríbenos a{' '}
              <a 
                href="mailto:info@academia.com" 
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                info@academia.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.footer>
    </motion.div>
  )
}


