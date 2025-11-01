import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Blocks } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple via-pink to-cyan rounded-lg flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
              <Blocks className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Co-Blocks</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#templates" className="text-foreground/80 hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/auth/login">
              <Button variant="ghost" className="text-foreground">
                Login
              </Button>
            </Link>
            <Link to="/auth/signup">
              <Button className="bg-gradient-to-r from-purple via-pink to-cyan text-white neon-glow hover:scale-105 transition-transform">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
