import { Users, Type, Share2, Database, MessageSquare, FileText } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with live cursors and instant updates',
    gradient: 'from-purple to-pink',
  },
  {
    icon: Type,
    title: 'Rich Text Editor',
    description: '50+ block types including headings, lists, code, and more',
    gradient: 'from-pink to-cyan',
  },
  {
    icon: Share2,
    title: 'Smart Sharing ✨',
    description: 'Share with anyone via link or email with granular permissions',
    gradient: 'from-cyan to-purple',
  },
  {
    icon: Database,
    title: 'Databases & Tables',
    description: 'Create powerful databases with multiple views: grid, kanban, calendar',
    gradient: 'from-purple to-cyan',
  },
  {
    icon: MessageSquare,
    title: 'Comments & Discussions',
    description: 'Add comments, @mentions, and threaded discussions on any block',
    gradient: 'from-pink to-purple',
  },
  {
    icon: FileText,
    title: 'Templates Library',
    description: 'Start fast with pre-built templates for every use case',
    gradient: 'from-cyan to-pink',
  },
];

const Features = () => {
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
    <section id="features" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{' '}
            <span className="gradient-text">collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that make teamwork effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`glass-strong rounded-xl p-6 hover-lift ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
