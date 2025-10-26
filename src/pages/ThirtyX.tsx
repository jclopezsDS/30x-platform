import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import MentorCard from "@/components/MentorCard";
import ModuleCard from "@/components/ModuleCard";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, TrendingUp, Zap, Brain, Sparkles } from "lucide-react";

const Index = () => {
  const mentors = [
    {
      name: "Dylan Rosemberg",
      title: "Founder de Growth Rockstar",
      image: "/assets/Dylan Rosemberg.webp",
    },
    {
      name: "Andrés Bilbao",
      title: "Co-founder de Rappi",
      image: "/assets/Andres Bilbao.webp",
    },
    {
      name: "Daniel Bilbao",
      title: "Co-founder de Truora",
      image: "/assets/Daniel Bilbao.webp",
    },
  ];

  const modules = [
    {
      title: "Estrategia, Gestión y Cultura",
      description: "Desarrolla tu negocio y optimiza tus resultados",
      icon: Target,
    },
    {
      title: "Ecosistema de Ventas",
      description: "Crea estrategias comerciales para aumentar tu rentabilidad",
      icon: TrendingUp,
    },
    {
      title: "Modelo de Crecimiento",
      description: "Crece de forma sostenible a largo plazo",
      icon: Zap,
    },
    {
      title: "Clase de Estrategia",
      description: "Identifica oportunidades de crecimiento y crea un plan estratégico",
      icon: Brain,
    },
    {
      title: "Inteligencia Artificial",
      description: "Actualiza tus habilidades para operar al máximo nivel en el siglo 21",
      icon: Sparkles,
    },
  ];

  const faqs = [
    {
      question: "¿Cómo funciona este programa?",
      answer:
        "Durante los 3 días presenciales de 30X, aprenderás sobre Estrategia, Gestión y Cultura, Ecosistema de Ventas y Modelos de Growth. Acceso a +70 conceptos, diagnóstico de madurez, 6 rondas de mentorías, networking de alto nivel, comunidad 30X.",
    },
    {
      question: "¿Para quién está dirigido?",
      answer:
        "Dueños de empresas, gerentes y líderes en posiciones estratégicas, CEOs y ejecutivos C-level que buscan potenciar resultados y acelerar el crecimiento.",
    },
    {
      question: "¿Quiénes son los mentores?",
      answer:
        "Dylan Rosemberg (Growth Rockstar), Andrés Bilbao (Rappi), Daniel Bilbao (Truora) + mentores invitados.",
    },
    {
      question: "¿Cómo me inscribo?",
      answer:
        "Haz clic en cualquier botón de esta página. Serás redirigido a un formulario de aplicación.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        headline="Programa Ejecutivo Presencial"
        subheadline="Donde los líderes se preparan para escalar"
        description="Aprende las prácticas y estrategias de las empresas que más crecen, de una forma fácil de aplicar."
        metadata="Próxima edición: Noviembre | Duración: 3 días"
        variant="gradient"
        ctaLink="https://form.typeform.com/to/wZuIIvZt?from=landing&typeform-source=www.30x.org"
      />

      {/* Mentores Section */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              En 30X enseñan quienes construyen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Todos los mentores han construido cosas increíbles y ahora te comparten cómo lo hicieron
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mentors.map((mentor, index) => (
              <MentorCard key={mentor.name} {...mentor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Lo que vas a aprender
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contenido actualizado y de alto nivel adaptado a la realidad de tu negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <ModuleCard key={module.title} {...module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof title="Nuestro equipo ha ayudado a fundar más de 25 empresas y a formar más de 4000, que incluyen:" logoImage="/assets/logos-empresas.webp" />

      {/* FAQ Section */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-8 py-2 rounded-xl border-none"
                >
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent transition-colors text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Lleva tu negocio al próximo nivel"
        subheadline="con velocidad, foco y precisión"
        ctaLink="https://form.typeform.com/to/wZuIIvZt?from=landing&typeform-source=www.30x.org"
      />
    </div>
  );
};

export default Index;
