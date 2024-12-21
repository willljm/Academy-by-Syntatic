import React from 'react';
import { FaTimes, FaCheck, FaClock, FaUsers, FaGraduationCap, FaChalkboardTeacher, FaStar, 
         FaCode, FaTools, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function CourseModal({ isOpen, onClose, course }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${course.color} p-8 text-white relative`}>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            
            <div className="flex items-start gap-6">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <course.icon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{course.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <FaStar className="w-5 h-5 text-yellow-300" />
                    {course.rating}
                  </span>
                  <span>|</span>
                  <span>{course.students} estudiantes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold mb-6">Plan de Aprendizaje</h4>
                  
                  {/* Technical Skills */}
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FaCode className="w-5 h-5 text-blue-500" />
                      <h5 className="font-semibold text-blue-800">Habilidades Técnicas</h5>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {course.learningPoints.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-blue-700">
                          <FaCheck className="w-4 h-4 text-blue-500" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Technologies */}
                  <div className="bg-purple-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FaTools className="w-5 h-5 text-purple-500" />
                      <h5 className="font-semibold text-purple-800">Herramientas</h5>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {course.learningPoints.tools.map((tool, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-purple-700">
                          <FaCheck className="w-4 h-4 text-purple-500" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="bg-green-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FaLaptopCode className="w-5 h-5 text-green-500" />
                      <h5 className="font-semibold text-green-800">Proyectos Prácticos</h5>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {course.learningPoints.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-green-700">
                          <FaCheck className="w-4 h-4 text-green-500" />
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Development */}
                  <div className="bg-orange-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FaRocket className="w-5 h-5 text-orange-500" />
                      <h5 className="font-semibold text-orange-800">Desarrollo Profesional</h5>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {course.learningPoints.career.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-orange-700">
                          <FaCheck className="w-4 h-4 text-orange-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <FaClock className="w-6 h-6 text-orange-500 mb-2" />
                    <h5 className="font-medium">Duración</h5>
                    <p className="text-gray-600">{course.duration}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <FaGraduationCap className="w-6 h-6 text-orange-500 mb-2" />
                    <h5 className="font-medium">Nivel</h5>
                    <p className="text-gray-600">{course.level}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <FaUsers className="w-6 h-6 text-orange-500 mb-2" />
                    <h5 className="font-medium">Estudiantes</h5>
                    <p className="text-gray-600">{course.students}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <FaChalkboardTeacher className="w-6 h-6 text-orange-500 mb-2" />
                    <h5 className="font-medium">Instructor</h5>
                    <p className="text-gray-600">{course.instructor}</p>
                  </div>
                </div>
                    <Link to="/contacts">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl py-4 px-6 font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 mt-5">
                  Inscribirse Ahora
                </button>
                    </Link>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
