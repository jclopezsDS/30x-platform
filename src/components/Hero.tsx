import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  description?: string;
  metadata?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: "default" | "gradient";
}

const Hero = ({
  headline,
  subheadline,
  description,
  metadata,
  ctaText = "APLICAR AHORA",
  ctaLink,
  variant = "default",
}: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      {variant === "gradient" ? (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary animate-gradient bg-[length:200%_200%] opacity-20" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      )}
      
      {/* Animated circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 blur-3xl"
      />

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Metadata */}
          {metadata && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30"
            >
              <span className="text-sm font-medium text-foreground">{metadata}</span>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground text-balance"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground text-balance"
          >
            {subheadline}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-12 py-7 rounded-full font-bold group shadow-xl hover:shadow-2xl transition-all duration-300"
              asChild={!!ctaLink}
            >
              {ctaLink ? (
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  {ctaText}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </a>
              ) : (
                <>
                  {ctaText}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
