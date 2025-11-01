import { Calendar, Clipboard, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const templates = [
  {
    icon: Clipboard,
    title: 'Meeting Notes',
    description: 'Capture decisions, action items, and follow-ups',
    blocks: '8 blocks',
  },
  {
    icon: TrendingUp,
    title: 'Project Tracker',
    description: 'Track tasks, deadlines, and team progress',
    blocks: '12 blocks',
  },
  {
    icon: BookOpen,
    title: 'Company Wiki',
    description: 'Build your team knowledge base',
    blocks: '15 blocks',
  },
  {
    icon: Calendar,
    title: 'Product Roadmap',
    description: 'Plan features and track development',
    blocks: '10 blocks',
  },
];

const Templates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="templates" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start fast with{' '}
            <span className="gradient-text">templates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pre-built templates for every team and use case
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <div
                key={index}
                className={`glass-strong rounded-xl p-6 hover-lift ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple via-pink to-cyan flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                <span className="text-xs text-purple">{template.blocks}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            className="neon-border hover:bg-purple/10"
          >
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
