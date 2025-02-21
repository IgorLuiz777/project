import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Função auxiliar para importar todas as imagens de um diretório
const getMediaPath = (
  filename: string,
  type: "images" | "videos" | "thumbnails"
) => {
  return `/media/${type}/${filename}`;
};

const mediaContent = {
  images: [
    {
      url: getMediaPath("image1.png", "images"),
      title: "Oficina Moderna",
      description: "Ambiente amplo e organizado para melhor atender você",
    },
    {
      url: getMediaPath("image2.png", "images"),
      title: "Equipamentos de Última Geração",
      description: "Tecnologia avançada para diagnósticos precisos",
    },
    {
      url: getMediaPath("image4.png", "images"),
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados",
    },
  ],
  highlights: [
    {
      type: "video",
      url: getMediaPath("video.mp4", "videos"),
      thumbnail: getMediaPath("logo.jpg", "thumbnails"),
      title: "Nossa História",
      description: "25 anos de excelência em serviços automotivos",
    },
    {
      type: "image",
      url: getMediaPath("image1.png", "images"),
      title: "Infraestrutura Completa",
      description: "Ambiente preparado para todo tipo de serviço",
    },
    {
      type: "image",
      url: getMediaPath("image2.png", "images"),
      title: "Compromisso com Qualidade",
      description: "Excelência em cada detalhe do serviço",
    },
  ],
};

export default function MediaGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
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

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === mediaContent.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? mediaContent.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div
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
            Nossa Estrutura
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Conheça nossa{" "}
            <span className="text-primary relative">
              oficina
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
          <motion.p variants={itemVariants} className="text-gray-600 text-lg">
            Ambiente moderno e equipado para oferecer o melhor serviço para seu
            veículo
          </motion.p>
        </div>

        {/* Main Gallery */}
        <motion.div variants={itemVariants} className="relative mb-16 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-w-16 aspect-h-9 h-[600px] rounded-2xl overflow-hidden"
            >
              <img
                src={mediaContent.images[currentImageIndex].url}
                alt={mediaContent.images[currentImageIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {mediaContent.images[currentImageIndex].title}
                </h3>
                <p className="text-white/90">
                  {mediaContent.images[currentImageIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-10 group-hover:translate-x-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-10 group-hover:translate-x-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {mediaContent.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-primary w-8"
                    : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {mediaContent.highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2"
              onClick={() => {
                if (item.type === "video") {
                  setSelectedVideo(item.url);
                }
              }}
            >
              <div className="relative h-[300px]">
                <img
                  src={item.type === "video" ? item.thumbnail : item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}

                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {item.type === "video" ? (
                      <Play className="w-4 h-4 text-primary" />
                    ) : (
                      <ImageIcon className="w-4 h-4 text-primary" />
                    )}
                    <span className="text-sm font-medium text-gray-900">
                      {item.type === "video" ? "Vídeo" : "Imagem"}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <div className="relative w-full max-w-6xl mx-auto aspect-video">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              >
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
