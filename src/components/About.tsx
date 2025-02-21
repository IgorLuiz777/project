import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Award, Users, ThumbsUp, Wrench } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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

  const achievements = [
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "Anos de experiência",
      description: "Tradição e confiança desde 1995",
    },
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Clientes atendidos",
      description: "Histórico de satisfação comprovada",
    },
    {
      icon: ThumbsUp,
      value: 100,
      suffix: "%",
      label: "Satisfação",
      description: "Qualidade garantida em cada serviço",
    },
    {
      icon: Wrench,
      value: 50000,
      suffix: "+",
      label: "Serviços realizados",
      description: "Experiência que faz a diferença",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-secondary/10" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6"
          >
            Nossa História
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Mais de 25 anos transformando a{" "}
            <span className="text-primary relative">
              experiência automotiva
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
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Combinamos experiência comprovada com tecnologia de ponta para
            oferecer o melhor serviço automotivo da região.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative">
                <achievement.icon className="w-12 h-12 text-primary mb-4" />
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {inView && (
                      <CountUp
                        end={achievement.value}
                        suffix={achievement.suffix}
                        duration={2}
                      />
                    )}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden"
            >
              <img
                src="/media/thumbnails/logo.jpg"
                alt="Nossa equipe"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute bottom-8 right-8 bg-white text-gray-900 p-8 rounded-2xl shadow-xl max-w-sm backdrop-blur-sm bg-white/90"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="text-2xl font-bold">Técnicos Certificados</p>
              </div>
              <p className="text-gray-600">
                Nossa equipe passa por treinamentos constantes para garantir a
                excelência em cada serviço realizado.
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-primary/5 rounded-2xl" />
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-secondary/10 rounded-2xl" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Por que escolher a NCAR?
              </h3>
              <ul className="space-y-4">
                {[
                  "Diagnóstico preciso com equipamentos de última geração",
                  "Equipe altamente qualificada e constantemente atualizada",
                  "Transparência total em todos os serviços realizados",
                  "Garantia em todos os serviços e peças utilizadas",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Compromisso com a Excelência
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa missão é oferecer serviços automotivos de alta qualidade,
                combinando expertise técnica com atendimento personalizado para
                superar as expectativas dos nossos clientes.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Agende uma Visita
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
