import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
}

const CTASection = ({ headline, subheadline, ctaText = "APLICAR AHORA" }: CTASectionProps) => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-muted-foreground to-primary animate-gradient bg-[length:200%_200%]" />
      
      {/* Glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/30 blur-3xl"
      />

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              Únete a miles de líderes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary-foreground text-balance leading-tight"
          >
            {headline}
          </motion.h2>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-primary-foreground/80 text-balance"
            >
              {subheadline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-16 py-8 rounded-full font-bold shadow-2xl hover:shadow-secondary/50 transition-all duration-300 group"
            >
              {ctaText}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-3 h-6 w-6" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
