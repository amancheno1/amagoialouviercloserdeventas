import React from 'react';
import { Phone, Users, Zap, BookOpen, Target, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Phone,
      title: 'Closing de Llamadas',
      description: 'Cierro tus llamadas de ventas de alto ticket con técnicas probadas que convierten prospectos en clientes premium.',
      features: ['Cierre directo en llamada', 'Follow-up estratégico', 'Objeción handling', 'Garantía de resultados']
    },
      {
      icon: Target,
      title: 'Campañas de Ventas',
      description: 'Gestiono campañas completas de ventas para lanzamientos y promociones especiales.',
         features: ['Estrategia completa', 'Ejecución total', 'Seguimiento diario', 'ROI garantizado']
    },
    {
      icon: TrendingUp,
      title: 'Done-For-You',
      description: 'Me encargo completamente de tus ventas mientras tú te enfocas en entregar valor.',
      features: ['Gestión total', 'Equipo dedicado', 'Reportes detallados', 'Escalabilidad']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servicios que <span className="text-amber-500">Transforman</span> Resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones personalizadas para cada etapa de tu proceso de ventas, 
            desde el primer contacto hasta el cierre millonario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-4 inline-block mb-4">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                       </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-3 rounded-full font-semibold hover:from-blue-800 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105">
                Más Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;