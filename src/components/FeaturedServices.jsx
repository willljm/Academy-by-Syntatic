import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaMobile, FaClock, FaGraduationCap, FaStar, FaUsers, FaChalkboardTeacher, FaBookReader } from 'react-icons/fa';
import CourseModal from './CourseModal';
import { Link } from 'react-router-dom';

export default function FeaturedServices() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const services = [
    {
      icon: FaLaptopCode,
      title: "Desarrollo Web Full Stack",
      description: "Aprende las tecnologías más demandadas del desarrollo web moderno. HTML, CSS, JavaScript, React y Node.js.",
      duration: "6 meses",
      level: "Principiante a Avanzado",
      students: "500+",
      rating: 4.8,
      instructor: "Prof. García",
      color: "from-blue-500 to-blue-600",
      benefits: ["Proyectos Reales", "Mentoría 1:1", "Certificación"],
      learningPoints: {
        skills: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js", "MongoDB"],
        tools: ["VS Code", "Git & GitHub", "Postman", "Docker"],
        projects: ["E-commerce", "Red Social", "Dashboard Admin"],
        career: ["Portafolio Profesional", "LinkedIn Optimization", "Entrevistas Técnicas"]
      }
    },
    {
      icon: FaDatabase,
      title: "Data Science & AI",
      description: "Domina el análisis de datos, machine learning y la inteligencia artificial con Python y sus frameworks.",
      duration: "5 meses",
      level: "Intermedio",
      students: "300+",
      rating: 4.7,
      instructor: "Dra. Silva",
      color: "from-purple-500 to-purple-600",
      benefits: ["Datasets Reales", "GPU Computing", "Certificación"],
      learningPoints: {
        skills: ["Python", "Pandas", "TensorFlow", "Scikit-learn", "OpenAI API"],
        tools: ["Jupyter Notebook", "Google Colab", "Kaggle", "AWS"],
        projects: ["Análisis Predictivo", "Chatbot IA", "Visión Computacional"],
        career: ["Data Portfolio", "Research Papers", "ML Deployment"]
      }
    },
    {
      icon: FaMobile,
      title: "Desarrollo Móvil",
      description: "Crea aplicaciones nativas para iOS y Android utilizando React Native y Flutter.",
      duration: "4 meses",
      level: "Intermedio",
      students: "400+",
      rating: 4.6,
      instructor: "Ing. Martínez",
      color: "from-green-500 to-green-600",
      benefits: ["Apps Reales", "UX/UI", "Play Store"],
      learningPoints: {
        skills: ["React Native", "Flutter", "Firebase", "Redux", "GraphQL"],
        tools: ["Android Studio", "Xcode", "Figma", "TestFlight"],
        projects: ["App de Delivery", "Chat en Tiempo Real", "App Fitness"],
        career: ["App Store Success", "Mobile UI/UX", "Monetización"]
      }
    },
    {
      icon: FaCode,
      title: "Programación Backend",
      description: "Especialízate en el desarrollo backend con Java, Spring Boot y arquitecturas modernas.",
      duration: "5 meses",
      level: "Avanzado",
      students: "250+",
      rating: 4.9,
      instructor: "Ing. Rodríguez",
      color: "from-orange-500 to-orange-600",
      benefits: ["Microservicios", "AWS Cloud", "CI/CD"],
      learningPoints: {
        skills: ["Java", "Spring Boot", "MySQL", "AWS", "Microservicios"],
        tools: ["IntelliJ IDEA", "Maven", "Jenkins", "Kubernetes"],
        projects: ["API REST", "Sistema de Pagos", "Cloud Deploy"],
        career: ["Clean Code", "DevOps Culture", "System Design"]
      }
    }
  ];

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with enhanced styling */}
        <div className="text-center mb-16 relative">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-500 text-sm font-semibold mb-4">
            Nuestros Programas
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Servicios Destacados
            <span className="block h-1.5 w-24 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4 rounded-full"/>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros programas de formación diseñados para convertirte en un desarrollador profesional
          </p>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-100 opacity-20 rounded-full transform rotate-45"/>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-16 h-16 bg-blue-100 opacity-20 rounded-full"/>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
            >
              {/* Enhanced card content */}
              <div className="p-8">
                {/* Icon Section with improved styling */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:scale-110 transform transition-all duration-500">
                    <service.icon className="w-10 h-10 text-orange-500 group-hover:rotate-12 transform transition-all duration-500" />
                  </div>
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-orange-500 rounded-lg rotate-12 opacity-20"/>
                </div>

                {/* Enhanced Content Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <FaStar className="w-5 h-5 text-yellow-400"/>
                      <span className="text-gray-600">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {service.description}
                  </p>

                  {/* Enhanced Details Section */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="w-4 h-4 text-orange-400 mr-2"/>
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaGraduationCap className="w-4 h-4 text-orange-400 mr-2"/>
                      <span>{service.level}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="w-4 h-4 text-orange-400 mr-2"/>
                      <span>{service.students}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaChalkboardTeacher className="w-4 h-4 text-orange-400 mr-2"/>
                      <span>{service.instructor}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm flex items-center">
                        <FaBookReader className="w-3 h-3 mr-1"/>
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => openModal(service)}
                    className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl py-3 px-6 font-semibold transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    Más Información
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 opacity-5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"/>
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-gradient-to-tr from-orange-500 to-orange-600 opacity-5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"/>
            </div>
          ))} 
        </div>

        {/* Add the Modal component */}
        <CourseModal 
          isOpen={selectedCourse !== null}
          onClose={closeModal}
          course={selectedCourse}
        />

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
          <button className="group relative overflow-hidden bg-orange-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaCode className="transform transition-transform group-hover:rotate-12" />
              Ver Todos los Programas
            </span>
            <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
          </button>
          </Link>
         
        </div>
      </div>
    </section>
  );
}

