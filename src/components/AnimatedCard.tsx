
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0,
  className 
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal-visible');
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (card) {
      observer.observe(card);
    }
    
    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        'glass-card p-6 rounded-xl reveal transition-all duration-500',
        className
      )}
    >
      <div className="w-16 h-16 mb-6 rounded-lg bg-movitax-blue/10 flex items-center justify-center text-movitax-blue">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-movitax-darkGray">
        {title}
      </h3>
      
      <p className="text-movitax-darkGray/70">
        {description}
      </p>
    </div>
  );
};

export default AnimatedCard;
