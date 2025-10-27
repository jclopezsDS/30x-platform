import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, DollarSign } from "lucide-react";

const Fundraising = () => {
  const modules = [
    {
      title: "How to Get into YC (Free)",
      content: "YC Application, what YC looks for, common mistakes",
    },
    {
      title: "Should You Raise Capital?",
      content: "Business models, realistic expectations, timeline",
    },
    {
      title: "The Fundraising Process",
      content: "Fund Economics, fund types, valuation, investor list",
    },
    {
      title: "Winning Pitch Deck",
      content: "What VCs want to hear, 5-10 slide deck, elevator pitch",
    },
    {
      title: "Using AI to Raise Capital",
      content: "Tools, AI Agents, CRM Investor Funnel",
    },
    {
      title: "Costly Mistakes and How to Avoid Them",
      content: "SAFEs, cap table, red flags, Q&A simulation",
    },
    {
      title: "After the Pitch",
      content: "Due diligence, data room, velocity and FOMO, investor updates",
    },
    {
      title: "Success Stories + Pitch Lab",
      content: "Pitch + Q&A, mentorships, Virtual Demo Day",
    },
  ];

  const benefits = [
    "8 live classes - 16 hours of complete course",
    "Step-by-step Fundraising Strategy",
    "Toolbox to raise capital with AI and Playbooks",
    "Ready-to-use downloadable templates",
    "Real success stories",
    "Access to Community and Support",
    "Conversations with mentors",
  ];

  const targetAudience = [
    "Go out to raise capital without improvising",
    "Build a story that investors can't ignore",
    "Structure a VC pipeline like your sales funnel",
    "Negotiate without giving away equity",
  ];

  return (
    <div className="min-h-screen">
      <Hero
        headline="30X Fundraising Program"
        subheadline="Now accepting applications for 30X Fundraising"
        description="This program is a toolkit to go out and raise capital. Taught by the Bilbao brothers, two top entrepreneurs in Latam, having raised over $2B across 3 Series A rounds. By founders, for founders."
        metadata="Start date: Tuesday, Nov 25, 2025 | Limited spots"
        variant="gradient"
        ctaLink="https://form.typeform.com/to/XBJqESrb?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"
      />

      <SocialProof title="We've helped dozens of startups raise capital. And trained leaders from +4,000 companies" logoImage="/assets/logos-empresas.webp" />

      {/* Para Quién Es */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              This program is for you if you want to…
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
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Program Modules
            </h2>
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
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { title: "8 Live Classes", desc: "2:30 hours each" },
                { title: "Duration", desc: "3 weeks" },
                { title: "Real Examples and Cases", desc: "focused on Fundraising" },
                { title: "Exclusive Community", desc: "Networking with founders" },
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
              "Fundraising is a game of speed and process, not waiting for miracles."
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
              What You Get
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
              <h3 className="text-2xl font-bold text-foreground">Investment</h3>
              <p className="text-4xl font-bold text-accent">USD $1,450</p>
              <p className="text-muted-foreground">
                Start date: November 25th
              </p>
              <p className="text-sm text-muted-foreground italic">
                * We offer partial scholarships subject to application
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Everything you need to know about 30X Fundraising
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How does this program work?",
                  answer: "The program runs for 3 intensive weeks with live Zoom sessions and support materials. Content is available in both Spanish and English, with key sessions in English. All sessions are recorded."
                },
                {
                  question: "Who is this program for?",
                  answer: "For LATAM founders ready to take their startup to the next level and raise capital with a hands-on, real-world approach."
                },
                {
                  question: "Do I need prior experience?",
                  answer: "No. If you've raised capital before, you'll refine your process. If it's your first time, you'll learn how to build your pitch deck, investor CRM, and deal room from scratch. You just need to have an operating company."
                },
                {
                  question: "How much time do I need to invest?",
                  answer: "4–6 hours per week is enough to keep the ideal pace. The program is designed to fit alongside your work schedule."
                },
                {
                  question: "Is it online or in person?",
                  answer: "100% online, with live Zoom sessions."
                },
                {
                  question: "What if I can't attend a live session?",
                  answer: "All sessions are recorded. Still, we recommend joining live to engage with mentors, ask questions, and make the most of the experience."
                },
                {
                  question: "What will I learn specifically?",
                  answer: "You'll learn the full fundraising process: identifying investors, leveraging AI to reach them, crafting your pitch, negotiating, and closing rounds successfully."
                },
                {
                  question: "Who are the mentors?",
                  answer: "Led by Andrés and Daniel Bilbao, founders of Rappi and Truora, along with venture capital and fundraising experts."
                },
                {
                  question: "Can multiple team members join?",
                  answer: "Yes, although participation is tracked individually. Founders and cofounders can apply together, and we carefully select participants to ensure a high-impact experience."
                },
                {
                  question: "How do I apply?",
                  answer: "Click any button on this page and complete your application form. Accepted participants are confirmed within 4–10 business days after the application closes."
                },
                {
                  question: "Do I get a certificate upon completion?",
                  answer: "Yes. Upon completion, you'll receive your official 30X certificate."
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
        headline="Raise capital" 
        subheadline="with speed and precision"
        ctaLink="https://form.typeform.com/to/XBJqESrb?utm_campaign=xxxxx&typeform-source=www.30x.org#ref_id=xxxxx"
      />
    </div>
  );
};

export default Fundraising;
