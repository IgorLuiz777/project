import React from "react";
import { ChevronRight, Star, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0"
    >
      {/* Background Video/Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Mecânico trabalhando em um carro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/50" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block mb-4 px-4 py-2 md:px-6 md:py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30"
          >
            <span className="text-primary font-semibold flex items-center text-sm md:text-base">
              <Star
                className="w-4 h-4 md:w-5 md:h-5 mr-2"
                fill="currentColor"
              />
              Profissionais Certificados
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight"
          >
            Transforme seu carro em uma{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">obra-prima!</span>
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-2 md:h-3 bg-primary/20 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg md:text-xl text-secondary mb-8 md:mb-12 leading-relaxed"
          >
            Mais de 1000 clientes satisfeitos confiam em nossa expertise para
            cuidar de seus veículos. Agende agora e ganhe diagnóstico gratuito!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 group text-sm md:text-base"
            >
              Agendar Agora
              <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 group text-sm md:text-base"
            >
              Nossos Serviços
              <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4"
            >
              <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <div>
                <p className="text-xl md:text-2xl font-bold text-white">
                  1000+
                </p>
                <p className="text-secondary text-xs md:text-sm">
                  Clientes Felizes
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4"
            >
              <Star
                className="w-6 h-6 md:w-8 md:h-8 text-primary"
                fill="currentColor"
              />
              <div>
                <p className="text-xl md:text-2xl font-bold text-white">
                  4.9/5
                </p>
                <p className="text-secondary text-xs md:text-sm">
                  Avaliação Média
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4"
            >
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <div>
                <p className="text-xl md:text-2xl font-bold text-white">25+</p>
                <p className="text-secondary text-xs md:text-sm">
                  Anos de Experiência
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4"
            >
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <div>
                <p className="text-xl md:text-2xl font-bold text-white">100%</p>
                <p className="text-secondary text-xs md:text-sm">Garantia</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
