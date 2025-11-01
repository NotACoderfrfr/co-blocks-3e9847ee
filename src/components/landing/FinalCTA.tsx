import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-strong rounded-2xl p-12 neon-border">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to start{' '}
            <span className="font-cursive gradient-text neon-text">collaborating?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using Co-Blocks to work better together.
          </p>
          <Link to="/auth/signup">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple via-pink to-cyan text-white font-semibold px-8 py-6 text-lg rounded-xl neon-glow hover:scale-105 transition-transform"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Free forever
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
