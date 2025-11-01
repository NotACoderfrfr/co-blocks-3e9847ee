import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center z-10">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-yellow" />
          <span className="text-sm">Always free, forever</span>
        </div>

        {/* Hero title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Write, plan, share.{' '}
          <span className="font-cursive gradient-text neon-text block mt-2">
            Together, beautifully.
          </span>
        </h1>

        {/* Hero subtitle */}
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          The collaborative workspace where teams create, share, and organize everything.
          Real-time editing with the power of 50+ block types.
        </p>

        {/* CTA Button */}
        <Link to="/auth/signup">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple via-pink to-cyan text-white font-semibold px-8 py-6 text-lg rounded-xl neon-glow hover:scale-105 transition-transform"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>

        {/* Editor Preview Mockup */}
        <div className="mt-16 relative">
          <div className="glass-strong rounded-2xl p-6 max-w-4xl mx-auto border-2 neon-border animate-glow-pulse">
            {/* Mock toolbar */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-green"></div>
              <div className="flex-1"></div>
              
              {/* Active users */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple to-pink border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink to-cyan border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan to-purple border-2 border-background"></div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>3 editing</span>
                </div>
              </div>
            </div>

            {/* Mock content */}
            <div className="text-left space-y-4">
              <div className="h-8 bg-gradient-to-r from-purple/20 to-transparent rounded w-2/3"></div>
              <div className="h-4 bg-muted/30 rounded w-full"></div>
              <div className="h-4 bg-muted/30 rounded w-5/6"></div>
              <div className="h-4 bg-muted/30 rounded w-4/6"></div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <div className="h-3 bg-cyan/30 rounded w-1/2 mb-2"></div>
                  <div className="h-2 bg-muted/20 rounded w-full"></div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="h-3 bg-pink/30 rounded w-1/2 mb-2"></div>
                  <div className="h-2 bg-muted/20 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
