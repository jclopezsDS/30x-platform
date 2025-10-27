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
        ctaLink="https://form.typeform.com/to/beHsSd8p?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"
      />

      {/* Profesores */}
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
              Conoce a tus profesores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertos en IA que te guiarán desde los fundamentos hasta la implementación práctica
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
              <img 
                src="/assets/Everybody AI Asset.webp" 
                alt="Equipo de profesores de EverybodyAI - Tatiana de Leon, Gonzalo Vasquez, Luis y Hussam, expertos en inteligencia artificial y machine learning"
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Nombres de los profesores debajo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {professors.map((professor, index) => (
              <motion.div
                key={professor.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="font-bold text-foreground text-lg mb-1">{professor.name}</h3>
                <p className="text-sm text-muted-foreground">{professor.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciador */}
      <section className="py-16 md:py-32 bg-muted/30">
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
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent transition-colors text-left">
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

      <SocialProof title="Nuestros +2200 alumnos ayudan a empresas como estas a crecer. ¡Sé parte!" logoImage="/assets/logos-empresas.webp" />

      {/* Cómo Funciona */}
      <section className="py-16 md:py-32 bg-background">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
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
              Todo lo que necesitas saber sobre EverybodyAI
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "¿Cómo funciona este programa?",
                  answer: "El programa dura 4 semanas e incluye sesiones en vivo por Zoom, herramientas prácticas y casos reales. Todas las sesiones quedan grabadas para que avances a tu ritmo."
                },
                {
                  question: "¿A quién está dirigido el programa?",
                  answer: "A founders, líderes y equipos que buscan integrar inteligencia artificial en sus procesos para aumentar productividad, velocidad y resultados."
                },
                {
                  question: "¿Se necesita experiencia previa?",
                  answer: "No. Si ya usas IA, profundizarás su aplicación. Si estás comenzando, aprenderás desde lo esencial hasta cómo implementarla estratégicamente en tu negocio."
                },
                {
                  question: "¿Cuánto tiempo necesito dedicarle?",
                  answer: "Con 4 a 6 horas por semana podrás avanzar cómodamente. Está diseñado para que puedas hacerlo en paralelo con tu trabajo."
                },
                {
                  question: "¿Es online o presencial?",
                  answer: "100% online, con sesiones en vivo por Zoom."
                },
                {
                  question: "¿Qué pasa si no puedo asistir a alguna sesión?",
                  answer: "Podrás acceder a las grabaciones. Sin embargo, te recomendamos participar en vivo para resolver dudas y aprovechar la interacción directa con mentores y pares."
                },
                {
                  question: "¿Qué voy a aprender concretamente?",
                  answer: "Aprenderás a usar IA para optimizar procesos, ventas, comunicación y productividad. Conocerás herramientas clave y casos reales aplicables a cualquier industria."
                },
                {
                  question: "¿Quiénes son los mentores?",
                  answer: "El programa es guiado por el equipo de Growth Rockstar junto con expertos invitados en IA aplicada a negocios."
                },
                {
                  question: "¿Puedo asistir con mi equipo?",
                  answer: "Sí. Puedes inscribir a varios miembros de tu empresa. Escríbenos a mila@growthrockstar.com para coordinar la aplicación. Los cupos son limitados."
                },
                {
                  question: "¿Cómo me inscribo?",
                  answer: "Haz clic en cualquier botón de esta página y completa el formulario de aplicación. Te confirmaremos la disponibilidad por correo."
                },
                {
                  question: "¿Recibo un certificado al finalizar?",
                  answer: "Sí. Al completar el programa recibirás un certificado oficial de 30X."
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

      <CTASection 
        headline="Domina la IA" 
        subheadline="y transforma tu forma de trabajar"
        ctaLink="https://form.typeform.com/to/beHsSd8p?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"
      />
    </div>
  );
};

export default EverybodyAI;
