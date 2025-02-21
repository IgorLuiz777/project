import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Location() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="location" className="relative h-[600px]">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4741460329387!2d-46.6167493!3d-23.5183675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f5c3c6a8bad%3A0x694b8f911478c343!2sR.%20Eduardo%20Leopoldo%2C%2085%20-%20Vila%20Guilherme%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002050-040!5e0!3m2!1spt-BR!2sbr!4v1625161234567!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        ></iframe>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 max-w-lg mx-8"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-white/95"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6"
          >
            Localização
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Venha nos{" "}
            <span className="text-primary relative">
              visitar
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 358 12"
                fill="none"
              >
                <path
                  d="M3 9C118.957 4.47226 274.497 2.86548 355 3.00001"
                  stroke="#FF6B00"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Endereço</h3>
                <p className="text-gray-600">
                  R. Eduardo Leopoldo, 85
                  <br />
                  Vila Guilherme, São Paulo - SP
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Horário de Funcionamento
                </h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Sábado: 9h às 14h
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telefone</h3>
                <a
                  href="tel:+551129090730"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  (11) 2909-0730
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-4">
            <a
              href="https://maps.google.com/?q=R.+Eduardo+Leopoldo,+85+-+Vila+Guilherme,+São+Paulo+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors group"
            >
              <Navigation className="w-5 h-5 mr-2 transform group-hover:-rotate-12 transition-transform" />
              Como Chegar
            </a>

            <a
              href="tel:+551129090730"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
