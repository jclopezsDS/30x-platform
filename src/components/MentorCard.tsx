import { motion } from "framer-motion";

interface MentorCardProps {
  name: string;
  title: string;
  index: number;
  image?: string;
}

const MentorCard = ({ name, title, index, image }: MentorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl group"
    >
      {/* Photo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 mx-auto mb-6 flex items-center justify-center overflow-hidden"
      >
        {image ? (
          <img 
            src={image} 
            alt={`${name} - ${title}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-muted/40" />
        )}
      </motion.div>

      {/* Info */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default MentorCard;
