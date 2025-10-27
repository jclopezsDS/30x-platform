import { motion } from "framer-motion";

interface SocialProofProps {
  title: string;
  logoCount?: number;
  logoImage?: string;
}

const SocialProof = ({ title, logoCount = 8, logoImage }: SocialProofProps) => {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {title}
          </p>
        </motion.div>

        {/* Logo Grid or Image */}
        {logoImage ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white p-8 border border-border/20"
          >
            <img 
              src={logoImage} 
              alt="Logos de empresas donde trabajan nuestros alumnos - Incluye empresas líderes en tecnología y startups de Latinoamérica"
              loading="lazy"
              className="w-full h-auto" 
            />
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {Array.from({ length: logoCount }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="aspect-[3/2] rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shadow-lg"
              >
                <div className="w-3/4 h-1/2 bg-muted-foreground/10 rounded-lg" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialProof;
