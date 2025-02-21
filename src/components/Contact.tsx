import { Phone, Mail, MapPin, Send, Clock, MessageSquare, Car } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isHovered, setIsHovered] = useState(false);
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 2909-0730",
      link: "tel:+551129090730",
      description: "Atendimento rápido e eficiente"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg-Sex: 9h às 18h",
      description: "Sábado: 9h às 14h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "R. Eduardo Leopoldo, 85",
      description: "Vila Guilherme, São Paulo - SP",
      link: "https://maps.google.com/?q=R.+Eduardo+Leopoldo,+85+-+Vila+Guilherme,+São+Paulo+-+SP"
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção individual e dedicada"
    },
    {
      icon: Car,
      title: "Diagnóstico Gratuito",
      description: "Avaliação inicial sem compromisso"
    }
  ];

  const enviarMensagemHandler = () => {
    window.open(`https://wa.me/5511995376773?text=Olá me chamo ${nome}. \n ${mensagem}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-secondary/10">
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6"
          >
            Fale Conosco
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Pronto para transformar seu{' '}
            <span className="text-primary relative">
              veículo
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none">
                <path d="M3 9C118.957 4.47226 274.497 2.86548 355 3.00001" stroke="#FF6B00" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
            ?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg"
          >
            Entre em contato conosco e descubra como podemos ajudar você a manter seu carro sempre em perfeitas condições.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary hover:text-primary-dark transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                    <p className="text-gray-500 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="bg-white rounded-2xl shadow-xl p-8 relative z-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua mensagem
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Nome
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Digite seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Sua Mensagem
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    onChange={(e) => setMensagem(e.target.value)}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                
                <motion.button
                  onClick={enviarMensagemHandler}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-colors group"
                >
                  <span>Enviar Mensagem</span>
                  <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </motion.button>
              </div>

              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg"
              >
                <MessageSquare className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-primary/5 rounded-2xl" />
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-secondary/10 rounded-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}