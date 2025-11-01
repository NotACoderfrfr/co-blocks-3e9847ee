import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Blocks, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ParticlesBackground from '@/components/ui/particles-background';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      toast({
        title: 'Login successful!',
        description: 'Welcome back to Co-Blocks',
      });
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <ParticlesBackground />
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple via-pink to-cyan rounded-lg flex items-center justify-center neon-glow">
              <Blocks className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Co-Blocks</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Login to continue to your workspace</p>
        </div>

        <div className="glass-strong rounded-2xl p-8 neon-border">
          <form onSubmit={handleSubmit} className="space-y-6">
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Link to="/auth/forgot-password" className="text-sm text-purple hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple via-pink to-cyan text-white neon-glow hover:scale-105 transition-transform"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/auth/signup" className="text-purple hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
