import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import MagneticCard from "@/components/MagneticCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Target, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const programs = [
    {
      icon: Target,
      title: "Executive",
      description: "Programa Ejecutivo Presencial",
      details: "3 días presenciales | Noviembre 2025",
      link: "/executive",
      color: "text-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Xtreme Sales",
      description: "Vuélvete World-Class en Ventas",
      details: "5 clases en vivo | 3 semanas | Q1 2026",
      link: "/xtreme-sales",
      color: "text-blue-500",
    },
    {
      icon: Sparkles,
      title: "EverybodyAI",
      description: "Domina la IA, transforma tus ideas",
      details: "7 clases en vivo | 4 semanas | 25 Nov 2025",
      link: "/everybody-ai",
      color: "text-purple-500",
    },
    {
      icon: DollarSign,
      title: "Fundraising",
      description: "Levanta capital para tu startup",
      details: "Programa especializado | Próximamente",
      link: "/fundraising",
      color: "text-green-500",
    },
    {
      icon: Brain,
      title: "AI First VC",
      description: "Elite VC Analyst Operator Program",
      details: "Async · Output-based · Competitive",
      link: "/ai-first-vc",
      color: "text-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        headline="Donde los líderes se preparan para escalar"
        subheadline="Entrenamientos intensivos que combinan estrategia, cultura y ejecución"
        description="Aprende de fundadores reales que ya escalaron empresas. Frameworks aplicados y probados."
        metadata="+4,000 líderes formados · 25 empresas impactadas"
        variant="gradient"
        ctaText="EXPLORAR PROGRAMAS"
        ctaLink="#programs"
      />

      {/* Programs Section */}
      <section id="programs" className="pt-8 pb-16 md:pt-12 md:pb-32 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-32 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-shimmer leading-tight py-2">
              Elige tu siguiente desafío de crecimiento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Programas creados por fundadores que han escalado empresas desde cero
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={program.link}>
                    <MagneticCard className="h-full">
                      <div className="glass-card p-8 rounded-2xl h-full cursor-pointer group">
                        <Icon className={`w-12 h-12 ${program.color} mb-6`} />
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4">
                          {program.description}
                        </p>
                        <p className="text-sm text-muted-foreground mb-6">
                          {program.details}
                        </p>
                        <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          Ver programa
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </MagneticCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why 30X Section */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-shimmer">
              En 30X enseñan quienes construyen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Fundadores y ejecutivos que ya escalaron empresas te comparten sus frameworks, aprendizajes y errores
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
              {[
                {
                  title: "Aprendizaje práctico",
                  description: "Frameworks reales, usados por fundadores que ya escalaron. Sin teoría vacía.",
                },
                {
                  title: "Resultados desde el día uno",
                  description: "Diseñado para implementar, medir y ver impacto inmediato en tu negocio.",
                },
                {
                  title: "Comunidad que impulsa",
                  description: "Más de 4,000 líderes y mentores compartiendo experiencias, contactos y crecimiento.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Aplica hoy y escala tu negocio con velocidad y precisión"
        subheadline="Cupos limitados. Únete a miles de líderes."
        ctaText="EXPLORAR PROGRAMAS"
        ctaLink="#programs"
      />
    </div>
  );
};

export default Home;
