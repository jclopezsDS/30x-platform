import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Target, Zap, Dumbbell, Clock, TrendingUp, Users, Sparkles } from "lucide-react";

const AIFirstVC = () => {
  const howItWorks = [
    { step: "→ Friday AM:", desc: "New mission drops on Notion" },
    { step: "→ 7 Days to Ship:", desc: "You have one week to deliver working solutions" },
    { step: "→ Tools Provided:", desc: "Access to API keys for process automations and our tools" },
    { step: "→ Learning Resources:", desc: "Courses available if you're not technically savvy" },
    { step: "→ Weekend Shipping:", desc: "Ship over the weekend, keep your 9-5 during the week" },
    { step: "→ Early submissions & MVPs are incentivized", desc: "—ship before ready!", highlight: true },
  ];

  const whatYoullBuild = [
    "→ AI-powered automations for fundraising and angel investing",
    "→ CRM systems, deal flow trackers, investor management tools",
    "→ Data pipelines, reporting dashboards, workflow optimizations",
    "→ Real systems used by founders and investors",
  ];

  const tracks = [
    {
      number: "01",
      title: "Venture Ops",
      description: "Build systems for deal flow, angel investor management, and fundraising operations",
    },
    {
      number: "02",
      title: "AI Systems",
      description: "Create intelligent automations, data pipelines, and AI-powered tools for founders",
    },
    {
      number: "03",
      title: "Community & Growth",
      description: "Scale community engagement, content systems, and growth operations for Andrés Bilbao personal brand and communities",
    },
  ];

  const timeline = [
    { date: "Oct 20", event: "Applications Close", highlight: true },
    { date: "Nov 1", event: "How to Get into VC" },
    { date: "Nov 10", event: "VC Deadline" },
    { date: "Nov 15", event: "Should you raise VC money?" },
    { date: "Nov 20", event: "Fundraising School Starts" },
    { date: "Dec 13", event: "Fundraising School Demo Day" },
    { date: "Dec 15", event: "VC Analyst Winner Announcement", highlight: true },
  ];

  const evaluationCriteria = [
    { category: "Mission Deliverables", weight: "50%", meaning: "Quality and impact of weekly builds", primary: true },
    { category: "Execution Speed", weight: "15%", meaning: "How fast you ship working solutions" },
    { category: "Innovation", weight: "15%", meaning: "Creative problem-solving and new approaches" },
    { category: "Collaboration", weight: "10%", meaning: "Helping teammates and sharing knowledge" },
    { category: "Wellness Discipline", weight: "10%", meaning: "5+ workouts/week = bonus points", primary: true },
  ];

  const values = [
    {
      icon: Target,
      title: "Output Over Input",
      description: "We don't care about hours worked. We care about what you ship. Ideally you will work between 5 to 10 hours on a mission weekly.",
      color: "text-orange-500",
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "Fast iterations beat perfect plans. Bias toward action.",
      color: "text-yellow-500",
    },
    {
      icon: Dumbbell,
      title: "Entrepreneur Mindset",
      description: "Peak performance requires thinking as an entrepreneur and the discipline of an athlete. Train your body and mind.",
      color: "text-orange-400",
    },
  ];

  const faqs = [
    {
      question: "How much time does this require?",
      answer: "Designed for people with full-time jobs. Expect 10-15 hours/week of focused work. No daily check-ins. No micromanagement. Just weekly missions and async collaboration.",
    },
    {
      question: "Do I need to be technical?",
      answer: "You need to be tech-savvy and willing to learn fast. You'll work with AI tools, no-code platforms, APIs, and automation tools. If you can learn Notion or Airtable quickly, you can do this.",
    },
    {
      question: "What's the selection criteria?",
      answer: "We're looking for builders with an athlete mindset: disciplined, competitive, output-focused, and hungry to prove themselves. Geographic location doesn't matter. Skills can be taught. Mindset can't.",
    },
    {
      question: "Is this paid?",
      answer: "The program itself is unpaid. This is training-to-hire. The top performer earns a paid full-time position at 30x working directly with Andrés and Angie. Think of it as the ultimate audition.",
    },
    {
      question: "What happens after the program?",
      answer: "Winner gets hired. Runners-up get strong recommendations and stay in the 30x network. Everyone who completes it will have built real portfolio pieces and proven their ability to execute at a high level.",
    },
    {
      question: "How does the leaderboard work?",
      answer: "Rankings are updated bi-weekly based on your mission scores. It's fully transparent. Everyone can see who's winning and why. Competitive pressure brings out peak performance.",
    },
    {
      question: "What's the wellness rule about?",
      answer: "Elite performance requires elite wellness. 5+ workouts per week = bonus discipline points. We track it on the honor system. Athletes understand that physical training sharpens mental execution.",
    },
    {
      question: "Can I do this from anywhere?",
      answer: "Yes. This is fully remote and async. As long as you can communicate in English and show up to the weekly missions, your location doesn't matter. LATAM and US preferred, but not required.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        headline="CREATING THE TOP TALENT FOR AI-FIRST VC"
        subheadline="Changing how VC is made in Latam"
        description="AI First VC Analyst Operator Program"
        metadata="For founders by founders"
        variant="gradient"
        ctaText="Learn More"
        ctaLink="#program"
      />

      {/* Thank You Box - Applications Closed */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl border-2 border-accent">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
                <span className="text-accent font-bold text-sm">APPLICATIONS CLOSED</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                THANK YOU
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Thank you for your interest in the AI First VC Analyst Operator Program. The application deadline has passed and we are now creating the top talent for AI-First VC.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                {["Async", "Output-Based", "Competitive", "Entrepreneurial Mindset", "Athlete Discipline"].map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program" className="py-16 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              The <span className="text-accent">Program</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A 12-week competition to identify and train the most elite AI-first VC analysts
            </p>
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-foreground font-medium">5-10 hours/week · Compatible with full-time work</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <div className="glass-card p-8 md:p-12 rounded-2xl border-2 border-accent/50 space-y-6">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-4 ${item.highlight ? 'text-orange-400' : 'text-foreground'}`}
                >
                  <span className="text-accent font-bold text-lg flex-shrink-0">{item.step}</span>
                  <span className={`text-lg ${item.highlight ? 'font-bold' : ''}`}>{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Build + The Reward */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* What You'll Build */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-2xl border-l-4 border-accent"
            >
              <h3 className="text-3xl font-bold text-accent mb-8">What You'll Build</h3>
              <div className="space-y-4">
                {whatYoullBuild.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-accent text-lg flex-shrink-0">→</span>
                    <span className="text-foreground text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The Reward */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-2xl border-r-4 border-accent"
            >
              <div className="text-orange-400 text-sm font-bold mb-4">THE REWARD</div>
              <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">
                Top Performer Gets Hired
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Win the competition and earn a paid position at 30x working directly with{" "}
                <span className="text-foreground font-semibold">Andrés Bilbao</span> and{" "}
                <span className="text-foreground font-semibold">Angie Carrillo</span> building the future of venture capital and angel investing for Latam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excel in 3 Tracks */}
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
              Excel in all 3 tracks
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl border-2 border-accent/50 relative"
              >
                <div className="text-6xl font-bold text-accent/20 absolute top-4 left-4">
                  {track.number}
                </div>
                <div className="relative z-10 pt-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{track.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{track.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mission <span className="text-accent">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground">12 weeks. 7 key milestones. 1 winner.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`glass-card p-6 rounded-xl border-2 ${milestone.highlight ? 'border-accent' : 'border-accent/30'}`}>
                      <div className={`text-sm font-bold mb-2 ${milestone.highlight ? 'text-orange-400' : 'text-accent'}`}>
                        {milestone.date}
                      </div>
                      <div className="text-lg font-semibold text-foreground">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-accent border-4 border-background relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              How We Evaluate
            </h2>
            <div className="glass-card p-8 md:p-12 rounded-2xl border-2 border-accent/50">
              <div className="space-y-6">
                {evaluationCriteria.map((criteria, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b border-accent/20 last:border-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground">{criteria.category}</h4>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`px-4 py-2 rounded-full font-bold ${criteria.primary ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}>
                        {criteria.weight}
                      </div>
                      <div className="flex-1 text-muted-foreground">{criteria.meaning}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Values */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl border-2 border-accent/50 text-center"
                >
                  <Icon className={`w-16 h-16 ${value.color} mx-auto mb-6`} />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intel Briefing (FAQ) */}
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
              Intel Briefing
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Everything you need to know before you accept the mission
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
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
        headline="Ready to build the future of VC?" 
        subheadline="Applications for the next cohort opening soon"
        ctaText="Stay Updated"
        ctaLink="https://form.typeform.com/to/wZuIIvZt?from=landing&typeform-source=www.30x.org"
      />
    </div>
  );
};

export default AIFirstVC;
