import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import MentorCard from "@/components/MentorCard";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, DollarSign } from "lucide-react";

const EverybodyAI = () => {
  const professors = [
    { name: "Tatiana de Leon", title: "AI Educator | PMD Director" },
    { name: "Gonzalo Vasquez", title: "Intuit" },
    { name: "Luis", title: "AI Specialist" },
    { name: "Hussam", title: "AI Engineer" },
  ];

  const modules = [
    {
      title: "El Mapa Real",
      content: "Cómo funciona realmente la IA, errores fatales, tech stack",
    },
    {
      title: "La Pirámide de Maslow de la IA",
      content: "De herramientas generales a especializadas",
    },
    {
      title: "Automatiza lo que te quita tiempo",
      content: "N8N, Make, Zapier, workflows",
    },
    {
      title: "Tu Primer Agente",
      content: "RAG, evaluaciones, práctica real",
    },
    {
      title: "Multiagentes",
      content: "Orquestación, coordinación, casos reales",
    },
    {
      title: "De prototipo a producción",
      content: "Escalabilidad, costos, seguridad, monitoring",
    },
    {
      title: "Prompt Engineering Avanzado",
      content: "Chain of Thought, ReAct, Tree of Thoughts",
    },
    {
      title: "El Gran Final",
      content: "Caso práctico, demo en vivo, portafolio",
    },
  ];

  const benefits = [
    "7 clases - 14 horas de curso completo en vivo",
    "Un mapa completo de teoría a práctica",
    "Toolbox de Recursos y Playbooks",
    "Templates descargables ready-to-use",
    "Casos de éxito reales",
    "Acceso a Comunidad y Soporte",
  ];

  return (
    <div className="min-h-screen">
      <Hero
        headline="EverybodyAI"
        subheadline="Domina la IA, transforma tus ideas"
        description="Ya puedes aplicar al Programa Everybody AI"
        metadata="Fecha de inicio: 25 de Noviembre, 2025 | Cupos limitados"
        variant="gradient"
      />

      {/* Profesores */}
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
              Conoce a tus profesores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {professors.map((professor, index) => (
              <MentorCard key={professor.name} {...professor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciador */}
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
              ¿Por qué este y no los 8,514 otros programas?
            </h2>
            <p className="text-2xl font-semibold text-accent">
              Contenido world-class. Actualizado, probado, ejecutable.
            </p>
          </motion.div>

          {/* Módulos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Módulos del Programa
            </h3>
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

      <SocialProof title="Nuestros +2200 alumnos ayudan a empresas como estas a crecer. ¡Sé parte!" />

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
                { title: "7 Clases en Vivo", desc: "2:00 horas cada una" },
                { title: "Duración", desc: "4 semanas" },
                { title: "Ejemplos y Casos Reales", desc: "No solo de Redes Sociales" },
                { title: "Comunidad Exclusiva", desc: "Soporte continuo" },
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
                Fecha de inicio: 25 de Noviembre, 2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection headline="Domina la IA" subheadline="y transforma tu forma de trabajar" />
    </div>
  );
};

export default EverybodyAI;
