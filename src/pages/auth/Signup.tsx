import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Blocks, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ParticlesBackground from '@/components/ui/particles-background';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validatePassword = () => {
    if (password.length < 8) {
      toast({
        title: 'Password too short',
        description: 'Password must be at least 8 characters',
        variant: 'destructive',
      });
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast({
        title: 'Invalid password',
        description: 'Password must contain at least 1 uppercase letter',
        variant: 'destructive',
      });
      return false;
    }
    if (!/[0-9]/.test(password)) {
      toast({
        title: 'Invalid password',
        description: 'Password must contain at least 1 number',
        variant: 'destructive',
      });
      return false;
    }
    if (password !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        description: 'Please make sure your passwords match',
        variant: 'destructive',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast({
        title: 'Please accept terms',
        description: 'You must accept the terms and conditions',
        variant: 'destructive',
      });
      return;
    }

    if (!validatePassword()) return;

    setIsLoading(true);

    // Simulate signup
    setTimeout(() => {
      toast({
        title: 'Account created!',
        description: 'Welcome to Co-Blocks',
      });
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <ParticlesBackground />
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple via-pink to-cyan rounded-lg flex items-center justify-center neon-glow">
              <Blocks className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Co-Blocks</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-muted-foreground">Start collaborating in minutes</p>
        </div>

        <div className="glass-strong rounded-2xl p-8 neon-border">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="glass"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="glass"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="glass pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Min 8 characters, 1 uppercase, 1 number
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="glass pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox 
                id="terms" 
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                required
              />
              <Label htmlFor="terms" className="text-sm cursor-pointer">
                I accept the{' '}
                <a href="#" className="text-purple hover:underline">
                  Terms & Conditions
                </a>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple via-pink to-cyan text-white neon-glow hover:scale-105 transition-transform"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-purple hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
