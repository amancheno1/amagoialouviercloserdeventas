import React from 'react';
import { BarChart3, DollarSign, Percent, Users } from 'lucide-react';

const Results: React.FC = () => {
  const stats = [
    {
      icon: DollarSign,
      value: '€2M+',
      label: 'Ventas Generadas',
      description: 'En los últimos 12 meses'
    },
    {
      icon: Percent,
      value: '95%',
      label: 'Tasa de Cierre',
      description: 'En llamadas calificadas'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Clientes Cerrados',
      description: 'Satisfacción 100%'
    },
    {
      icon: BarChart3,
      value: '€1500',
      label: 'Ticket Promedio',
      description: 'Por venta cerrada'
    }
  ];

    return (
    <section id="results" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados que <span className="text-amber-400">Hablan por Sí Solos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No hablo solo de teoría. Estos son los resultados reales que he conseguido 
            para mis clientes en los últimos meses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Icon className="text-amber-400 mx-auto mb-4" size={48} />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;