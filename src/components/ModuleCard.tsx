import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  index: number;
}

const ModuleCard = ({ title, description, icon: Icon, index }: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl group h-full"
    >
      {Icon && (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6"
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>
      )}

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
