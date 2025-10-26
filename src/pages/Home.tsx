import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
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
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        headline="30X"
        subheadline="Donde los líderes se preparan para escalar"
        description="Programas ejecutivos de alto impacto en Ventas, AI y Fundraising para fundadores y líderes en Latinoamérica."
        metadata="Aprende de quienes construyen"
        variant="gradient"
      />

      {/* Programs Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nuestros Programas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elige el programa que mejor se adapte a tus objetivos de crecimiento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                    <div className="glass-card p-8 rounded-2xl h-full hover:scale-105 transition-transform duration-300 cursor-pointer group">
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
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why 30X Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Por qué 30X?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Mentores de élite",
                  description: "Aprende de fundadores de Rappi, Truora y Growth Rockstar",
                },
                {
                  title: "Contenido ejecutable",
                  description: "Frameworks y herramientas que puedes aplicar inmediatamente",
                },
                {
                  title: "Comunidad exclusiva",
                  description: "Networking con +2200 líderes y fundadores",
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
        headline="Lleva tu negocio al próximo nivel"
        subheadline="Elige tu programa y comienza hoy"
      />
    </div>
  );
};

export default Home;
