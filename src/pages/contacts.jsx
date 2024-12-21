import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer/index.jsx';
import Header from '../components/Header/index.jsx';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: ''
  });

  const courses = [
    { 
      id: 1, 
      name: 'Desarrollo Frontend',
      price: 299,
      duration: '4 meses'
    },
    { 
      id: 2, 
      name: 'Backend Development',
      price: 349,
      duration: '5 meses'
    },
    { 
      id: 3, 
      name: 'Desarrollo Móvil',
      price: 399,
      duration: '6 meses'
    },
    { 
      id: 4, 
      name: 'Machine Learning',
      price: 449,
      duration: '6 meses'
    },
    { 
      id: 5, 
      name: 'DevOps',
      price: 379,
      duration: '5 meses'
    },
    { 
      id: 6, 
      name: 'Full Stack',
      price: 599,
      duration: '8 meses'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simular envío del formulario
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Enviando mensaje...',
        success: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
        error: 'Hubo un error al enviar el mensaje.',
      },
      {
        style: {
          position: 'center',
          background: '#333',
          color: '#fff',
        },
        success: {
          duration: 5000,
          icon: '🎉',
        },
      }
    );

    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      course: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Toaster position="top-right" />
      <Header />
      
      <div className="relative pt-24 pb-16 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="public/programmer-bg.jpg" 
            alt="Contact background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold text-gray-800 leading-tight text-center mb-12"
          >
            Ponte en{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Contacto</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -rotate-1" />
            </span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Formulario */}
            <motion.div 
              {...fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full outline-none px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full outline-none px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un curso</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.name} - ${course.price.toLocaleString('es-CO')} - {course.duration}
                      </option>
                    ))}
                  </select>
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <textarea
                    name="message"
                    placeholder="Tu mensaje"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full outline-none px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="group relative overflow-hidden bg-orange-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaPaperPlane className="transform transition-transform group-hover:rotate-12" />
                    Enviar mensaje
                  </span>
                  <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                </motion.button>
              </form>
            </motion.div>

            {/* Información de contacto */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h2>
              
              <div className="space-y-6">
                {[
                  { icon: FaMapMarkerAlt, text: "123 Calle Principal, Valledupar, Cesar" },
                  { icon: FaPhone, text: "+57 301 456 7890" },
                  { icon: FaEnvelope, text: "academia@syntactic.com" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-center space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="bg-orange-100 p-3 rounded-full"
                    >
                      <item.icon className="text-orange-500 text-xl" />
                    </motion.div>
                    <p className="text-gray-600">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 rounded-xl overflow-hidden shadow-lg"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transform transition-transform hover:scale-105 duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
