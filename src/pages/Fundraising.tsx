import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, DollarSign } from "lucide-react";

const Fundraising = () => {
  const modules = [
    {
      title: "Cómo entrar a YC (Gratis)",
      content: "YC Application, qué busca YC, errores típicos",
    },
    {
      title: "¿Deberías levantar capital?",
      content: "Modelos de negocio, expectativas reales, calendario",
    },
    {
      title: "El proceso de fundraising",
      content: "Fund Economics, tipos de fondo, valuación, lista de inversores",
    },
    {
      title: "Pitch Deck Ganador",
      content: "Qué quieren escuchar los VCs, deck de 5-10 slides, elevator pitch",
    },
    {
      title: "Cómo usar AI para levantar capital",
      content: "Herramientas, AI Agents, CRM Investor Funnel",
    },
    {
      title: "Errores caros y cómo evitarlos",
      content: "SAFEs, cap table, red flags, simulación Q&A",
    },
    {
      title: "Después del pitch",
      content: "Due diligence, data room, velocity y FOMO, investor updates",
    },
    {
      title: "Casos de Éxito + Pitch Lab",
      content: "Pitch + Q&A, mentorías, Demo Day Virtual",
    },
  ];

  const benefits = [
    "8 clases - 16 horas de curso completo en vivo",
    "El paso a paso de Estrategia de Fundraising",
    "Toolbox para levantar capital con AI y Playbooks",
    "Templates descargables ready-to-use",
    "Casos de éxito reales",
    "Acceso a Comunidad y Soporte",
    "Conversaciones con mentores",
  ];

  const targetAudience = [
    "Salir a levantar capital y no querés salir a improvisar",
    "Construir una historia que un inversor no pueda ignorar",
    "Estructurar un pipeline de VCs como si fuera tu sales funnel",
    "Negociar sin regalar equity",
  ];

  return (
    <div className="min-h-screen">
      <Hero
        headline="Programa 30X Fundraising"
        subheadline="Ya puedes aplicar al Curso 30X Fundraising"
        description="Este programa es una caja de herramientas para salir a levantar capital. Dictado por los hermanos Bilbao, dos emprendedores top de Latam, levantando más de 2B en 3 rondas Serie A. Por founders para founders."
        metadata="Fecha de inicio: Martes, 25 Nov 2025 | Cupos limitados"
        variant="gradient"
      />

      <SocialProof title="Hemos ayudado a decenas de startups a levantar capital. Y formamos a líderes de +4.000 empresas" />

      {/* Para Quién Es */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Este programa es para vos si quieres…
            </h2>
            <div className="space-y-4">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 glass-card p-6 rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Módulos del Programa
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem
                  key={index}
                  value={`module-${index}`}
                  className="glass-card px-8 py-2 rounded-xl border-none"
                >
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {module.content}
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
                { title: "8 Clases en Vivo", desc: "2:30 horas cada una" },
                { title: "Duración", desc: "3 semanas" },
                { title: "Ejemplos y Casos Reales", desc: "enfocados en Fundraising" },
                { title: "Comunidad Exclusiva", desc: "Networking con founders" },
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

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-2xl font-bold text-accent italic max-w-3xl mx-auto">
              "Fundraising es un juego de velocidad y proceso, no de esperar milagros."
            </p>
          </motion.div>

          {/* Qué Recibes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Qué Recibes
            </h3>
            <div className="space-y-4 mb-12">
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

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl text-center space-y-4"
            >
              <DollarSign className="w-12 h-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">Inversión</h3>
              <p className="text-4xl font-bold text-accent">USD $1,450</p>
              <p className="text-muted-foreground">
                Fecha de inicio: 25 de Noviembre
              </p>
              <p className="text-sm text-muted-foreground italic">
                * Ofrecemos becas parciales sujetas a aplicación
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SocialProof title="Hemos ayudado a incubar +20 compañías, e invertido en diferentes fondos, entre ellas:" />

      <CTASection headline="Levanta capital" subheadline="con velocidad y precisión" />
    </div>
  );
};

export default Fundraising;
