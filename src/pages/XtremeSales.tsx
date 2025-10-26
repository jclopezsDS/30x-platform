import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import MentorCard from "@/components/MentorCard";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const XtremeSales = () => {
  const instructors = [
    { name: "Andrés Bilbao", title: "Co-founder Rappi", image: "/assets/Andres Bilbao.webp" },
    { name: "Santiago Aparicio", title: "Co-founder Ontop", image: "/assets/Santiago Aparicio.webp" },
  ];

  const pillars = [
    {
      title: "Mindset & Cultura",
      content: "Owner's mindset, acción > intención, radical candor",
    },
    {
      title: "Fundamentos de crecimiento",
      content: "North Stars, pipeline, cadencia high frequency, CRM",
    },
    {
      title: "ICP 2.0 y oferta irresistible",
      content: "Dolor, trigger events, tiering, AI toolset",
    },
    {
      title: "Mensajería & outbound moderno",
      content: "Framework de copy, multicanal, personalización con AI",
    },
    {
      title: "Discovery que convierte",
      content: "Mapear dolor, MEDDICC, AI copilot",
    },
    {
      title: "Demo narrativa & prueba de valor",
      content: "Storyline, POV, MAP",
    },
    {
      title: "Forecasting, RevOps & productividad con AI",
      content: "Pipeline hygiene, dashboards, automatización",
    },
  ];

  const benefits = [
    "5 clases - 13 horas de curso completo en vivo",
    "El paso a paso de la Estrategia de Ventas",
    "Toolbox de Recursos y Playbooks",
    "Templates descargables ready-to-use",
    "Casos de éxito reales",
    "Acceso a Comunidad y Soporte",
    "Conversaciones con mentores",
  ];

  return (
    <div className="min-h-screen">
      <Hero
        headline="Programa Xtreme Sales"
        subheadline="Vuélvete World-Class en Ventas"
        description="Ya puedes aplicar a la próxima edición del Programa Xtreme Sales"
        metadata="Fecha de inicio: Q1 2026 | Cupos limitados"
        variant="gradient"
        ctaLink="https://form.typeform.com/to/ceCF7E1a?from=landing&typeform-source=www.30x.org"
      />

      <SocialProof title="Nuestros +2200 alumnos ayudan a empresas como estas a crecer. ¡Sé parte!" logoImage="/assets/logos-empresas.webp" />

      {/* Instructores */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Conoce a tus instructores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {instructors.map((instructor, index) => (
              <MentorCard key={instructor.name} {...instructor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Qué diferencia al programa Xtreme Sales?
            </h2>
            <p className="text-2xl font-semibold text-accent">
              Contenido world-class. Sin vueltas.
            </p>
            <p className="text-xl text-muted-foreground">
              Te enseñamos a navegar entre frameworks, tools, metodologías y playbooks con criterio. Para que sepas cómo pensar, decidir, accionar y tener impacto.
            </p>
          </motion.div>

          {/* 7 Pilares */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Estrategia de 7 Pilares
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {pillars.map((pillar, index) => (
                <AccordionItem
                  key={index}
                  value={`pillar-${index}`}
                  className="glass-card px-8 py-2 rounded-xl border-none"
                >
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent transition-colors text-left">
                    {pillar.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {pillar.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cómo Funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { title: "5 Clases en Vivo", desc: "2:30 horas cada una" },
                { title: "Duración", desc: "3 semanas" },
                { title: "Ejemplos y Casos Reales", desc: "enfocados en Ventas" },
                { title: "Comunidad Exclusiva", desc: "Networking de alto nivel" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Qué Recibes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Qué Recibes
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 glass-card p-6 rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection 
        headline="Domina las ventas" 
        subheadline="y lleva tu negocio al siguiente nivel"
        ctaLink="https://form.typeform.com/to/ceCF7E1a?from=landing&typeform-source=www.30x.org"
      />
    </div>
  );
};

export default XtremeSales;
