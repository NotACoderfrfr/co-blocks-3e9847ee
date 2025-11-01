import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '1M+', label: 'Active Users' },
  { value: '50M+', label: 'Documents Created' },
  { value: '150+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
];

const Stats = () => {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
