import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Index';
import Footer from '../components/Footer';
import { FaUsers, FaLightbulb, FaHeart, FaStar, FaBriefcase, FaDollarSign, FaChartLine } from 'react-icons/fa';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const team = [
    {
      name: "Juan Pérez",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2Zlc29yfGVufDB8fDB8fHww"
    },
    {
      name: "María García",
      role: "Head Instructor",
      image: "https://plus.unsplash.com/premium_photo-1661630441144-ed00f4e667f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHByb2Zlc29yfGVufDB8fDB8fHww"
    },
    {
      name: "Carlos Rodríguez",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWJyZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "David López",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlfGVufDB8fDB8fHww"
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

        <motion.section 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Conoce Nuestra
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Historia</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -rotate-1" />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Somos una academia comprometida con la excelencia en la educación y el desarrollo personal de nuestros estudiantes.
          </motion.p>
        </motion.section>

        {/* Misión, Visión y Valores */}
        <motion.section 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <FaLightbulb className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Misión</h3>
              <p className="text-gray-600">
                Proporcionar educación de calidad y accesible para todos, transformando vidas a través del conocimiento.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <FaStar className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Visión</h3>
              <p className="text-gray-600">
                Ser líderes en educación innovadora, formando profesionales preparados para los retos del futuro.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <FaHeart className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Excelencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Innovación</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Compromiso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Integridad</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Equipo */}
        <motion.section 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-5xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestro
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Equipo</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -rotate-1" />
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="p-4"
                  whileHover={{ backgroundColor: "#fff5eb" }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
   
        <div className="w-full h-32 bg-gradient-to-b from-gray-50 to-orange-50"></div>

        {/* Nueva sección de Beneficios con más separación */}
        <motion.section 
          className="py-24 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ha muchos ya les ha cambiado la vida...
              </motion.h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
              >
                <div className="h-2 bg-orange-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <FaBriefcase className="text-3xl text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Trabajo estable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Apenas termines este curso, entrarás en el grupo de personas que tienen una mejor estabilidad laboral en todo el mercado.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
              >
                <div className="h-2 bg-orange-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <FaDollarSign className="text-3xl text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mejores ingresos</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Los desarrolladores de páginas web son los empleos que mejor ganan en todo el mundo.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
              >
                <div className="h-2 bg-orange-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <FaChartLine className="text-3xl text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Un cambio de rumbo</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este curso hará que cambies tu perspectiva y toda tu vida en general.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Separador visual inferior */}
        <div className="w-full h-32 bg-gradient-to-tr from-gray-50 to-orange-50 opacity-50"></div>
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
  );
}