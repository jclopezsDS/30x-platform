import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const programs = [
    { name: "Executive", path: "/executive" },
    { name: "Xtreme Sales", path: "/xtreme-sales" },
    { name: "Everybody AI", path: "/everybody-ai" },
    { name: "Fundraising", path: "/fundraising" },
    { name: "AI First VC", path: "/ai-first-vc" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/crece30x?igsh=bGdodGtpbGw4NGts", label: "Instagram" },
    { icon: Linkedin, href: "http://linkedin.com/company/crece30x/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@FundraisingSchool-SeriesA", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-muted-foreground text-primary-foreground overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10 animate-gradient" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-bold text-secondary">30X</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Donde los líderes se preparan para escalar. Programas ejecutivos de alto impacto para fundadores y líderes en Latinoamérica.
            </p>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-secondary">Programas</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.path}>
                  <Link
                    to={program.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-secondary">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">
                Latinoamérica
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-secondary">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-primary-foreground/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} 30X. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-secondary transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="#" className="hover:text-secondary transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
