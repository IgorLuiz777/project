import { useState } from "react";
import { Star, Quote, ThumbsUp, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    name: "Fernando Caretti",
    rating: 5,
    date: "2023-10-15",
    service: "Alinhamento e Balanceamento",
    verified: true,
    comment:
      "Em viagem a São Paulo para um evento nosso carro (vw tiguan) acusou um problema de freios, próximo ao evento fica esta oficina, o Sr. Naldo mostrou ser um profissional excelente comprometido com a satisfação do cliente! Explicou passo a passo, passou vídeos enquanto evoluía na solução. Localização excelente próximo ao center norte ideal para deixar o carro e passear no shopping, nosso problema foi resolvido em aproximadamente 3hs ele utilizou peças de 1ra linha a preço justo. A oficina é organizada, ambiente limpo. Superou as expectativas.Parabéns!",
  },
  {
    name: "Rafael Louro",
    rating: 5,
    date: "2023-09-28",
    service: "Suspensão",
    verified: true,
    comment:
      "Excelente profissional. Uma semana antes levei meu Volvo V50 T5 para fazer um orçamento da suspensão para ver se tinha folga antes de montar os 4 pneus, e zero folga não tinha nada para ser feito.. agora se fosse em outra autocenter já viu o tanto de peças para ser trocas.... Foi realizado a montagem dos 4 pneus, balanceamento e alinhamento dianteiro e traseiro, agora sim o carro está andando perfeito e grudado no chão. Podem confiar que são os melhores da região",
  },
  {
    name: "Eli Miranda",
    rating: 5,
    date: "2023-10-02",
    service: "Freios",
    verified: true,
    comment:
      "Galera posso afirmar com todas palavras os caras são nota 10, Marinaldo e Rafael nota 10 excelência e técnica os caras são bons mesmo ,vim de longe por recomendação,da kayaba amortecedores, galera que diferença, Prestação de serviço de qualidade com técnica e habilidades . Parabéns pra toda equipe.",
  },
];

export default function Reviews() {
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
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
            Depoimentos
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            O que nossos{' '}
            <span className="text-primary relative">
              clientes
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none">
                <path d="M3 9C118.957 4.47226 274.497 2.86548 355 3.00001" stroke="#FF6B00" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}dizem
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg"
          >
            A satisfação dos nossos clientes é nossa maior recompensa. Confira alguns depoimentos.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} variants={itemVariants} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-primary fill-current" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">4.9</p>
            <p className="text-gray-600">Avaliação Média</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">98%</p>
            <p className="text-gray-600">Satisfação</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">25+</p>
            <p className="text-gray-600">Anos de Experiência</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">1000+</p>
            <p className="text-gray-600">Avaliações</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ReviewCard({ review, variants }: { review: Review; variants: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 150;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        {review.verified && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Verificado
          </span>
        )}
      </div>

      <div className="mb-4">
        <p className="text-gray-600">
          {isExpanded || review.comment.length <= MAX_LENGTH
            ? review.comment
            : `${review.comment.substring(0, MAX_LENGTH)}...`}
        </p>
        {review.comment.length > MAX_LENGTH && (
          <button
            onClick={toggleReadMore}
            className="text-primary hover:text-primary-dark transition-colors mt-2 text-sm font-medium"
          >
            {isExpanded ? "Mostrar menos" : "Continuar lendo"}
          </button>
        )}
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{review.name}</p>
            <p className="text-sm text-gray-500">{review.service}</p>
          </div>
          <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
        </div>
      </div>
    </motion.div>
  );
}