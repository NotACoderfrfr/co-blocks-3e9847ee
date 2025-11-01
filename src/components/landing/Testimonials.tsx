import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Co-Blocks transformed how our team collaborates. The real-time editing is flawless and the interface is beautiful.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Engineering Lead',
    company: 'StartupXYZ',
    content: 'Finally, a Notion alternative that actually works! Love the 50+ block types and the speed is incredible.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'Content Director',
    company: 'MediaHub',
    content: 'The templates saved us hours of setup time. Best collaborative workspace we have ever used.',
    rating: 5,
  },
];

const Testimonials = () => {
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
    <section id="testimonials" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by{' '}
            <span className="gradient-text">thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-strong rounded-xl p-6 hover-lift ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
