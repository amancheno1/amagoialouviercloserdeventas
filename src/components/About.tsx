import React from 'react';
import { Award, Brain, Clock, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-amber-500">Amagoia Louvier</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Con más de 2 años de experiencia en ventas de alto ticket, he desarrollado 
              un sistema único que combina psicología de ventas, neurociencia aplicada y 
              técnicas de persuasión avanzadas para cerrar operaciones que otros consideran imposibles.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mi especialidad es trabajar con empresas B2B y coaches de alto nivel, 
              ayudándoles a maximizar sus conversiones y alcanzar altas cifras de ventas.
            </p>
          </div>

          <div className="relative">
            {/* Professional Photo */}
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/public/amagoia.png" 
                  alt="Amagoia Louvier - Especialista en Ventas de Alto Ticket"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                <div className="text-sm font-semibold">Top 1% Closer</div>
                <div className="text-xs opacity-90">€2M+ en Ventas</div>
              </div>
            </div>

            {/* Skills Grid - Cuadro azul debajo de la foto */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="text-amber-400 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Certificaciones</h3>
                  <p className="text-sm text-gray-300">NLP Master Practitioner</p>
                </div>
                <div className="text-center">
                  <Brain className="text-amber-400 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Especialización</h3>
                  <p className="text-sm text-gray-300">Psicología de Ventas</p>
                </div>
                <div className="text-center">
                  <Clock className="text-amber-400 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Disponibilidad</h3>
                  <p className="text-sm text-gray-300">24/7 para clientes VIP</p>
                </div>
                <div className="text-center">
                  <Trophy className="text-amber-400 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Reconocimiento</h3>
                  <p className="text-sm text-gray-300">Top 1% de Closers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cuadro naranja al lado - estadísticas */}
        <div className="mt-12 max-w-md mx-auto lg:max-w-none">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white shadow-lg">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2+</div>
                <div className="text-lg">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">€2000</div>
                <div className="text-lg">Ticket Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;