import {
  Battery,
  Gauge,
  File as Oil,
  Car,
  Disc,
  ParkingCircle,
  ArrowRight,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: Battery,
    title: "Auto Elétrico & Baterias",
    description:
      "Diagnóstico e reparo completo do sistema elétrico do seu veículo.",
    image:
      "https://macbateriascuritiba.com.br/wp-content/uploads/2021/11/img-post-MACBATERIAS.jpg",
    features: ["Diagnóstico Computadorizado", "Reparo de Alternadores", "Instalação de Acessórios"],
    rating: 4.9,
    reviews: 128
  },
  {
    icon: Gauge,
    title: "Alinhamento & Balanceamento",
    description: "Alinhamento computadorizado e balanceamento de precisão.",
    image:
      "https://www.seguroauto.org/wp-content/uploads/2023/06/Carro-preparado-para-alinhamento-e-balanceamento-1-scaled-1200x900.jpg",
    features: ["Tecnologia 3D", "Diagnóstico Gratuito", "Garantia de Serviço"],
    rating: 5.0,
    reviews: 156
  },
  {
    icon: Oil,
    title: "Troca de Óleo",
    description:
      "Troca de óleo, garantia de cuidado e performance para o seu veículo",
    image:
      "https://site.zuldigital.com.br/blog/wp-content/uploads/2020/11/shutterstock_1126225445_Easy-Resize.com_.jpg",
    features: ["Óleos Premium", "Filtros Originais", "Checklist Completo"],
    rating: 4.8,
    reviews: 203
  },
  {
    icon: Car,
    title: "Suspensão & Freios",
    description: "Manutenção completa do sistema de suspensão e freios.",
    image:
      "https://www.limpsom.com.br/imagens/artigos/big/freios-e-suspensao.jpg",
    features: ["Peças Originais", "Garantia Estendida", "Teste de Segurança"],
    rating: 4.9,
    reviews: 175
  },
  {
    icon: Disc,
    title: "Venda & Troca de Pneus",
    description: "As melhores marcas de pneus com instalação profissional.",
    image:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: ["Marcas Premium", "Montagem Gratuita", "Calibragem Nitrogênio"],
    rating: 4.7,
    reviews: 142
  },
  {
    icon: ParkingCircle,
    title: "Escapamentos",
    description: "Reparo e substituição de sistemas de escapamento.",
    image: "https://www.abcpneus.net/imagens/blog/2021_06/20210625154855.jpg",
    features: ["Catalisadores Originais", "Redução de Ruído", "Teste de Emissões"],
    rating: 4.8,
    reviews: 98
  },
];

const handleServiceClick = (description: string) => {
  window.open(
    `https://wa.me/5511995376773?text=Gostaria de fazer um agendamento de: ${description}`,
    "_blank"
  );
};

export default function Services() {
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
    <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
            Nossos Serviços
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Soluções completas para seu{' '}
            <span className="text-primary relative">
              veículo
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none">
                <path d="M3 9C118.957 4.47226 274.497 2.86548 355 3.00001" stroke="#FF6B00" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg"
          >
            Oferecemos uma ampla gama de serviços automotivos com equipamentos
            modernos e profissionais especializados.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                  </div>
                  <span className="text-sm text-white">({service.reviews} avaliações)</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleServiceClick(service.description)}
                  className="w-full bg-primary text-white py-3 px-4 rounded-xl hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Agendar Serviço</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}