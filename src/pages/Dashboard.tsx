import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Blocks, 
  Plus, 
  Search, 
  FileText, 
  Share2, 
  Star, 
  Trash2,
  MoreVertical,
  LogOut
} from 'lucide-react';

const mockDocuments = [
  {
    id: 1,
    title: 'Project Roadmap 2024',
    owner: 'You',
    lastModified: '2 hours ago',
    shared: 3,
  },
  {
    id: 2,
    title: 'Team Meeting Notes',
    owner: 'You',
    lastModified: '1 day ago',
    shared: 5,
  },
  {
    id: 3,
    title: 'Product Requirements',
    owner: 'Sarah Chen',
    lastModified: '3 days ago',
    shared: 8,
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 glass-strong border-r border-border/50 p-4 flex flex-col">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-purple via-pink to-cyan rounded-lg flex items-center justify-center">
            <Blocks className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">Co-Blocks</span>
        </Link>

        <Button className="mb-6 bg-gradient-to-r from-purple via-pink to-cyan text-white neon-glow hover:scale-105 transition-transform">
          <Plus className="w-4 h-4 mr-2" />
          New Document
        </Button>

        <nav className="space-y-2 flex-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/30 text-foreground">
            <FileText className="w-4 h-4" />
            <span>All Documents</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/20 text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Shared</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/20 text-muted-foreground hover:text-foreground transition-colors">
            <Star className="w-4 h-4" />
            <span>Favorites</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/20 text-muted-foreground hover:text-foreground transition-colors">
            <Trash2 className="w-4 h-4" />
            <span>Trash</span>
          </a>
        </nav>

        <div className="border-t border-border/50 pt-4 mt-4">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple to-pink"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-muted-foreground">john@example.com</div>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start mt-2 text-muted-foreground hover:text-foreground">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">
            My <span className="gradient-text">Documents</span>
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass"
              />
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDocuments.map((doc) => (
            <div
              key={doc.id}
              className="glass-strong rounded-xl p-6 hover-lift cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple via-pink to-cyan/50 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-semibold mb-2 line-clamp-2">{doc.title}</h3>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{doc.owner}</span>
                <span>•</span>
                <span>{doc.lastModified}</span>
              </div>

              {doc.shared > 0 && (
                <div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-2 text-sm text-muted-foreground">
                  <Share2 className="w-3 h-3" />
                  <span>Shared with {doc.shared} people</span>
                </div>
              )}
            </div>
          ))}

          {/* Create New Card */}
          <div className="glass-strong rounded-xl p-6 border-2 border-dashed border-border/50 flex flex-col items-center justify-center text-center hover:border-purple/50 transition-colors cursor-pointer group min-h-[200px]">
            <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mb-3 group-hover:bg-purple/20 transition-colors">
              <Plus className="w-6 h-6 text-muted-foreground group-hover:text-purple transition-colors" />
            </div>
            <h3 className="font-semibold mb-1">Create New Document</h3>
            <p className="text-sm text-muted-foreground">Start from scratch or use a template</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
