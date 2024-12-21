import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer/index.jsx';
import Header from '../components/Header/index.jsx';
import { FaCode, FaDatabase, FaMobile, FaRobot, FaGlobe, FaTools, FaArrowRight, 
         FaInfo, FaClock, FaCalendar, FaBook, FaCheckCircle, FaStar, FaGem, FaTimes } from 'react-icons/fa';

export default function Services() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: FaCode,
      title: "Desarrollo Frontend",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60",
      description: "Aprende a crear interfaces modernas y responsive con React, HTML5, CSS3 y JavaScript.",
      price: "$299",
      features: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"],
      fullDescription: "Un curso completo donde aprenderás desde los fundamentos hasta técnicas avanzadas de desarrollo frontend.",
      duration: "4 meses",
      schedule: "Clases 3 veces por semana",
      syllabus: [
        "Fundamentos de HTML5 y CSS3",
        "JavaScript Moderno y ES6+",
        "React.js y Hooks",
        "Estado y Props",
        "Gestión de Estado con Redux",
        "Consumo de APIs",
        "Despliegue y Optimización"
      ],
      requirements: [
        "Conocimientos básicos de programación",
        "Computadora con mínimo 8GB RAM",
        "Conexión estable a internet"
      ],
      benefits: [
        "Certificado al completar",
        "Acceso de por vida",
        "Proyectos reales",
        "Mentorías personalizadas"
      ]
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800&auto=format&fit=crop&q=60",
      description: "Domina el desarrollo backend con Node.js, Express y bases de datos SQL y NoSQL.",
      price: "$349",
      features: ["Node.js", "Express", "MongoDB", "API REST"],
      fullDescription: "Aprende a construir servidores robustos y APIs escalables con las últimas tecnologías en backend.",
      duration: "5 meses",
      schedule: "Clases 3 veces por semana",
      syllabus: [
        "Introducción a Node.js",
        "Express y Middleware",
        "Bases de datos SQL y NoSQL",
        "API REST y GraphQL",
        "Autenticación y Autorización",
        "Despliegue y Monitoreo",
        "Seguridad en Backend"
      ],
      requirements: [
        "JavaScript básico",
        "Computadora con mínimo 8GB RAM",
        "Conocimientos básicos de bases de datos"
      ],
      benefits: [
        "Proyectos del mundo real",
        "Mentorías personalizadas",
        "Certificación profesional",
        "Bolsa de trabajo"
      ]
    },
    {
      icon: FaMobile,
      title: "Desarrollo Móvil",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      description: "Crea aplicaciones móviles multiplataforma con React Native y Flutter.",
      price: "$399",
      features: ["React Native", "Flutter", "Firebase", "App Store Deploy"],
      fullDescription: "Desarrolla aplicaciones móviles nativas y multiplataforma...",
      duration: "6 meses",
      schedule: "Clases 3 veces por semana",
      syllabus: [
        "Introducción a React Native",
        "Fundamentos de Flutter",
        "Integración con Firebase",
        "Despliegue en App Store y Google Play",
        "Optimización de rendimiento",
        "Pruebas y Debugging",
        "Mantenimiento y Actualizaciones"
      ],
      requirements: [
        "Conocimientos básicos de programación",
        "Computadora con mínimo 8GB RAM",
        "Conexión estable a internet"
      ],
      benefits: [
        "Certificado al completar",
        "Acceso de por vida",
        "Proyectos reales",
        "Mentorías personalizadas"
      ]
    },
    {
      icon: FaRobot,
      title: "Machine Learning",
      image: "https://images.unsplash.com/photo-1581091870622-1c6a6c7ed8a5?w=800&auto=format&fit=crop&q=60",
      description: "Introducción al aprendizaje automático y la inteligencia artificial.",
      price: "$449",
      features: ["Python", "TensorFlow", "Scikit-learn", "Deep Learning"],
      fullDescription: "Aprende los fundamentos del Machine Learning y cómo aplicarlos en proyectos reales.",
      duration: "6 meses",
      schedule: "Clases 3 veces por semana",
      syllabus: [
        "Fundamentos de Python",
        "Introducción a TensorFlow",
        "Modelos de Machine Learning",
        "Redes Neuronales",
        "Deep Learning",
        "Procesamiento de Datos",
        "Proyectos Prácticos"
      ],
      requirements: [
        "Conocimientos básicos de programación",
        "Computadora con mínimo 8GB RAM",
        "Conexión estable a internet"
      ],
      benefits: [
        "Certificado al completar",
        "Acceso de por vida",
        "Proyectos reales",
        "Mentorías personalizadas"
      ]
    },
    {
      icon: FaGlobe,
      title: "DevOps",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=60",
      description: "Aprende a implementar y gestionar infraestructuras en la nube.",
      price: "$379",
      features: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      fullDescription: "Domina las herramientas y prácticas de DevOps para mejorar la eficiencia y calidad del desarrollo.",
      duration: "5 meses",
      schedule: "Clases 3 veces por semana",
      syllabus: [
        "Fundamentos de DevOps",
        "Docker y Contenedores",
        "Orquestación con Kubernetes",
        "Servicios en la Nube (AWS)",
        "Integración y Despliegue Continuo (CI/CD)",
        "Monitoreo y Logging",
        "Automatización de Procesos"
      ],
      requirements: [
        "Conocimientos básicos de programación",
        "Computadora con mínimo 8GB RAM",
        "Conexión estable a internet"
      ],
      benefits: [
        "Certificado al completar",
        "Acceso de por vida",
        "Proyectos reales",
        "Mentorías personalizadas"
      ]
    },
    {
      icon: FaTools,
      title: "Full Stack",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
      description: "Conviértete en un desarrollador completo dominando frontend y backend.",
      price: "$599",
      features: ["MERN Stack", "TypeScript", "GraphQL", "Testing"],
      fullDescription: "Aprende a desarrollar aplicaciones completas desde el frontend hasta el backend.",
      duration: "8 meses",
      schedule: "Clases 3 veces por semana",
      syllabus: [
        "Fundamentos de HTML5 y CSS3",
        "JavaScript Moderno y ES6+",
        "React.js y Hooks",
        "Node.js y Express",
        "Bases de datos con MongoDB",
        "GraphQL y REST APIs",
        "Pruebas y Debugging",
        "Despliegue y Optimización"
      ],
      requirements: [
        "Conocimientos básicos de programación",
        "Computadora con mínimo 8GB RAM",
        "Conexión estable a internet"
      ],
      benefits: [
        "Certificado al completar",
        "Acceso de por vida",
        "Proyectos reales",
        "Mentorías personalizadas"
      ]
    }
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
            Nuestros
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Servicios</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -rotate-1" />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ofrecemos una amplia gama de cursos especializados para convertirte en un desarrollador profesional
          </motion.p>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-3xl text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-orange-500">{service.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedService(service)}
                      className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
                    >
                      Más info <FaArrowRight />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Course Image Banner */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300 group"
              >
                <FaTimes className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{selectedService.title}</h3>
                <div className="flex items-center gap-2">
                  <selectedService.icon className="text-xl text-orange-400" />
                  <span className="text-xl font-semibold text-orange-400">{selectedService.price}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-orange-100/50">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaInfo className="text-orange-500" />
                      Descripción
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{selectedService.fullDescription}</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-blue-100/50">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaClock className="text-blue-500" />
                      Detalles del curso
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-blue-500" />
                        {selectedService.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        {selectedService.schedule}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaBook className="text-green-500" />
                      Temario
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.syllabus?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaStar className="text-purple-500" />
                      Beneficios
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.benefits?.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <FaGem className="text-purple-500 mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
                  <span>Inscribirme ahora</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}

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

