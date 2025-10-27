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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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

      {/* Preguntas Frecuentes */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Todo lo que necesitas saber sobre el Programa Ejecutivo
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "¿Cómo funciona este programa?",
                  answer: "Durante los 3 días presenciales de 30X aprenderás sobre Estrategia, Gestión y Cultura, Ecosistema de Ventas y Modelos de Growth aplicados a la realidad de tu negocio. Accederás a más de 70 herramientas prácticas, un diagnóstico de madurez de tu empresa, 6 rondas de mentorías, networking de alto nivel y acceso exclusivo a la comunidad 30X."
                },
                {
                  question: "¿A quién está dirigido el programa?",
                  answer: "Diseñado para dueños de empresas, CEOs, ejecutivos C-level, gerentes y líderes que buscan escalar su negocio, alinear a sus equipos y acelerar resultados de forma sostenible."
                },
                {
                  question: "¿Se necesita experiencia previa?",
                  answer: "No se requiere experiencia previa. El programa combina contenido avanzado y herramientas prácticas adaptadas al nivel de cada participante, tanto si dirige una pyme como una empresa consolidada."
                },
                {
                  question: "¿Cuánto tiempo necesito dedicarle?",
                  answer: "Durante los 3 días presenciales se realizan jornadas completas de trabajo intensivo, con seguimiento y recursos adicionales posteriores para aplicar lo aprendido."
                },
                {
                  question: "¿Es online o presencial?",
                  answer: "Presencial, en formato intensivo de 3 días."
                },
                {
                  question: "¿Qué pasa si no puedo asistir a alguna sesión?",
                  answer: "Recomendamos participar en la totalidad del programa para aprovechar al máximo la experiencia. En caso de fuerza mayor, nuestro equipo te brindará alternativas y acceso al material correspondiente."
                },
                {
                  question: "¿Qué voy a aprender concretamente?",
                  answer: "Aprenderás frameworks reales de estrategia, gestión, cultura y crecimiento utilizados por empresas de alto rendimiento, junto con herramientas aplicables desde el primer día."
                },
                {
                  question: "¿Quiénes son los mentores?",
                  answer: "Serás guiado por Dylan Rosemberg (Founder de Growth Rockstar), Andrés Bilbao (Co-founder de Rappi) y Daniel Bilbao (Co-founder de Truora). Además, contamos con mentores invitados de alto nivel."
                },
                {
                  question: "¿Puedo asistir con mi equipo?",
                  answer: "Sí, el programa admite equipos de liderazgo. Es ideal que founders, cofounders o directivos participen juntos para maximizar la alineación estratégica."
                },
                {
                  question: "¿Cómo me inscribo?",
                  answer: "Haz clic en cualquier botón de esta página y completa el formulario de aplicación con tus datos personales y los de tu empresa. Nuestro equipo revisará tu perfil y confirmará la disponibilidad de cupo."
                },
                {
                  question: "¿Recibo un certificado al finalizar?",
                  answer: "Sí. Al completar el programa recibirás un certificado de participación oficial de 30X."
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
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
