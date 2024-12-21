import React from 'react';
import { FaStar, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Testimonios() {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Full Stack Developer",
      company: "TechCorp",
      image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D",
      content: "El bootcamp transformó mi carrera. En 6 meses pasé de no saber programar a conseguir mi primer trabajo como desarrollador.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Frontend Developer",
      company: "DesignStudio",
      image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D",
      content: "La mejor inversión que he hecho. Los mentores son excelentes y el contenido está muy actualizado con las tecnologías más demandadas.",
      rating: 5
    },
    {
      name: "David López",
      role: "Backend Developer",
      company: "DataSystems",
      image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D",
      content: "Increíble experiencia de aprendizaje. El enfoque práctico y el apoyo constante hacen que sea muy efectivo.",
      rating: 5
    }
  ];

  const achievements = [
    { number: "500+", label: "Graduados" },
    { number: "95%", label: "Tasa de Empleo" },
    { number: "50+", label: "Empresas Aliadas" },
    { number: "4.9/5", label: "Satisfacción" }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
  <h2 className="text-4xl font-bold text-gray-800 mb-4 col-span-full text-center">
    Experiencia
    <span className="block h-1.5 w-24 bg-orange-500 mx-auto mt-4 rounded-full"/>
  </h2>
  {achievements.map((achievement, index) => (
    <div key={index} className="group bg-white p-8 rounded-2xl shadow-2xl hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transform transition-transform duration-300">
          {achievement.number}
        </h3>
        <p className="text-gray-600">{achievement.label}</p>
      </div>
    </div>
  ))}
</div>

          <div className="text-center mb-16 pt-24">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Lo que dicen nuestros estudiantes
              <span className="block h-1.5 w-24 bg-orange-500 mx-auto mt-4 rounded-full"/>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6">{testimonial.content}</p>

                <div className="flex items-center">
                  <img className="object-cover w-12 h-12 rounded-full mr-4 group-hover:scale-110 transform transition-transform duration-300" src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role} en {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

</>      
);
}  
