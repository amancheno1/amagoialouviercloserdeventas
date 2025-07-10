import React from 'react';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-blue-900">10X</span> tus Ventas?
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
            No pierdas más tiempo con técnicas que no funcionan.
            Hablemos y te muestro exactamente cómo puedo ayudarte a cerrar más ventas este mes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Consulta Estratégica GRATUITA</h3>
            <p className="text-gray-600 mb-6">
              En 30 minutos te ayudo a identificar exactamente qué está frenando tus ventas
              y cómo solucionarlo. Sin compromisos, solo valor puro.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Análisis de tu proceso actual de ventas
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Identificación de puntos de mejora críticos
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Estrategia personalizada para tu negocio
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Plan de acción inmediato
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://calendly.com/amagoia-louvier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4 rounded-full font-semibold hover:from-blue-800 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Reservar Consulta GRATIS</span>
              </a>

              <a
                href="tel:+34627958178"
                className="w-full border-2 border-blue-900 text-blue-900 py-4 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Llamar Ahora: +34 627 985 178</span>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 shadow-2xl order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-8 text-white">¿Por Qué Elegir a Amagoia?</h3>

            <div className="space-y-6 text-white">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 rounded-full p-2 mt-1">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Resultados Inmediatos</h4>
                  <p className="text-gray-200">Mis clientes ven mejoras en sus conversiones desde la primera semana.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 rounded-full p-2 mt-1">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Metodología Probada</h4>
                  <p className="text-gray-200">Sistema desarrollado en +2 años cerrando ventas de alto ticket.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 rounded-full p-2 mt-1">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Garantía de Resultados</h4>
                  <p className="text-gray-200">Si no mejoras tus ventas, te devuelvo tu inversión.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 rounded-full p-2 mt-1">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Soporte Total</h4>
                  <p className="text-gray-200">Acceso directo a mí para dudas y optimizaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;