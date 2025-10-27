import { ReactNode } from 'react';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
}

const MagneticCard = ({ children, className = '' }: MagneticCardProps) => {
  const magneticRef = useMagneticEffect(0.15);

  return (
    <div ref={magneticRef} className={`magnetic-glow ${className}`}>
      {children}
    </div>
  );
};

export default MagneticCard;
