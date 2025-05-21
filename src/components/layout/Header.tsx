
import Link from 'next/link';
import { Star, Home, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/theme/ThemeToggleButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Star className="h-8 w-8 icon-neon-red-malfunction animate-neon-blink" />
          <span className="text-xl font-bold text-white">БыстрыйСтарт</span>
        </Link>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10">
              <Link href="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Главная
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-white hover:bg-white/10">
              <Link href="/legal-info" className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                Условия
              </Link>
            </Button>
          </nav>
          <ThemeToggleButton />
          <div className="md:hidden">
            {/* Mobile menu button can be added here if needed,
                possibly integrating ThemeToggleButton into a Sheet menu */}
          </div>
        </div>
      </div>
    </header>
  );
}
