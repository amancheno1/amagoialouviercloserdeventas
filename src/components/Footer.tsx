import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Amagoia Louvier</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialista en ventas de alto ticket. Transformo prospectos en clientes premium 
              con técnicas probadas y resultados garantizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/amagoia_louvier/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100009764285753&sk=about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Closing de Llamadas</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Done for you</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Campañas de Ventas</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+34 627 985 178</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>amagoialr@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Huelva, España</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Recibe tips exclusivos de ventas y estrategias que uso con mis clientes VIP.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-gray-800 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="w-full bg-amber-500 text-white py-2 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Amagoia Louvier. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Términos y Condiciones</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;